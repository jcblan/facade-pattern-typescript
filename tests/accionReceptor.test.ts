import { Calculadora } from "../src/calculadora";
import { expect } from "chai";
import AccionReceptor from "../src/AccionReceptor";



describe('Test metodo AccionNumero', function() {
    it('ActionNumero -> 2', function() {
        let r = new AccionReceptor();
        r.ActionNumero("2");
        expect(r.stateNumero).equal("2");
    });
    it('ActionNumero -> 12', function() {
        let r = new AccionReceptor();
        r.ActionNumero("1");
        r.ActionNumero("2");
        expect(r.stateNumero).equal("12");
    });
    it('ActionNumero -> 123', function() {
        let r = new AccionReceptor();
        r.ActionNumero("1");
        r.ActionNumero("2");
        r.ActionNumero("3");
        expect(r.stateNumero).equal("123");
    });
    

});