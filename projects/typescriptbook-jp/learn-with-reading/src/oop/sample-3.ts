/* eslint-disable max-len */
/* ================================= */
/* class                             */
/* constructor shorthand             */
/* ================================= */

// class ConstructorInAccessModifier {
//   constructor(
//     arg0: number,
//     public arg1: number,
//     protected arg2: number,
//     private arg3: number
//   ) {
//     console.log({ arg0, arg1, arg2, arg3 });
//   }
// }

// class ConstructorOutAccessModifier {
//   public arg1: number;

//   protected arg2: number;

//   private arg3: number;

//   constructor(arg0: number, arg1: number, arg2: number, arg3: number) {
//     this.arg1 = arg1;
//     this.arg2 = arg2;
//     this.arg3 = arg3;
//     console.log({ arg0, arg1, arg2, arg3 });
//   }
// }

// const InAccess = new ConstructorInAccessModifier(1, 2, 3, 4);
// InAccess.arg0;
// // Property 'arg0' does not exist on type 'ConstructorInAccessModifier'.
// InAccess.arg1;
// InAccess.arg2;
// // Property 'arg2' is protected and only accessible within class 'ConstructorInAccessModifier' and its subclasses.
// InAccess.arg3;
// // Property 'arg3' is private and only accessible within class 'ConstructorInAccessModifier'.

// const outAccess = new ConstructorOutAccessModifier(1, 2, 3, 4);
// outAccess.arg0;
// // Property 'arg0' does not exist on type 'ConstructorOutAccessModifier'.
// outAccess.arg1;
// outAccess.arg2;
// // Property 'arg2' is protected and only accessible within class 'ConstructorOutAccessModifier' and its subclasses.
// outAccess.arg3;
// // Property 'arg3' is private and only accessible within class 'ConstructorOutAccessModifier'.

/* ================================= */
/* class                             */
/* readonly                          */
/* ================================= */

// class Octopus {
//   readonly name: string;

//   readonly legs = 8; // フィールド初期化子での代入はOK

//   constructor() {
//     this.name = "たこちゃん"; // コンストラクターでの代入はOK
//   }
// }

// const octopus = new Octopus();
// octopus.legs = 16;
// // Cannot assign to 'legs' because it is a read-only property.

// class Octopus {
//   readonly name = "たこちゃん";

//   // Cannot assign to 'name' because it is a read-only property.
//   setName(newName: string): void {
//     this.name = newName;
//   }
// }

/* ================================= */
/* class is object                   */
/* ================================= */

// // javascript
// const myObject = {};
// myObject.key = "value"; // プロパティを追加

// class MyClass {}
// MyClass.key = "value"; // プロパティを追加

// // typescript
// class MyClass {}
// MyClass.key = "value"; // error
// // Property 'key' does not exist on type 'typeof MyClass'.
