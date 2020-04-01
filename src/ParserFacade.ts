import AccionReceptor from "./AccionReceptor";
import UnoCommand from "./Command/UnoCommand";
import DosCommand from "./Command/DosCommand";
import TresCommand from "./Command/TresCommand";
import CuatroCommand from "./Command/CuatroCommand";
import CincoCommand from "./Command/CincoCommand";
import SeisCommand from "./Command/SeisCommand";
import SieteCommand from "./Command/SieteCommand";
import OchoCommand from "./Command/OchoCommand";
import NueveCommand from "./Command/NueveCommand";
import CeroCommand from "./Command/CeroCommand";


class ParserFacade{

    //TO DO implementar setrs y getrs
    protected cero: CeroCommand;
    protected uno: UnoCommand;
    protected dos: DosCommand;
    protected tres: TresCommand;
    protected cuatro: CuatroCommand;
    protected cinco: CincoCommand;
    protected seis: SeisCommand;
    protected siete: SieteCommand;
    protected ocho: OchoCommand;
    protected nueve: NueveCommand;
    //TO DO implementar setrs y getrs

    constructor(receptor: AccionReceptor){
        this.cero = new CeroCommand(receptor);
        this.uno = new UnoCommand(receptor);
        this.dos = new DosCommand(receptor);
        this.tres = new TresCommand(receptor);
        this.cuatro = new CuatroCommand(receptor);
        this.cinco = new CincoCommand(receptor);
        this.seis = new SeisCommand(receptor);
        this.siete = new SieteCommand(receptor);
        this.ocho = new OchoCommand(receptor);
        this.nueve = new NueveCommand(receptor);
    }


    parsearOperador(cadena: string){
        let valores = cadena.split(" ");
        for(let i = 0; i < valores.length; i++){
            switch(valores[i]){
                case "cero":
                    this.cero.execute();
                    break;
                case "uno":
                    this.uno.execute();
                    break;
                case "dos":
                    this.dos.execute();
                    break;
                case "tres":
                    this.tres.execute();
                    break;
                case "cuatro":
                    this.cuatro.execute();
                    break;
                case "cinco":
                    this.cinco.execute();
                    break;
                case "seis":
                    this.seis.execute();
                    break;
                case "siete":
                    this.siete.execute();
                    break;
                case "ocho":
                    this.ocho.execute();
                    break;
                case "nueve":
                    this.nueve.execute();
                    break;
            }
        
        }
    }
}

export default ParserFacade;