function togglePopup() {
    document.getElementById("pop-up").classList.toggle("active")
}

window.onload = function() {
    setTimeout(togglePopup, 200)
}