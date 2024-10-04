function saludar(nombre){
    //var n="Hola "+nombre; Un valor que solo se ocupa una vez no requiere ser almacenada
    return "Hola "+nombre;
}
console.log(saludar("Cinthia"));

var saludo2=(nombre)=>{//El valor recibido no requiere estar entre parentesis en las arrow function
    return "Hola "+nombre+" con una arrow function";
}
console.log(saludo2("Gabino"));


var saludo3=(nombre1,nombre2)=>"Hola "+nombre1+" y "+nombre2+" con una arrow function acortada";
console.log(saludo3("Luis","Saori"));

var saludo4=function(nombre){//Esto es una funcion anonima.
    return "Hola "+nombre;
}
console.log(saludo4("Dani"));

var saludo5=function(nombre="anonimo"){
    return"Hola "+nombre;
}
console.log(saludo5("Menganito"));

var saludo6=()=>{
    console.log("saludo6");
    
}

var saludo7=(nombre, saludo6)=>{
    console.log("saludo7 "+nombre);
    saludo6();
}

saludo7("Yuzu",saludo6);