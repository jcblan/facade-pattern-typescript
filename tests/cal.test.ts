import { Calculadora } from "C://Users/Julio/Documents/Ing de SW II/calculadora";
import { expect } from "chai";


describe('calculadora', function() {
    it('sumar 2 + 3', function() {
      let cal = new Calculadora();
      let result = cal.sumar(2, 3);
      expect(result).equal(5);
    }); 
    it('sumar 0 + 0', function() {
      let cal = new Calculadora();
      let result = cal.sumar(0, 0);
      expect(result).equal(0);
    }); 
    it('sumar 1 + 0', function() {
      let cal = new Calculadora();
      let result = cal.sumar(1, 0);
      expect(result).equal(1);
    }); 
    it('sumar 0 + 1', function() {
      let cal = new Calculadora();
      let result = cal.sumar(0, 1);
      expect(result).equal(1);
    });    
  });