// A First Class Decorator
// Working with Decorator Factories

function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// Building More Useful Decorators
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template...");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// Adding Multiple Decorators

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const p = new Person();
console.log(p);

// Diving into Property Decorators

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator!");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number = 0;

  set price(val: number) {
    if (val >= 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
