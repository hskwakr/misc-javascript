/* ================================= */
/* Enum                              */
/* ================================= */

// enum Position {
//   Top,
//   Right,
//   Bottom,
//   Left,
// }

// console.log(Position.Top); // 0
// console.log(Position.Right); // 1
// console.log(Position.Bottom); // 2

// let position: Position;
// //            ^^^^^^^^型

/* ================================= */
/* Enum                              */
/* numeric enum                      */
/* ================================= */

// enum Position {
//   Top, // 0
//   Right, // 1
//   Bottom, // 2
//   Left, // 3
// }

// enum Position {
//   Top = 1, // 1
//   Right, // 2
//   Bottom, // 3
//   Left, // 4
// }

/* ================================= */
/* Enum                              */
/* string enum                       */
/* ================================= */

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

/* ================================= */
/* Enum                              */
/* problems and alternatives         */
/* ================================= */

// enum ZeroOrOne {
//   Zero = 0,
//   One = 1,
// }
// const zeroOrOne: ZeroOrOne = 9; // コンパイルエラーは起きません！

// enum ZeroOrOne {
//   Zero = 0,
//   One = 1,
// }

// console.log(ZeroOrOne[0]); // これは期待どおり
// console.log(ZeroOrOne[9]); // これはコンパイルエラーになってほしいところ…

// enum StringEnum {
//   Foo = "foo",
// }

// const foo1: StringEnum = StringEnum.Foo; // コンパイル通る
// const foo2: StringEnum = "foo"; // コンパイルエラーになる

// type YesNo = "yes" | "no";
// function toJapanese(yesno: YesNo) {
//   switch (yesno) {
//     case "yes":
//       return "はい";
//     case "no":
//       return "いいえ";
//   }
// }

// const yes = Symbol();
// const no = Symbol();
// type YesNo = typeof yes | typeof no;

// function toJapanese(yesno: YesNo) {
//   switch (yesno) {
//     case yes:
//       return "はい";
//     case no:
//       return "いいえ";
//   }
// }

// const Position = {
//   Top: 0,
//   Right: 1,
//   Bottom: 2,
//   Left: 3,
// } as const;
// type Position = typeof Position[keyof typeof Position];
// // 上は type Position = 0 | 1 | 2 | 3 と同じ意味になります

// function toJapanese(position: Position) {
//   switch (position) {
//     case Position.Top:
//       return "上";
//     case Position.Right:
//       return "右";
//     case Position.Bottom:
//       return "下";
//     case Position.Left:
//       return "左";
//   }
// }

/* ================================= */
/* Union type                        */
/* ================================= */

// let numberOrUndefined: number | undefined;

// type ErrorCode =
//   | 400
//   | 401
//   | 402
//   | 403
//   | 404
//   | 405;

// type List = string | number[]; // wrong
// type List = (string | number)[]; // ok

// const maybeUserId: string | null = localStorage.getItem("userId");

// const userId: string = maybeUserId; // nullかもしれないので、代入できない。

// if (typeof maybeUserId === "string") {
//   const userId: string = maybeUserId; // この分岐内では文字列型に絞り込まれるため、代入できる。
// }

/* ================================= */
/* Discriminated union               */
/* ================================= */

// type UploadStatus = InProgress | Success | Failure;
// type InProgress = { done: boolean; progress: number };
// type Success = { done: boolean };
// type Failure = { done: boolean; error: Error };

// function printStatus(status: UploadStatus) {
//   if (status.done === false) {
//     console.log(`アップロード中:${status.progress}%`); // error
//   }
// }

// function printStatus(status: UploadStatus) {
//   if (status.done === false && "progress" in status) {
//     //                         ^^^^^^^^^^^^^^^^^^^^追加
//     console.log(`アップロード中:${status.progress}%`);
//     // コンパイルエラーが解消！
//   }
// }

// function printStatus(status: UploadStatus) {
//   if (status.done) {
//     if ("error" in status) {
//       console.log(`アップロード失敗:${status.error.message}`);
//     } else {
//       console.log("アップロード成功");
//     }
//   } else if ("progress" in status) {
//     console.log(`アップロード中:${status.progress}%`);
//   }
// }

// function printStatus(status: UploadStatus) {
//   if (status.type === "InProgress") {
//     console.log(`アップロード中:${status.progress}%`);
//   } else if (status.type === "Success") {
//     console.log("アップロード成功", status);
//   } else if (status.type === "Failure") {
//     console.log(`アップロード失敗:${status.error.message}`);
//   } else {
//     console.log("不正なステータス: ", status);
//   }
// }

// function printStatus(status: UploadStatus) {
//   switch (status.type) {
//     case "InProgress":
//       console.log(`アップロード中:${status.progress}%`);
//       break;
//     case "Success":
//       console.log("アップロード成功", status);
//       break;
//     case "Failure":
//       console.log(`アップロード失敗:${status.error.message}`);
//       break;
//     default:
//       console.log("不正なステータス: ", status);
//   }
// }

// type OkOrBadRequest =
//   | { statusCode: 200; value: string }
//   | { statusCode: 400; message: string };

// function handleResponse(x: OkOrBadRequest) {
//   if (x.statusCode === 200) {
//     console.log(x.value);
//   } else {
//     console.log(x.message);
//   }
// }

// type OkOrNotOk =
//   | { isOK: true; value: string }
//   | { isOK: false; error: string };

// function handleStatus(x: OkOrNotOk) {
//   if (x.isOK) {
//     console.log(x.value);
//   } else {
//     console.log(x.error);
//   }
// }

// type Result =
//   | { error: null; value: string }
//   | { error: Error };

// function handleResult(result: Result) {
//   if (result.error === null) {
//     console.log(result.value);
//   } else {
//     console.log(result.error);
//   }
// }

// type Result =
//   | { error: undefined; value: string }
//   | { error: Error };
//
// function handleResult(result: Result) {
//   if (result.error) {
//     console.log(result.error);
//   } else {
//     console.log(result.value);
//   }
// }

// type Shape =
//   | { type: "circle"; color: string; radius: number }
//   | { type: "square"; color: string; size: number };
//
// function toCSS(shape: Shape) {
//   const { type, color } = shape;
//   //      ^^^^ディスクリミネータ
//   switch (type) {
//     case "circle":
//       return {
//         background: color,
//         borderRadius: shape.radius,
//       };
//
//     case "square":
//       return {
//         background: color,
//         width: shape.size,
//         height: shape.size,
//       };
//   }
// }

/* ================================= */
/* intersection type                 */
/* ================================= */

// type TwoDimensionalPoint = {
//   x: number;
//   y: number;
// };

// type Z = {
//   z: number;
// };

// type ThreeDimensionalPoint = TwoDimensionalPoint & Z;
// const p: ThreeDimensionalPoint = {
//   x: 0,
//   y: 1,
//   z: 2,
// };

// type Never = string & number;

// const n: Never = "2";

// type Parameter = {
//   id: string;
//   index?: number;
//   active: boolean;
//   balance: number;
//   photo?: string;
//   age?: number;
//   surname: string;
//   givenName: string;
//   company?: string;
//   email: string;
//   phoneNumber?: string;
//   address?: string;
//   // ...
// };

// type Mandatory = {
//   id: string;
//   active: boolean;
//   balance: number;
//   surname: string;
//   givenName: string;
//   email: string;
// };

// type Optional = {
//   index: number;
//   photo: string;
//   age: number;
//   company: string;
//   phoneNumber: string;
//   address: string;
// };

// type Mandatory = Required<{
//   id: string;
//   active: boolean;
//   balance: number;
//   surname: string;
//   givenName: string;
//   email: string;
// }>;

// type Optional = Partial<{
//   index: number;
//   photo: string;
//   age: number;
//   company: string;
//   phoneNumber: string;
//   address: string;
// }>;

// type Parameter = Mandatory & Optional;
