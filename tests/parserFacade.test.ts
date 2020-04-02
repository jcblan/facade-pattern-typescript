import { Calculadora } from "../src/calculadora";
import { expect } from "chai";
import AccionReceptor from "../src/AccionReceptor";
import ParserFacade from "../src/ParserFacade";



describe('Test Parser', function() {
    it('Parser.parsear("uno dos tres") -> r.statenumero = "123"', function() {
        let r = new AccionReceptor();
        let p = new ParserFacade(r);
        p.parsear("uno dos tres");
        expect(r.stateNumero).equal("123");
    }); 
    it('Parser.parsear("cuatro cinco seis") -> r.statenumero = "456"', function() {
        let r = new AccionReceptor();
        let p = new ParserFacade(r);
        p.parsear("cuatro cinco seis");
        expect(r.stateNumero).equal("456");
    });
    it('Parser.parsear("siete ocho nueve") -> r.statenumero = "789"', function() {
        let r = new AccionReceptor();
        let p = new ParserFacade(r);
        p.parsear("siete ocho nueve");
        expect(r.stateNumero).equal("789");
    });
    it('Parser.parsear("cero") -> r.statenumero = "0"', function() {
        let r = new AccionReceptor();
        let p = new ParserFacade(r);
        p.parsear("uno cero");
        expect(r.stateNumero).equal("10");
    });
    it('Duplicado"', function() {
        let r = new AccionReceptor();
        let p = new ParserFacade(r);
        p.parsear("uno dos tres");
        expect(r.stateNumero).equal("123");
    });
});