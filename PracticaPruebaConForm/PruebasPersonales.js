let operacion = document.getElementById("operacion");

let pResul = document.getElementById("resultado");

function convertir(){
    let cantidad = parseFloat(document.getElementById("cifra").value);
    let resultado;
    switch (operacion.value) {
        case 'pesodolar':
            resultado = cantidad/18.16;
            pResul.textContent  = cantidad + " pesos " + "equivalen a " +  resultado + " dolares.";
            break;

        case 'dolarpeso':
            resultado = cantidad * 18.16;
            pResul.textContent = cantidad + " dolares equivalen a " + resultado +" pesos mexicanos";
            break;

        default:

            break;
    }
}