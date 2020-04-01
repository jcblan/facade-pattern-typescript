import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class CeroCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("0");
    }
}


export default CeroCommand;