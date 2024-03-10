export default [
  {
    question: "Apa output dari kode PHP berikut?",
    code: `
    <?php
      $a = 5;
      $b = 3;
      echo $a + $b * 2;
    ?>
    `,
    answers: ["11", "13", "16", "21"],
    correctAnswer: "11",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode PHP berikut?",
    code: `
    <?php
      echo strlen($str);
      $str = "Hello World!";
    ?>
    `,
    answers: ["5", "10", "12", "13"],
    correctAnswer: "12",
  },
  {
    question: "Apa fungsi dari operator berikut dalam PHP?",
    code: `===`,
    answers: ["Membandingkan nilai variabel tanpa memperhatikan tipe data", "Membandingkan tipe data variabel", "Membandingkan nilai variabel dengan memperhatikan tipe data", "Membandingkan tipe data variabel tanpa memperhatikan nilai"],
    correctAnswer: "Membandingkan nilai variabel dengan memperhatikan tipe data",
  },
  {
    question: "Berapakah hasil eksekusi dari kode PHP berikut?",
    code: `
    <?php
      $array = array(1, 2, 3, 4, 5);
      $result = array_sum($array);
      echo $result;
    ?>
    `,
    answers: ["10", "11", "14", "15"],
    correctAnswer: "15",
  },
  {
    question: "Apa yang akan menjadi output dari kode PHP berikut?",
    code: `
    <?php
      $x = 10;
      $y = 5;
      function test(){
          global $x, $y;
          $y = $x + $y;
      }
      test();
      echo $y;
    ?>
    `,
    answers: ["5", "10", "15", "20"],
    correctAnswer: "15",
  },
  {
    question: "Berapakah output dari kode PHP berikut?",
    code: `
    <?php
      $a = 10;
      $b = 3;
      echo $a % $b;
    ?>
    `,
    answers: ["1", "2", "3", "4"],
    correctAnswer: "1",
  },
  {
    question: "Apa output yang akan ditampilkan oleh kode PHP berikut?",
    code: `
    <?php
      $array = array(1, 2, 3, 4, 5);
      echo max($array);
    ?>
    `,
    answers: ["1", "3", "5", "15"],
    correctAnswer: "5",
  },
  {
    question: "Apa fungsi dari berikut dalam PHP?",
    code: `isset();`,
    answers: ["Untuk menentukan apakah variabel telah dideklarasikan dan bukan NULL", "Untuk menginisialisasi variabel", "Untuk menambahkan elemen baru ke dalam array", "Untuk menampilkan pesan kesalahan"],
    correctAnswer: "Untuk menentukan apakah variabel telah dideklarasikan dan bukan NULL",
  },
  {
    question: "Berapakah hasil dari eksekusi kode PHP berikut?",
    code: `
    <?php
      $str = "Hello";
      $str .= " World!";
      echo $str;
    ?>
    `,
    answers: ["Hello", "World!", "HelloWorld!", "Hello World!"],
    correctAnswer: "Hello World!",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode PHP berikut?",
    code: `
    <?php
      function greet($name = "Guest"){
          echo "Hello, $name!";
      }
      greet("John");
    ?>
    `,
    answers: ["Hello, Guest!", "Hello, John!", "Hello!", "John"],
    correctAnswer: "Hello, John!",
  },
];
