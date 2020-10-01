//Хук для генерации id
let id = 0;
const useId = (): string | void => {
  function* GeneratorId() {
    while (true) {
      yield `${++id}${String.fromCharCode(~~(Math.random() * (90 - 65)) + 65)}`;
    }
  }
  return GeneratorId().next().value;
};
export default useId;
