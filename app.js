// script.js

document.getElementById('decodeButton').addEventListener('click', function() {
    const encodedText = document.getElementById('encodedText').value;
    const decodedText = decodeText(encodedText);
    document.getElementById('decodedText').innerText = decodedText;
});

function decodeText(text) {
    // Exemplo de decodificação usando a cifra de César com deslocamento de 3
    const shift = 3;
    return text.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((char.charCodeAt(0) - shift - 97 + 26) % 26 + 97);
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode((char.charCodeAt(0) - shift - 65 + 26) % 26 + 65);
        } else {
            return char;
        }
    }).join('');
}
