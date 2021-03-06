import { Calculadora } from "../src/calculadora";
import { expect } from "chai";


describe('Test metodo Sumar', function() {
    it('sumar 2 + 3 = 5', function() {
      let cal = new Calculadora();
      let result = cal.sumar(2, 3);
      expect(result).equal(5);
    }); 
    it('sumar 0 + 0 = 0', function() {
      let cal = new Calculadora();
      let result = cal.sumar(0, 0);
      expect(result).equal(0);
    }); 
    it('sumar 1 + 0 = 1', function() {
      let cal = new Calculadora();
      let result = cal.sumar(1, 0);
      expect(result).equal(1);
    }); 
    it('sumar 0 + 1 = 1', function() {
      let cal = new Calculadora();
      let result = cal.sumar(0, 1);
      expect(result).equal(1);
    });
  });

  describe('Test metodo Restar', function() {
    it('restar 3 - 2 = 1', function() {
      let cal = new Calculadora();
      let result = cal.restar(3, 2);
      expect(result).equal(1);
    });
    it('restar 4 - 6 = 2', function() {
      let cal = new Calculadora();
      let result = cal.restar(4, 6);
      expect(result).equal(2);
    });
    it('restar 3 - 3 = 0', function() {
      let cal = new Calculadora();
      let result = cal.restar(3, 3);
      expect(result).equal(0);
    }); 
});

  describe('Test metodo Producto', function() {
    it('multiplicar 2 * 4 = 8', function() {
      let cal = new Calculadora();
      let result = cal.producto(2, 4);
      expect(result).equal(8);
    });
    it('multiplicar 2 * 0 = 0', function() {
      let cal = new Calculadora();
      let result = cal.producto(2, 0);
      expect(result).equal(0);
    });
    it('multiplicar 0 * 5 = 0', function() {
      let cal = new Calculadora();
      let result = cal.producto(0, 5);
      expect(result).equal(0);
    });
  });

  describe('Test metodo Dividir', function() {
    it('dividir 4 / 2 = 2', function() {
      let cal = new Calculadora();
      let result = cal.dividir(4, 2);
      expect(result).equal(2);
    });
    it('dividir 4 / 0 = NULL', function() {
      let cal = new Calculadora();
      let result = cal.dividir(4, 0);
      expect(result).equal(null);
    });
  });
