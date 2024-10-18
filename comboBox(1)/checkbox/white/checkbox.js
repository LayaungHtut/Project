const dropdownButton = document.querySelector('.combo-box-button');
const dropdownMenu = document.getElementById('dropdown');

dropdownButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});
