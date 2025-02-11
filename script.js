// Referensi elemen display
const display = document.getElementById('display');

// Fungsi untuk menambahkan angka ke display
function appendNumber(number) {
    display.value += number;
}

// Fungsi untuk menambahkan operator ke display
function appendOperator(operator) {
    // Cegah penambahan operator ganda berturut-turut
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

// Fungsi untuk menghitung hasil
function calculateResult() {
    try {
        // Gunakan eval untuk menghitung ekspresi
        display.value = eval(display.value);
    } catch (error) {
        // Tampilkan error jika ekspresi tidak valid
        display.value = 'Error';
        setTimeout(() => clearDisplay(), 2000); // Bersihkan setelah 2 detik
    }
}

// Fungsi untuk menghapus display
function clearDisplay() {
    display.value = '';
}

// Fungsi untuk menghapus karakter terakhir di display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
// Fungsi untuk menghitung hasil
function calculateResult() {
    try {
        if (display.value !== '') {
            // Menghitung hasil dan menambahkan pemisah ribuan
            let result = eval(display.value);
            
            // Menambahkan pemisah ribuan dan memastikan format menggunakan titik
            display.value = result.toLocaleString('id-ID'); // 'id-ID' untuk format Indonesia (dengan titik sebagai pemisah ribuan)
        }
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => clearDisplay(), 2000); // Bersihkan setelah 2 detik
    }
}