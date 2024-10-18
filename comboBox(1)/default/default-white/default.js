function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if(!event.target.matches('.combo-box-button')) {
        var dropdowns = document.getElementsByClassName("combo-box-content");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

