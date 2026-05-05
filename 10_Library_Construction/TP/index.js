export function hitungHuruf(teks) {
  if (typeof teks !== 'string') {
    throw new TypeError('Input harus berupa string');
  }

  const huruf = teks.match(/[a-zA-Z]/g);

  return huruf ? huruf.length : 0;
}

export function hitungKata(teks) {
  if (typeof teks !== 'string') {
    throw new TypeError('Input harus berupa string');
  }

  const kata = teks.match(/[a-zA-Z]+/g);

  return kata ? kata.length : 0;
}