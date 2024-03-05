//task1
function reverseNumber() {
    const inputNumber = document.getElementById('inputNumber').value;
    const reversedNumber = inputNumber.split('').reverse().join('');
    document.getElementById('outputNumber').value = reversedNumber;
}

function handleKeyFirst(event) {
    if (event.key === "Enter") {
        reverseNumber();
    }
}

//task2
function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?';

    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }

    return password;
}

function generatePassword() {
    const lengthInput = document.getElementById('lengthInput');
    const generatedPasswordElement = document.getElementById('generatedPassword');
    const length = parseInt(lengthInput.value);

    if (isNaN(length) || length < 1) {
        alert('Please enter a valid password length.');
        return;
    }

    const generatedPassword = generateRandomPassword(length);
    generatedPasswordElement.textContent = `Password: ${generatedPassword}`;
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        generatePassword();
    }
}

//task3
function countVowels() {
    var inputText = document.getElementById('inputText').value;
    var lowercaseString = inputText.toLowerCase();
    var vowelCount = (lowercaseString.match(/[aeiou]/g) || []).length;

    var resultContainer = document.getElementById('result');
    resultContainer.textContent = 'Vowel Count: ' + vowelCount;
}

function handleKey(event) {
    if (event.key === 'Enter') {
        countVowels();
    }
}