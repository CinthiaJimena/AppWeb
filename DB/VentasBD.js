const {ventaDB, usuariosDB} = require("./Conexion");
const Venta = require("../class/Venta");
var {fechaHora} = require("../middlewares/fecha");

function validar(venta){
    var validar = false;
    if(venta.idUsuario!=undefined&&venta.idProducto!=undefined) {
        validar = true;
    }
    return validar;
}

async function mostrarV() {
    const ventas = await ventaDB.get();
    ventasV = [];
    ventas.forEach(venta => {
        const venta1 = new Venta({id:venta.id, ...venta.data()});
        if(validar(venta1.datos)) {
            ventasV.push(venta1.datos);
        }
    });
    return ventasV;
}

async function buscarPorId(id) {
    var ventaVal;
    const venta = await ventaDB.doc(id).get();
    const venta1 = new Venta({id:venta.id, ...venta.data()});
    if(validar(venta1.datos)) {
        ventaVal = venta1.datos;
    }
    return ventaVal;
}

async function newVenta(data) {
    data.fecha = fechaHora().fecha+", "+fechaHora().hora+" UTC-6";
    data.estatus="Activo";
    const venta1 = await new Venta(data);
    var ventaVal={};
    var ventaG=false;
    if(validar(venta1.datos)) {
        ventaVal= venta1.datos;
        await ventaDB.doc().set(ventaVal);
        ventaG= true;
    }
    return ventaG;
}

async function borrarV(id) {
    var ventaB=false;
    if(await buscarPorId(id)!=undefined) {
        ventaDB.doc(id).update({estatus:"Cancelado"});
        ventaB = true;
    }
    return ventaB;
}

module.exports = {
    mostrarV,
    newVenta,
    buscarPorId,
    borrarV
}