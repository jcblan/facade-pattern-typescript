import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class DosCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("2");
    }
}


export default DosCommand;