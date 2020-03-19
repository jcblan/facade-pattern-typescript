import { Calculadora } from "../src/calculadora";
import { expect } from "chai";
import AccionReceptor from "../src/AccionReceptor";



describe('Test metodo AccionNumero', function() {
    it('sumar 2 + 3 = 5', function() {
        let r = new AccionReceptor();
        r.ActionNumero("2");
        expect(r.stateNumero).equal("2");
    });

});