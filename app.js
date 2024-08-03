const toggleTheme = document.getElementById('toggle-theme');
const headings = document.querySelector('h1')
const text = document.querySelector('p');
const bodyColor = document.querySelector('body');
const convertButton = document.getElementById('convert-button');
const inputField = document.getElementById('inputField');

toggleTheme.addEventListener('click', function() {
    bodyColor.classList.toggle('dark-mode');
});

convertButton.addEventListener('click', function() {
    playSpeech(inputField.value);
});

function playSpeech(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.addEventListener('end', function() {
        inputField.disabled = false;
    });
    inputField.disabled = true;
    speechSynthesis.speak(utterance);
}   

//to prevent it from speaking when the page reloads 
window.onbeforeunload = function() {
    window.speechSynthesis.cancel();
};