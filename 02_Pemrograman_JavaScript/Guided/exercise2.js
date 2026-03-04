/**
 * Buatlah sebuah array berisi 3 minuman favorit kalian dan simpan kedalam variabel bernama listMinuman.
 * Selanjutnya, ubah 2 elemen pertama menggunakan notasi kurung dan penugasan. 
 * Terakhir, tambahkan minuman baru di bagian depan array.
 */

const listMinuman = ["Teh Tarik", "Es Jeruk", "Caramel Macchiato"];

listMinuman[0] = "Deep Roast Oolong Tea";
listMinuman[1] = "Es Kopi Susu";
listMinuman.unshift("Milk Tea");

console.log(listMinuman);