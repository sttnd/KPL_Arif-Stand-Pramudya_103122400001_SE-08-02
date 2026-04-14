function toNumberArray(number) {
  const arr = typeof number === "string" ? number.split(",") : number;

  return arr
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .map((item) => Number(item))
    .filter((item) => !isNaN(item));
}

console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]