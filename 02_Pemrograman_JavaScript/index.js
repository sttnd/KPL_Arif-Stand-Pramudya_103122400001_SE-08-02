/* Kalikan semua bilangan positif yang ada dalam sebuah larik.

Input:
[1, -2, 3, -4, 5, -6]

Output:
15
*/

const arr1 = [1, -2, 3, -4, 5, -6];

function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
       if (arr[i] >= 0) {
           result = result * arr[i];
       }
    }
    
    return result;
}

// Panggil fungsi
const arr1Result = mulOfArray(arr1);
console.log(arr1Result);