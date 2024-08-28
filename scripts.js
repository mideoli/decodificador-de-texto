function encryptText(text) {
    return text.replace(/[a-z]/g, function(c) {
        return String.fromCharCode((c.charCodeAt(0) - 97 + 3) % 26 + 97);
    });
}

function decryptText(text) {
    return text.replace(/[a-z]/g, function(c) {
        return String.fromCharCode((c.charCodeAt(0) - 97 - 3 + 26) % 26 + 97);
    });
}

// Event Listeners
document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const encryptedText = encryptText(inputText);

    document.getElementById('output-text').innerText = encryptedText;
    document.getElementById('output-placeholder').classList.add('hidden');
    document.getElementById('output-result').classList.remove('hidden');
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const decryptedText = decryptText(inputText);

    document.getElementById('output-text').innerText = decryptedText;
    document.getElementById('output-placeholder').classList.add('hidden');
    document.getElementById('output-result').classList.remove('hidden');
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const textToCopy = document.getElementById('output-text').innerText;

    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Texto copiado!');
    }, function(err) {
        console.error('Erro ao copiar o texto: ', err);
    });
});
