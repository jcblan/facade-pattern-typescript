import { expect } from "chai";
import AccionReceptor from "../src/AccionReceptor";
import UnoCommand from "../src/Command/UnoCommand";
import DosCommand from "../src/Command/DosCommand";
import CeroCommand from "../src/Command/CeroCommand";
import TresCommand from "../src/Command/TresCommand";
import CuatroCommand from "../src/Command/CuatroCommand";
import CincoCommand from "../src/Command/CincoCommand";
import SeisCommand from "../src/Command/SeisCommand";
import SieteCommand from "../src/Command/SieteCommand";
import OchoCommand from "../src/Command/OchoCommand";
import NueveCommand from "../src/Command/NueveCommand";


describe('Test Herencia OperandoComando', function() {
    
    it('UnoCommand.execute() -> r.stateNumero = 1', function() {
        let r = new AccionReceptor();
        let uno = new UnoCommand(r);
        uno.execute();
        expect(r.stateNumero).equal("1");
    });

    it('DosCommand.execute() -> r.stateNumero = 2', function() {
        let r = new AccionReceptor();
        let uno = new DosCommand(r);
        uno.execute();
        expect(r.stateNumero).equal("2");
    });

    it('TresCommand.execute() -> r.stateNumero = 3', function() {
        let r = new AccionReceptor();
        let tres = new TresCommand(r);
        tres.execute();
        expect(r.stateNumero).equal("3");
    });
   
    it('CuatroCommand.execute() -> r.stateNumero = 4', function() {
        let r = new AccionReceptor();
        let cuatro = new CuatroCommand(r);
        cuatro.execute();
        expect(r.stateNumero).equal("4");
    });
    
    it('CindoCommand.execute() -> r.stateNumero = 5', function() {
        let r = new AccionReceptor();
        let cinco = new CincoCommand(r);
        cinco.execute();
        expect(r.stateNumero).equal("5");
    });
    
    it('SeisCommand.execute() -> r.stateNumero = 6', function() {
        let r = new AccionReceptor();
        let seis = new SeisCommand(r);
        seis.execute();
        expect(r.stateNumero).equal("6");
    });
    
    it('SieteCommand.execute() -> r.stateNumero = 7', function() {
        let r = new AccionReceptor();
        let siete = new SieteCommand(r);
        siete.execute();
        expect(r.stateNumero).equal("7");
    });
    
    it('OchoCommand.execute() -> r.stateNumero = 8', function() {
        let r = new AccionReceptor();
        let ocho = new OchoCommand(r);
        ocho.execute();
        expect(r.stateNumero).equal("8");
    });
    
    it('DosCommand.execute() -> r.stateNumero = 9', function() {
        let r = new AccionReceptor();
        let nueve = new NueveCommand(r);
        nueve.execute();
        expect(r.stateNumero).equal("9");
    });
    
    it('CeroCommand.execute() -> r.stateNumero = 0', function() {
        let r = new AccionReceptor();
        let cero = new CeroCommand(r);
        cero.execute();
        expect(r.stateNumero).equal("0");
    });

});