function calcularPropina(monto, porcentaje) {
    return monto * (porcentaje / 100);
}

let montoCuenta = parseFloat(prompt("Ingresa el monto total de la cuenta:"));
let porcentajePropina = parseFloat(prompt("¿Qué porcentaje de propina deseas dejar?"));

let montoPropina = calcularPropina(montoCuenta, porcentajePropina);

let totalPagar = montoCuenta + montoPropina

console.log("Resumen de la Cuenta");
console.log("Monto de la cuenta: $" + montoCuenta);
console.log("Propina (" + porcentajePropina + "%): $" + montoPropina);
console.log("Total a pagar: $" + totalPagar);