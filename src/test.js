function* testGenerator() {
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}

const test = testGenerator();

console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
