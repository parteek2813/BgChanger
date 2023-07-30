function createGreeter(greeting) {
  function greet(name) {
    console.log(greeting, name);
    return 1;
  }

  return greet('X');
}
let g1 = createGreeter('Good afternoon');
console.log(typeof g1);
