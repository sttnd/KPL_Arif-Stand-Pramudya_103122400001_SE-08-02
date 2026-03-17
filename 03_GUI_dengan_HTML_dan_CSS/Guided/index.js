// mengambil semua elemen dari html untuk menampilkan
const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const capsCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

// saat mengetik, statistik langsung diperbarui
editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    
    // menghitung jumlah karakter, huruf besar, dan huruf kecil
    charCountElement.textContent = text.length;
    
    const capsMatch = text.match(/[A-Z]/g);
    capsCountElement.textContent = capsMatch ? capsMatch.length : 0;
    
    const lowerMatch = text.match(/[a-z]/g);
    lowerCountElement.textContent = lowerMatch ? lowerMatch.length : 0;
});

// mengubah seluruh teks menjadi huruf besar
document.getElementById("huruf-besar").onclick = () => {
    editorElement.value = editorElement.value.toUpperCase();
};

// mengubah seluruh teks menjadi huruf kecil
document.getElementById("huruf-kecil").onclick = () => {
    editorElement.value = editorElement.value.toLowerCase();
};

// mengubah huruf awal setiap kalimat menjadi kapital
document.getElementById("huruf-paragraf").onclick = () => {
    let text = editorElement.value.toLowerCase();
    
    let capitalizedText = text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (match) => {
        return match.toUpperCase();
    });

    editorElement.value = capitalizedText;
    editorElement.dispatchEvent(new Event('input'));
};

// menambahkan fitur salin teks untuk menyalin isi textarea ke clipboard
document.getElementById("copy-text").onclick = () => {
    const text = editorElement.value;

    // menggunakan clipboard api
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Teks berhasil disalin!");
        })
        .catch(() => {
            alert("Gagal menyalin teks!");
        });
};