
export class Calculadora {

    constructor() {

    }

    sumar(a: number, b: number): number {
        let elem = [];

        if (a == 0)
        {
            return b;
        }
        else if (b == 0)
        {
            return a;
        }

        for(let i = 0;i < a;i++)
        {
            elem.push("1");
        }
        
        for(let i = 0;i < b;i++)
        {
            elem.push("1");
        }
        return elem.length;
    }
}


//const cal = new Calculadora();
//console.log(cal.sumar(1, 2));
