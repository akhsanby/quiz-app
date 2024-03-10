export default [
  {
    question: "Apa output dari pernyataan berikut?",
    code: `console.log(5 + "5");`,
    answers: ["55", "10", '"55"', "Error"],
    correctAnswer: '"55"',
  },
  {
    question: "Apa yang akan dilakukan perintah berikut?",
    code: `typeof 42;`,
    answers: ['Mengembalikan "number"', 'Mengembalikan "string"', 'Mengembalikan "object"', 'Mengembalikan "boolean"'],
    correctAnswer: 'Mengembalikan "number"',
  },
  {
    question: "Apa output dari pernyataan berikut?",
    code: `console.log(Boolean("false"));`,
    answers: ["true", "false", "NaN", "Error"],
    correctAnswer: "true",
  },
  {
    question: "Apa yang akan menjadi hasil dari eksekusi kode berikut?",
    code: `
    let x = 5;
    function test() {
      let x = 10;
      console.log(x);
    }
    test();
    console.log(x);
    `,
    answers: ["10, 5", "5, 10", "5, 5", "10, 10"],
    correctAnswer: "10, 5",
  },
  {
    question: "Apa yang akan menjadi keluaran dari kode berikut?",
    code: `console.log(1 + "2" + 3 + 4);`,
    answers: ["1234", "10", "16", "10"],
    correctAnswer: "1234",
  },
  {
    question: "Apa yang akan menjadi hasil dari eksekusi kode berikut?",
    code: `
    let a = 10;
    function myFunction() {
        console.log(a);
    }
    myFunction();
    `,
    answers: ["Error", "10", "undefined", "NaN"],
    correctAnswer: "10",
  },
  {
    question: "Apa yang akan menjadi output dari pernyataan berikut?",
    code: `console.log(typeof NaN);`,
    answers: ["number", "string", "undefined", "object"],
    correctAnswer: "number",
  },
  {
    question: "Apa output dari pernyataan berikut?",
    code: `console.log(typeof typeof 42);`,
    answers: ["number", "string", "object", "undefined"],
    correctAnswer: "string",
  },
  {
    question: "Apa yang akan menjadi hasil dari eksekusi kode berikut?",
    code: `console.log(Math.min());`,
    answers: ["0", "-Infinity", "Infinity", "NaN"],
    correctAnswer: "Infinity",
  },
  {
    question: "Apa yang akan menjadi keluaran dari kode berikut?",
    code: `
    let x = 0;
    switch (x) {
      case 0:
        console.log("x is 0");
        break;
      case 1:
        console.log("x is 1");
        break;
      default:
        console.log("x is not 0 or 1");
    }
    `,
    answers: ["x is 0", "x is 1", "x is not 0 or 1", "Error"],
    correctAnswer: "x is 0",
  },
];
