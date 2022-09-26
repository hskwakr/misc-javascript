/* ================================= */
/* class                             */
/* initializer                       */
/* ================================= */

// class Point {
//   x: number = 0;

//   y: number = 0;
// }

// const point = new Point();
// console.log(point.x, point.y);

// class Point {
//   x: number;

//   y: number;

//   constructor() {
//     this.x = 0;
//     this.y = 0;
//   }
// }

// class Point {
//   x = 0; // number型と型推論される
// }

/* ================================= */
/* class                             */
/* access modifier                   */
/* ================================= */

// class Animal {
//   public name: string; // フィールドにpublicアクセス修飾子

//   // コンストラクターにpublicアクセス修飾子
//   public constructor(theName: string) {
//     this.name = theName;
//   }

//   // メソッドにpublicアクセス修飾子
//   public move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//     // publicアクセス修飾子である`this.name`を使用することが可能
//   }
// }

// const gorilla = new Animal("ゴリラ");
// gorilla.move(10);
// gorilla.name = "ゴリラゴリラ";
// gorilla.move(20);

// class Animal {
//   public name: string;

//   public constructor(theName: string) {
//     this.name = theName;
//   }

//   // `public`から`protected`に変更
//   protected move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// const gorilla = new Animal("ゴリラ");
// gorilla.move(10); // error
// // Property 'move' is protected and only accessible within class 'Animal' and its subclasses.

// class Animal {
//   public name: string;

//   public constructor(theName: string) {
//     this.name = theName;
//   }

//   // `public`から`protected`に変更
//   protected move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// class Gorilla extends Animal {
//   move(distanceInMeters: number) {
//     super.move(distanceInMeters * 10);
//   }
// }

// const gorilla = new Gorilla("速いゴリラ");
// gorilla.move(10);

// class Animal {
//   public name: string;

//   public constructor(theName: string) {
//     this.name = theName;
//   }

//   // `public`から`private`に変更
//   private move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// // Class 'Gorilla' incorrectly extends base class 'Animal'
// // Property 'move' is private in type 'Animal' but not in type 'Gorilla'.
// class Gorilla extends Animal {
//   // Property 'move' is private and only accessible within class 'Animal'.
//   move(distanceInMeters: number) {
//     super.move(distanceInMeters * 10);
//   }
// }
