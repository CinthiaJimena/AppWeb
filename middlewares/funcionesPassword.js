const { log } = require("console");
const crypto=require("crypto");

function encriptarPassword(password) {
    const salt = crypto.randomBytes(32).toString("hex");
    //console.log(salt);
    const hash = crypto.scryptSync(password, salt, 10000, 64, "sha512").toString("hex");
    //console.log(hash);
    return {
        salt,
        hash
    }
}

function validarPassword(password, salt, hash) {
    //console.log(password);
    
    const hashEvaluar = crypto.scryptSync(password, salt, 10000, 64, "sha512");
    //Se pueden hacer comparaciones directas sin requerir de la funcion condicional (if, switch)
    //console.log(5==3);
    return hashEvaluar == hash;
}

function usuarioAutorizado(){
    // Lógica futura para actualizar un usuario
}

function adminAutorizado(){
    // Lógica futura para verificar permisos de administrador
}

module.exports = {
    encriptarPassword,
    validarPassword,
    usuarioAutorizado,
    adminAutorizado
}

//validarPassword();
//encriptarPassword("abc");