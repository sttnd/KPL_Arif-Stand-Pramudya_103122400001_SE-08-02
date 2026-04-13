// Fungsi unutuk melakukan pembagian
function div(a, b) { // fungsi div memiliki kontrak bahwa a dan b harus berupa angka, dan b tidak boleh nol
    // Prakondisi
    if (typeof a !== 'number' || typeof b !== 'number') { // jika a atau b bukan angka, maka lempar error
        throw new TypeError('Input harus berupa angka'); // kontrak dilanggar, karena input tidak sesuai dengan yang diharapkan
    }

    if (b === 0) { // jika b adalah nol, maka lempar error
        return 0; // kontrak dilanggar, karena b tidak boleh nol, tetapi kita kembalikan 0 untuk menghindari error
    }

    const hasil = a / b; // kontrak terpenuhi, karena a dan b adalah angka, dan b tidak nol, sehingga kita bisa melakukan pembagian

    // Postkondisi
    if (hasil * b  === a) { // jika hasil dikalikan dengan b sama dengan a, maka kontrak terpenuhi, karena hasil pembagian benar
        return hasil; // kontrak terpenuhi, karena hasil pembagian benar, sehingga kita kembalikan hasilnya
    }

    return 0; // kontrak dilanggar, karena hasil pembagian tidak benar, tetapi kita kembalikan 0 untuk menghindari error
}

console.log(div(20, 40)); // Output: 0.5, karena b adalah 40, sehingga kita kembalikan hasil pembagian