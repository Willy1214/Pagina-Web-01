//Practica Operaciones



const btnLimpiar2= document.getElementById('btnLimpiar2');
btnLimpiar2.addEventListener('click',function limpiar2 (){

document.getElementById('idNumero1'). value=null;
document.getElementById('idNumero2'). value=null;
document.getElementById('idResultado'). value=null;
});


const btnCalcular2= document.getElementById('btnCalcular2');
btnCalcular2.addEventListener('click',function calcular2 (){

const idNumero1=document.getElementById('idNumero1'). value;
const idNumero2=document.getElementById('idNumero2'). value;
const idOpcion=document.getElementById('idOpcion'). value;

let n1=parseInt(idNumero1);
let n2=parseInt(idNumero2);
let opcion=parseInt(idOpcion);

switch(opcion)
{
    case 1:n2=n1+n2;break;
    case 2:n2=n1-n2;break;
    case 3:n2=n1*n2;break;
    case 4:n2=n1/n2;break;
}
document.getElementById('idResultado'). value=n2;
});