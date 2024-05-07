const btnCalcular= document.getElementById('btnCalcular');
btnCalcular.addEventListener('click',function calcular (){

let peso=document.getElementById('peso'). value;
let altura=document.getElementById('altura'). value;
let imc= peso/(altura*altura);

document.getElementById('imc'). value=imc.toFixed(2);
});

const btnLimpiar= document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click',function limpiar (){

document.getElementById('peso'). value=null;
document.getElementById('altura'). value=null;
document.getElementById('imc'). value=null;
});