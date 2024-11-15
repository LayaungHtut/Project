function toggleAccordion1() {
  let accordionToggle1 = document.getElementById("accordion-toggle-1");
  let accordionMore1 = document.getElementById("accordion-more-1");
  let toggleBtn1 = document.getElementById("toggle-btn-1");

  if (accordionToggle1.style.display === "none") {
    accordionToggle1.style.display = "inline";
    toggleBtn1.innerHTML = "See More";
    accordionMore1.style.display = "none";
  } else {
    accordionToggle1.style.display = "none";
    toggleBtn1.innerHTML = "See Less";
    accordionMore1.style.display = "inline";
  }
}

function toggleAccordion2() {
  let accordionToggle2 = document.getElementById("accordion-toggle-2");
  let accordionMore2 = document.getElementById("accordion-more-2");
  let toggleBtn2 = document.getElementById("toggle-btn-2");

  if (accordionToggle2.style.display === "none") {
    accordionToggle2.style.display = "inline";
    toggleBtn2.innerHTML = "See More";
    accordionMore2.style.display = "none";
  } else {
    accordionToggle2.style.display = "none";
    toggleBtn2.innerHTML = "See Less";
    accordionMore2.style.display = "inline";
  }
}

function toogleAccordion3() {
  let accordionToggle3 = document.getElementById("accordion-toggle-3");
  let accordionMore3 = document.getElementById("accordion-more-3");
  let toggleBtn3 = document.getElementById("toggle-btn-3");

  if (accordionToggle3.style.display === "none") {
    accordionToggle3.style.display = "inline";
    toggleBtn3.innerHTML = "See More";
    accordionMore3.style.display = "none";
  } else {
    accordionToggle3.style.display = "none";
    toggleBtn3.innerHTML = "See Less";
    accordionMore3.style.display = "inline";
  }
}
