// rumus.js

// Fungsi penjumlahan
function tambah(a, b) {
    return a + b;
}

// Fungsi pengurangan
function kurang(a, b) {
    return a - b;
}

// Fungsi perkalian
function kali(a, b) {
    return a * b;
}

// Fungsi pembagian
function bagi(a, b) {
    if (b === 0) {
        return "Error: Tidak bisa dibagi dengan nol.";
    }
    return a / b;
}

// Export semua fungsi agar bisa digunakan di file lain
module.exports = {
    tambah,
    kurang,
    kali,
    bagi
};
