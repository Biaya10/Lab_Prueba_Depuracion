const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//test funcion divide
test('divide 40 / 5 to equal 8', () => {
  expect(calculator.divide(40, 5)).toBe(8);
});

test('divide 7.5 / 2.5 to equal 3', () => {
  expect(calculator.divide(7.5, 2.5)).toBe(3);
});

//TDD: division por cero
test('divide 10 / 0 returns error message', () => {
  expect(calculator.divide(10, 0)).toBe("Error: No se puede dividir entre cero");
});

//test funcion multiply
test('multiply 6 * 7 to equal 42', () => {
  expect(calculator.multiply(6, 7)).toBe(42);
});

test('multiply -3 * 4 to equal -12', () => {
  expect(calculator.multiply(-3, 4)).toBe(-12);
});