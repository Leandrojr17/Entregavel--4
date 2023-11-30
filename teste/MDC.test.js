const MDC = require('../funcoes/MDC.js');

test('Calcula o MDC corretamente', () => {
  expect(MDC(2, 10)).toBe(2);
});

 

test('Calcula o MDC para um número ser zero', () => {
  expect(MDC(0, 10)).toBe(10);
});
