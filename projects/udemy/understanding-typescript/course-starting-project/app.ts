function add2(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add2(5, 12));

let combineValues: typeof add2;
combineValues = add2;

console.log(combineValues(8, 8));
