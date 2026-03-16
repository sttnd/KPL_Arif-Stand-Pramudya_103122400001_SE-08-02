const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");

const capsCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    
    charCountElement.textContent = text.length;
    
    const capsMatch = text.match(/[A-Z]/g);
    capsCountElement.textContent = capsMatch ? capsMatch.length : 0;
    
    const lowerMatch = text.match(/[a-z]/g);
    lowerCountElement.textContent = lowerMatch ? lowerMatch.length : 0;
});

document.getElementById("huruf-besar").onclick = () => {
    editorElement.value = editorElement.value.toUpperCase();
};

document.getElementById("huruf-kecil").onclick = () => {
    editorElement.value = editorElement.value.toLowerCase();
};

buttonLightElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("dark-mode");
});

buttonDarkElement.addEventListener("click", (event) => {
    document.documentElement.classList.add("dark-mode");
});