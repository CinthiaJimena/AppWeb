const rutas = require("express").Router();
const {mostrarV, newVenta, buscarPorId, borrarV} = require("../DB/VentasBD");

rutas.get("/ventas", async (req, res) => {
    var ventasV = await mostrarV();
    res.json(ventasV);
});

rutas.get("/ventas/buscarPorId/:id", async (req, res) => {
    var ventaVal = await buscarPorId(req.params.id);
    res.json(ventaVal);
});

rutas.post("/ventas/newVenta", async (req, res) => {
    var ventaNueva = await newVenta(req.body);
    res.json(ventaNueva);
});

rutas.delete("/ventas/borrarV/:id", async (req, res) => {
    var ventaB = await borrarV(req.params.id);
    res.json(ventaB);
});

module.exports = rutas;