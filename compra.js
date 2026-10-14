let totalCompra = 150000;
let esCliente = true;

let descuento;
let totalFinal;

if (totalCompra > 100000) {
    if (esCliente === true) {
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
} else {
    if (esCliente === true) {
        descuento = 0.05;
    } else {
        descuento = 0;
    }
}

totalFinal = totalCompra - (totalCompra * descuento);

console.log("Descuento aplicado: " + (descuento * 100) + "%");
console.log("Total a pagar: $" + totalFinal);