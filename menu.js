// menu.js

// Import modul rumus
const rumus = require("./rumus");

// Gunakan readline untuk input dari user
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Input angka pertama
rl.question("Masukkan angka pertama: ", (inputA) => {
    const a = parseFloat(inputA);

    // Input angka kedua
    rl.question("Masukkan angka kedua: ", (inputB) => {
        const b = parseFloat(inputB);

        // Input operator
        rl.question("Masukkan operator (+, -, *, /): ", (operator) => {
            let hasil;

            // Gunakan switch case sesuai tugas
            switch (operator) {
                case "+":
                    hasil = rumus.tambah(a, b);
                    break;
                case "-":
                    hasil = rumus.kurang(a, b);
                    break;
                case "*":
                    hasil = rumus.kali(a, b);
                    break;
                case "/":
                    hasil = rumus.bagi(a, b);
                    break;
                default:
                    hasil = "Operator tidak dikenali!";
            }

            // Tampilkan hasil
            console.log(`Hasil: ${hasil}`);

            rl.close();
        });
    });
});
