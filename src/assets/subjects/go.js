export default [
  {
    question: "Berikut adalah potongan kode dalam Go:",
    code: `
    package main

    import "fmt"
    
    func main() {
        var x int = 5
        var y int = 3
        fmt.Println(x + y)
    }
    `,
    answers: ["5", "8", "15", "Error"],
    correctAnswer: "8",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode Go berikut?",
    code: `
    package main

    import "fmt"
    
    func main() {
        var arr = [...]int{1, 2, 3, 4, 5}
        fmt.Println(arr[2])
    }
    `,
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3",
  },
  {
    question: "Apa yang akan menjadi output dari kode Go berikut?",
    code: `
    package main

    import "fmt"
    
    func main() {
        var x int = 10
        var y int = 3
        fmt.Println(x % y)
    }
    `,
    answers: ["1", "2", "4", "3"],
    correctAnswer: "1",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode Go berikut?",
    code: `
    package main

    import "fmt"
    
    func main() {
        var slice = []int{1, 2, 3, 4, 5}
        fmt.Println(len(slice))
    }
    `,
    answers: ["1", "3", "5", "15"],
    correctAnswer: "5",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode Go berikut?",
    code: `
    package main

    import "fmt"
    
    func main() {
        var x int
        var y int
        fmt.Scan(&x, &y)
        fmt.Println(x + y)
    }
    `,
    answers: ["Inputan pengguna", "5", "8", "Error"],
    correctAnswer: "Inputan pengguna",
  },
  {
    question: "Berikut adalah potongan kode dalam Go:",
    code: `
    package main

    import "fmt"
    
    func main() {
        var x int = 5
        var y int = 3
        fmt.Println(x == y)
    }
    `,
    answers: ["true", "false", "Error", "8"],
    correctAnswer: "false",
  },
  {
    question: "Apa yang akan menjadi output dari kode Go berikut?",
    code: `
    package main

    import "fmt"
    
    func main() {
        var str string = "Hello"
        str += " World!"
        fmt.Println(str)
    }
    `,
    answers: ["Hello", "World!", "HelloWorld!", "Hello World!"],
    correctAnswer: "Hello World!",
  },
  {
    question: "Apa fungsi dari berikut dalam PHP?",
    code: `isset();`,
    answers: ["Untuk menentukan apakah variabel telah dideklarasikan dan bukan NULL", "Untuk menginisialisasi variabel", "Untuk menambahkan elemen baru ke dalam array", "Untuk menampilkan pesan kesalahan"],
    correctAnswer: "Untuk menentukan apakah variabel telah dideklarasikan dan bukan NULL",
  },
  {
    question: "Apa yang akan ditampilkan oleh kode Go berikut?",
    code: `
    package main

    import "fmt"
    
    func main() {
        var x int = 10
        var y int = 3
        fmt.Println(x / y)
    }
    `,
    answers: ["3.333333", "3", "4", "Error"],
    correctAnswer: "3",
  },
  {
    question: "Apa fungsi dari syntax berikut dalam Go?",
    code: `defer`,
    answers: ["Menunda eksekusi sebuah fungsi sampai fungsi lain selesai dieksekusi", "Memindahkan eksekusi sebuah fungsi ke dalam goroutine", "Membatasi akses ke sebuah variabel", "Menghentikan eksekusi program"],
    correctAnswer: "Menunda eksekusi sebuah fungsi sampai fungsi lain selesai dieksekusi",
  },
  {
    question: "Berikut adalah potongan kode dalam Go:",
    code: `
    package main

    import "fmt"

    func main() {
        var x = 10
        var y = 3
        fmt.Println(&x == &y)
    }
    `,
    answers: ["true", "false", "Error", "13"],
    correctAnswer: "false",
  },
];
