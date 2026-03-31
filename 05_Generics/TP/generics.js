const hitung = (str, tipe) => {
  let jumlah = 0;
  for (const c of str) {
    if (tipe === "semua") {
      jumlah++;
    } else if (tipe === "huruf" && c !== ' ') {
      jumlah++;
    }
  }
  return jumlah;
};

// Kode untuk melakukan tes
const str = "Bar bar bar";

console.log(hitung(str, "semua")); // Harusnya 11
console.log(hitung(str, "huruf")); // Harusnya 9
hitung(str, "huruf"); // tidak terjadi apa-apa