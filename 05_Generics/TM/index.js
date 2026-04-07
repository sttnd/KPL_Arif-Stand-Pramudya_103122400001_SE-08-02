/**
 * @param {number} value Bilangan bulat
 * @returns {number | "Fizz" | "Buzz" | "FizzBuzz"}
 */
function zzzzOrNum(value) {
    if (!Number.isInteger(value)) {
        throw new Error("Input harus berupa bilangan bulat.");
    }
    if (value % 15 === 0) {
        return "FizzBuzz";
    }
    if (value % 3 === 0) {
        return "Fizz";
    }
    if (value % 5 === 0) {
        return "Buzz";
    }
    return value;
}

/**
 * @param {number[]} sequence Larik yang seluruh elemennya bilangan bulat
 * @returns {(number | "Fizz" | "Buzz" | "FizzBuzz")[]}
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa array.");
    }
    if (!sequence.every(Number.isInteger)) {
        throw new Error("Semua elemen array harus berupa bilangan bulat.");
    }
    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};