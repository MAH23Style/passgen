function generatePassword(length = 12, includeUppercase = true, includeNumbers = true, includeSymbols = true) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';

    let characterPool = lowercaseChars;
    if (includeUppercase) characterPool += uppercaseChars;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    if (characterPool.length === 0) {
        window.alert('no');
        throw new Error('no');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }
    
    return password;
}

function generate() {
    const length = parseInt(document.getElementById('length').value, 10);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('result').textContent = password;
}

document.getElementById('length').addEventListener('input', function () {
    document.getElementById('lengthValue').textContent = this.value;
});

console.log('MUSTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARD');