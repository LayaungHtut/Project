function setActive(selectedTab) {
  const tabs = document.querySelectorAll(".nav-item");
  tabs.forEach((tabs) => tabs.classList.remove("active"));
  selectedTab.classList.add("active");
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    setActive(item);
  });
});
