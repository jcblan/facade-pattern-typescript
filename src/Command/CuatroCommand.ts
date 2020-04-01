import OperacionCommando from "../OperacionComando";
import AccionReceptor from "../AccionReceptor";


class CuatroCommand extends OperacionCommando{

    constructor(receptor: AccionReceptor){
        super(receptor);
    }

    execute(){
        this.receptor.ActionNumero("4");
    }
}


export default CuatroCommand;