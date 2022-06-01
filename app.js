const moment = require('moment');

/********************************************************************************************/
// JAVASCRIPT VANILLA
const date = new Date();
const formatedDate = 
date.toLocaleDateString().split('/').join('-');
console.log(formatedDate);


// MOMENT
console.log(moment('16-12-1997', 'DD-MM-YYYY').format('DD-MM-YYYY'));
/********************************************************************************************/

/********************************************************************************************/
// JAVASCRIPT VANILLA
function findDifference (newDate, oldDate) {
    let years = newDate.getFullYear() - oldDate.getFullYear();
    if (newDate.getMonth() < oldDate.getMonth()) {
        years--
    }
    
    if (newDate.getMonth() === oldDate.getMonth() && newDate.getDate() < oldDate.getDate()) {
        years --    
    }
    
    return years;
}
console.log(findDifference(new Date(), new Date('1997-12-16')));


// MOMENT
console.log(moment('16/12/1997', 'DD/MM/YYYY').fromNow());
/********************************************************************************************/

/********************************************************************************************/
// VALIDACIÓN 
// Requiere un formato de fecha, ex.: 16-12-2022
function validarFecha(fechaAValidar) {
    let isValid;
    if (typeof fechaAValidar !== 'string') {
        isValid = false; return isValid
    }
    const fechaSeparada = fechaAValidar.split('-');
    const dia = parseInt(fechaSeparada[0]);
    const mes = parseInt(fechaSeparada[1]);
    const año = parseInt(fechaSeparada[2]);
    const mesesDeTreinta = [2,4,6,9,11];
    if (dia > 31 || mes > 12) {
        isValid = false;
        return isValid;
    }
    if (mes === 2 && dia > 29) {
        isValid = false;
        return isValid;
    }
    if (mes === 2 && año % 4 !== 0 && dia > 28) {
        isValid = false;
        return isValid;
    }
    isValid = true;
    mesesDeTreinta.forEach(m => {
        if (m === mes && dia >= 31) {
            isValid = false;
        }
    });
    return isValid;
}

console.log(validarFecha('29-02-1998'));

// MOMENT
console.log(moment('29/02/2012', 'DD/MM/YYYY').isValid())
/********************************************************************************************/

function validarFechaDos(fechaAValidar) {
    let isValid;
    if (typeof fechaAValidar !== 'string') {
        isValid = false; return isValid
    }
    let fechaSeparada = fechaAValidar.split('-');
    fechaSeparada = fechaSeparada.filter(i => !isNaN(parseInt(i)));
    const dia = parseInt(fechaSeparada[0]);
    const mes = parseInt(fechaSeparada[1]);
    const año = parseInt(fechaSeparada[2]);
    const mesesDeTreinta = [2,4,6,9,11];
    const excedido = dia > 31 || mes > 12;
    const febrero = mes === 2 && dia > 29
    const dias29 = mes === 2 && año % 4 !== 0 && dia > 28;
    isValid = !excedido && !febrero && !dias29;
    mesesDeTreinta.forEach(m => {
        if (m === mes && dia >= 31) {
            isValid = false;
        }
    });
    return isValid;
};
console.log(validarFechaDos('01-05-1997'))


