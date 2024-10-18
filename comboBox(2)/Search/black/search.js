document.querySelector('.combo-box-button').addEventListener('click', function() {
    document.querySelector('.combo-box').classList.toggle('open');
});

function filterOptions() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const ul = document.getElementById('optionsList');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
