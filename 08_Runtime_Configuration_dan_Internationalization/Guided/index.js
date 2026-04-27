// CJS
require('dotenv').config(); // Memuat variabel lingkungan dari file .env

function ambilKutipan() {
    try {
        fetch(process.env.BASE_API)
        .then(response => response.json())
        .then(data => console.log(data
            ['data']));
    } catch (error) {
        console.error(error);
    }
}

ambilKutipan();


// console.log(`Dalam mode ${process.env.NODE_ENV}`); // Menampilkan mode aplikasi
// console.log(`Secret Key: ${process.env.SECRET_KEY}`); // Menampilkan nilai dari SECRET_KEY
// console.log(`Port: ${process.env.PORT}`); // Menampilkan nilai dari PORT
// console.log(`Host: ${process.env.HOST}`); // Menampilkan nilai dari HOST