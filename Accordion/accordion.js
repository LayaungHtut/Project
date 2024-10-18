function toggleAccordion1() {
    var accordionToggle1 = document.getElementById("accordion-toggle-1");
    var accordionMore1 = document.getElementById("accordion-more-1");
    var toggleBtn1 = document.getElementById("toggle-btn-1");
  
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
    var accordionToggle2 = document.getElementById("accordion-toggle-2");
    var accordionMore2 = document.getElementById("accordion-more-2")
    var toggleBtn2 = document.getElementById("toggle-btn-2");

    if (accordionToggle2.style.display === "none") {
      accordionToggle2.style.display = "inline";
      toggleBtn2.innerHTML = "See More";
      accordionMore2.style.display = "none";
    } else {
      accordionToggle2.style.display = "none";
      toggleBtn2.innerHTML = "See Less"
      accordionMore2.style.display = "inline"
    }
  }

  function toogleAccordion3() {
    var accordionToggle3 = document.getElementById("accordion-toggle-3");
    var accordionMore3 = document.getElementById("accordion-more-3");
    var toggleBtn3 = document.getElementById("toggle-btn-3");

    if (accordionToggle3.style.display === "none") {
      accordionToggle3.style.display = "inline";
      toggleBtn3.innerHTML = "See More";
      accordionMore3.style.display = "none"
      } else {
         accordionToggle3.style.display = "none";
         toggleBtn3.innerHTML = "See Less";
         accordionMore3.style.display = "inline";
      }
  }