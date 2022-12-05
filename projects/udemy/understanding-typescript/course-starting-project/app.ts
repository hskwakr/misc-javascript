function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

function combine2<T extends number | string>(input1: T, input2: T): T {
  let result: T;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = (input1 + input2) as T;
  } else {
    result = (input1.toString() + input2.toString()) as T;
  }
  return result;
}

const combinedAges = combine2(30, 26);
console.log(combinedAges);

const combineNames = combine2("Max", "Anna");
console.log(combinedAges);
