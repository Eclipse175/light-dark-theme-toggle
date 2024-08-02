const toggleTheme = document.getElementById('toggle-theme');
const headings = document.querySelector('h1')
const text = document.querySelector('p');
const bodyColor = document.querySelector('body');   

let isDarkMode = false;

toggleTheme.addEventListener('click', function() {
    bodyColor.classList.toggle('dark-mode');
});