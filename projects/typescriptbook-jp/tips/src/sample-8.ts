/* ================================= */
/* generates type                    */
/* from object property              */
/* ================================= */

// const conf = {
//   en: "Are you sure?",
//   fr: "Êtes-vous sûr?",
//   es: "Está seguro?",
//   ja: "よろしいですか？",
//   zh: "您确定吗？",
// };

// // type ConfirmationMessage =
// //   | "Are you sure?"
// //   | "Êtes-vous sûr?"
// //   | "Está seguro?"
// //   | "よろしいですか？"
// //   | "您确定吗？";

// type Language = keyof typeof conf;

// type ConfirmationMessage = typeof conf[Language];

// const conf = {
//   en: "Are you sure?",
//   fr: "Êtes-vous sûr?",
//   es: "Está seguro?",
//   ja: "よろしいですか？",
//   zh: "您确定吗？",
// } as const;

// const conf = {
//   en: "Are you sure?",
//   fr: "Êtes-vous sûr?",
//   es: "está seguro?",
//   ja: "よろしいですか？",
//   zh: "您确定吗？",
// } as const;

// type ConfirmationMessage = typeof conf[keyof typeof conf];
