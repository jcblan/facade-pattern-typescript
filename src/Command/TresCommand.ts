import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class TresCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("3");
    }
}


export default TresCommand;