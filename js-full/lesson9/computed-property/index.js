/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
// put your code here
function addPropertyV2(obj, key, value) {
  const newObj = {};
  newObj[key] = value;
  Object.assign(obj, newObj);
  return obj
}
// put your code here
function addPropertyV3(obj, key, value) {
  const newObj = {};
  newObj[key] = value;
  return Object.assign({}, obj, newObj);
}
// put your code here
function addPropertyV4(obj, key, value) {
  const newObj = {};
  newObj[key] = value;
  return {
    ...obj,
    ...newObj,
  }
}
// examples
const transaction = {
  value: 170,
};
console.log(addPropertyV4(transaction, 'currency', 'USD'));; // ==> { value: 170, currency: 'USD' }
