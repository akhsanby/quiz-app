export default [
  {
    question: "Berikut adalah potongan kode dalam Java:",
    code: `
    public class Main {
      public static void main(String[] args) {
        int x = 5;
        int y = 3;
        System.out.println(x + y);
      }
    }
    `,
    answers: ["5", "8", "15", "Error"],
    correctAnswer: "8",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode Java berikut?",
    code: `
    public class Main {
      public static void main(String[] args) {
          int[] arr = {1, 2, 3, 4, 5};
          System.out.println(arr[2]);
      }
    }
    `,
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3",
  },
  {
    question: "Apa yang akan menjadi output dari kode Java berikut?",
    code: `
    public class Main {
      public static void main(String[] args) {
          int x = 10;
          int y = 3;
          System.out.println(x % y);
      }
    }
    `,
    answers: ["1", "2", "4", "3"],
    correctAnswer: "1",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode Java berikut?",
    code: `
    public class Main {
      public static void main(String[] args) {
          int[] arr = {1, 2, 3, 4, 5};
          System.out.println(arr.length);
      }
    }
    `,
    answers: ["1", "3", "5", "15"],
    correctAnswer: "5",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode Java berikut?",
    code: `
    import java.util.Scanner;

    public class Main {
      public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int x = scanner.nextInt();
        int y = scanner.nextInt();
        System.out.println(x + y);
      }
    }
    `,
    answers: ["Inputan pengguna", "5", "8", "Error"],
    correctAnswer: "Inputan pengguna",
  },
  {
    question: "Berikut adalah potongan kode dalam Java:",
    code: `
    public class Main {
      public static void main(String[] args) {
        int x = 5;
        int y = 3;
        System.out.println(x == y);
      }
    }
    `,
    answers: ["true", "false", "Error", "8"],
    correctAnswer: "false",
  },
  {
    question: "Apa yang akan menjadi output dari kode Java berikut?",
    code: `
    public class Main {
      public static void main(String[] args) {
        String str = "Hello";
        str += " World!";
        System.out.println(str);
      }
    }
    `,
    answers: ["Hello", "World!", "HelloWorld!", "Hello World!"],
    correctAnswer: "Hello World!",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode Java berikut?",
    code: `
    public class Main {
      public static void main(String[] args) {
        int x = 10;
        int y = 3;
        System.out.println(x / y);
      }
    }
    `,
    answers: ["3.333333", "3", "4", "Error"],
    correctAnswer: "3",
  },
  {
    question: "Apa fungsi dari syntax berikut dalam Java?",
    code: `break`,
    answers: ["Untuk menghentikan eksekusi dari sebuah loop atau switch case", "Untuk menambahkan elemen baru ke dalam array", "Untuk menghentikan eksekusi program", "Untuk meminta inputan dari pengguna"],
    correctAnswer: "Untuk menghentikan eksekusi dari sebuah loop atau switch case",
  },
  {
    question: "Berikut adalah potongan kode dalam Java:",
    code: `
    public class Main {
      public static void main(String[] args) {
        int x = 10;
        int y = 3;
        System.out.println(x == y);
      }
    }
    `,
    answers: ["true", "false", "Error", "8"],
    correctAnswer: "false",
  },
];
