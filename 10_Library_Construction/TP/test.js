import { hitungHuruf, hitungKata } from './index.js';

const teks1 = 'Halo Dunia';
const teks2 = 'Aku belajar KPL Modul 10!';
const teks3 = 'JavaScript itu seru banget 123';
const teks4 = '12345 !!!';

console.log('Teks:', teks1);
console.log('Jumlah huruf:', hitungHuruf(teks1));
console.log('Jumlah kata:', hitungKata(teks1));
console.log('');

console.log('Teks:', teks2);
console.log('Jumlah huruf:', hitungHuruf(teks2));
console.log('Jumlah kata:', hitungKata(teks2));
console.log('');

console.log('Teks:', teks3);
console.log('Jumlah huruf:', hitungHuruf(teks3));
console.log('Jumlah kata:', hitungKata(teks3));
console.log('');


console.log('Teks:', teks4);
console.log('Jumlah huruf:', hitungHuruf(teks4));
console.log('Jumlah kata:', hitungKata(teks4));
console.log('');
