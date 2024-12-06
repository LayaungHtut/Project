function setACtive(selectedNavTab) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem) => navItem.classList.remove('active'));
    selectedNavTab.classList.add('active');
}

document.querySelectorAll('.nav-item').forEach((navItem) => {
    navItem.addEventListener('click', () => {
        setACtive(navItem)
    })
})