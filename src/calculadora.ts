
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

    restar(a: number, b:number):number {

        if (a == b){
            return 0;
        }

        let elem = [];
        let men = 0; 
        let may = 0;

        if (a > b){
            may = a;
            men = b;
        }else {
            may = b;
            men = a;
        }
    
        for(let i = 0;i < may;i++)
        {
            elem.push("1");
        }
        
        for(let i = 0;i < men;i++)
        {
            elem.pop();
        }

        return elem.length;
        
    }

    producto(a:number, b:number):number{
        
        let prod = 0;

        if(a == 0 || b == 0){
            return 0;
        }

        for(let i = 0; i < a; i++){
            prod = this.sumar(prod, b);
        }
        return prod;
    }

    dividir(dividendo:number, divisor:number):number{

        if (divisor == 0){
            return null;
        }
        let cociente = 0;

        while(dividendo >= divisor){
            dividendo = this.restar(dividendo, divisor);
            cociente = this.sumar(cociente, 1);
        }

        return cociente;
    }

}

export default Calculadora;
