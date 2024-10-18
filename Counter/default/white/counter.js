let count = 0;

const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function updateDisplay() {
    countDisplay.textContent = count;
}

incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    count--;
    updateDisplay();
});



