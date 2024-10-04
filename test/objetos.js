var a={//Es una manera simple de formar objetos en este caso se llaman diccionarios de datos.
//  clase: "datos"
    nombre: "Fernando",
    profesion: "Informatica"
}
console.log(a);
a.nombre = "Eon";
console.log(a);
a.celular="4141127519";
console.log(a);
a.correos={
    correo1: "Fer@git.net",
    correo2: "antoniolc.ti23@utsjr.edu.mx"
}
console.log(a);
a.correos.correo1 = "landa@gmail.com";
a.correos.correo2 = "freddie@live.com";
console.log(a.correos.correo1+"\n"+a.correos.correo2);
