//* 11- Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.*/

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert.strictEqual(isAbove(5, 3), true);

assert.strictEqual(isAbove(3, 5), false);
