/**
 * Создает уникальный id.
 *@return {string} случайное число и буква
 *(сложность настраивается путем увеличения диапозона charcode).
 */

let id = 0;
const useId = (): string | void => {
  function* GeneratorId() {
    while (true) {
      /* eslint-disable */
      yield `${++id}${String.fromCharCode(~~(Math.random() * (90 - 65)) + 65)}`;
    }
  }
  return GeneratorId().next().value;
};
export default useId;
