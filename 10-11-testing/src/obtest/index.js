// Aquí vamos a declarar todas las funciones y variables que necesitemos para ilustrar los casos de prueba
// const sumar = (a, b) => {
//     return (a + b);
// }

export const sumar = (a, b) => (a + b);
export const restar = (a, b) => (a - b);
export const multiplicar = (a, b) => (a * b);
export const dividir = (a, b) => (a / b);

export const devuelveEmail = () => 'gorka@gorka.com';

export const devuelveObjeto = () => {
    return {
        ancho: 10,
        alto: 19
    }
}

export const devuelveArrayNum = () => [1, 2, 3, 4, 5]
export const devuelveArrayObj = () => [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
export const devuelveArrayStr = () => ['leche', 'huevos', 'cereales', 'jamón', 'yogures']

export const devuelveTrue = () => true;
export const devuelveFalse = () => false;
export const devuelveNull = () => null;
export const devuelveUndefined = () => undefined;

export class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calculaArea() {
        this.ancho * this.alto
    }
}