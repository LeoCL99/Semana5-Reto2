let finalizar=false;
let costo=0;
let tipo;
do {
    let Ti=+prompt(`Elige tu tipo de Hamburguesa: 
1-->Sencilla
2-->Doble
3-->Triple`);
let n=+prompt("¿Cuantas Hamburguesas quiere pedir?");
let Tp=+prompt(`¿Metodo de pago?
1. Efectivo
2. Tarjeta(con un cargo del 5%)`);
if(Tp>=3){
  console.log("Error de Opción")
  break;
}else
if(Ti>=4){
    console.log("Error de Opción")
    break;
}else
switch(Ti){
    case 1:
        if (Ti==1 && Tp==1) {
            costo=20;

        } else if(Ti==1 && Tp==2) {
            costo=20+20*0.05;
        }
        tipo="Hamburguesa sencilla"
    break;
    case 2:
         if (Ti==2 && Tp==1) {
             costo=25;
         } else if(Ti==2 && Tp==2) {
             costo=25+25*0.05;
         }
         tipo="Hamburguesa Doble"
    break;
    case 3:
        if (Ti==3 && Tp==1) {
            costo=28;
        } else if(Ti==3 && Tp==2) {
            costo=28+28*0.05;
        }
        tipo="Hamburguesa Triple"
    break;
    default:
        
         console.log("Error de opcion")
         break;
}

if (Tp==1) {
    Tp="Pago en efectivo es:"
} else {
    Tp="Pago teiene un cargo del 5% (Paga con Tarjeta)"
}
let total=n*costo;
console.log(`ha elegido la ${tipo},
ha pedido ${n} Hamburguesas,
su ${Tp}-->s/${total.toFixed(2)}`);
} while (finalizar);


