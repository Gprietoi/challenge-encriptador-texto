document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.querySelector('textarea');
    const encryptButton = document.querySelector('.encrypt');
    const decryptButton = document.querySelector('.decrypt');
    const resultText = document.getElementById('encrypted-text');
    const copyButton = document.getElementById('copy-button');
    const initialMessage = document.getElementById('initial-message');
    const resultMessage = document.getElementById('result-message');

    function encrypt(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function decrypt(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function showResult(text) {
        resultText.value = text;
        initialMessage.style.display = 'none';
        resultMessage.style.display = 'flex';
    }

    function isValidInput(text) {
        // Verifica si el texto contiene solo letras minúsculas sin acentos y espacios
        return /^[a-z\s]*$/.test(text);
    }

    function processText(action) {
        const text = inputText.value;
        if (isValidInput(text)) {
            showResult(action === 'encrypt' ? encrypt(text) : decrypt(text));
        } else {
            alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
            inputText.value = ''; // Limpia el campo de entrada
            inputText.focus(); // Coloca el cursor en el campo de entrada
        }
    }

    encryptButton.addEventListener('click', () => processText('encrypt'));
    decryptButton.addEventListener('click', () => processText('decrypt'));

    copyButton.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(resultText.value);
            alert('Texto copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar texto: ', err);
            alert('No se pudo copiar el texto');
        }
    });
});