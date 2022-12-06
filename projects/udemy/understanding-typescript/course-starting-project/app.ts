let userInput: unknown;
let userName: string;

userInput = 5;
userInput = () => {};
userInput = "Max";

// userName = userInput; // error

// ok
if (typeof userInput === "string") {
  userName = userInput;
}
