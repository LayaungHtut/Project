function setACtive(selectedNavTab) {
    const navItems = document.querySelectorAll('.navItem');
    navItems.forEach((navItem) => navItem.classList.remove('active'));
    selectedNavTab.classList.add('active');
}

document.querySelectorAll('.navItem').forEach((navItem) => {
    navItem.addEventListener('click', () => {
        setACtive(navItem)
    })
})