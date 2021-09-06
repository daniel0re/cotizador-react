// Obtiene la diferencia de años
export function obtenerDifYear(year) {
    return new Date().getFullYear() - year;
}

// Calcula el tomar a pagar segun la marca
export function calcularMarca(marca) {
    let incremento;
    switch (marca) {
        case 'europeo':
            incremento = 1.3;
            break;
        case 'americano':
            incremento = 1.5;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;

        default:
            break;
    }
    return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.2 : 1.5;
}

// Poner la primera letra en Mayuscula
export function primerMayuscula(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}