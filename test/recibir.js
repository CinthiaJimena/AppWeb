var a=require("./variables");
var b=require("./variables2");
console.log(a);
console.log(b);

//Deestrcuturacion
var {b,c}=require("./variables2");
console.log(b);
console.log(c);
var c=require("./variables2").c;
console.log(c);

var d=require("./variables3").d;
console.log(d);
