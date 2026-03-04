/** 
 * Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumlahan dari 1 hingga N. 
 Contohnya, jika N adalah 5, maka hasilnya adalah 15 (1 + 2 + 3 + 4 + 5).
 */

function sumValues(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    console.log(sum);
}

sumValues(133);