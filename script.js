document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.querySelector('textarea#txt_area1');
    const input2 = document.querySelector('textarea#txt_area2');
    const message = document.getElementById("msg");

    const buttonEncrypt = document.querySelector('button.criptografa');
    const buttonDecrypt = document.querySelector('button.descriptografa');

    const displayMessage = (msg) => {
        document.getElementById('none').innerHTML = msg ? `<h2 id="none">${msg}</h2>` : '';
    };

    const validateInput = (text) => /^[a-z\s]+$/.test(text);

    const encryptText = (text) => {
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    };

    const decryptText = (text) => {
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    };

    const encrypt = () => {
        const text = input1.value.trim();
        
        if (!text) {
            displayMessage('Nenhuma mensagem encontrada');
            input1.focus();
            return;
        }

        if (!validateInput(text)) {
            displayMessage('Entrada inválida. Use apenas letras minúsculas sem acentos ou caracteres especiais.');
            input1.focus();
            return;
        }

        input2.value = encryptText(text);
        input1.value = ""; // Limpa a área de texto
        displayMessage('');
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('copy').innerHTML = '<button class="button copia" id="copyButton">Copiar</button>';

        // Adiciona evento ao botão copiar
        document.getElementById('copyButton').addEventListener('click', copy);
    };

    const decrypt = () => {
        const text = input1.value.trim();

        if (!text) {
            displayMessage('Nenhuma mensagem encontrada');
            input1.focus();
            return;
        }

        if (!validateInput(text)) {
            displayMessage('Entrada inválida. Use apenas letras minúsculas sem acentos ou caracteres especiais.');
            input1.focus();
            return;
        }

        input2.value = decryptText(text);
        input1.value = ""; // Limpa a área de texto
        displayMessage('');
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('copy').innerHTML = '<button class="button copia" id="copyButton">Copiar</button>';

        // Adiciona evento ao botão copiar
        document.getElementById('copyButton').addEventListener('click', copy);
    };

    const copy = () => {
        input2.select();
        document.execCommand('copy');
        message.innerHTML = "O texto copiado já está na área de transferência!";
        input2.value = "";
    };

    buttonEncrypt.addEventListener('click', encrypt);
    buttonDecrypt.addEventListener('click', decrypt);

    input1.focus();
});
