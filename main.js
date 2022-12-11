let about_Link = document.querySelectorAll(".link");
let seccion_about = document.querySelector(".seccion-about");
let section_contact = document.querySelector(".section-contact");
let checked_box = document.querySelector(".checkbox");
let nav = document.querySelector(".nav");

about_Link.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.innerHTML == "About") {
      seccion_about.style.display = "block";
      checked_box.checked = false;

      if (seccion_about.style.display == "block") {
        section_contact.style.display = "none";
        nav.style.background = "black";
      } 
    } else if (e.target.innerHTML == "Contact") {
      section_contact.style.display = "block";
      seccion_about.style.display = "none";
      checked_box.checked = false;

      if (section_contact.style.display == "block") {
        nav.style.background = "black";
      } 
    }
  });
});

checked_box.addEventListener("change", (e) => {
  if (checked_box.checked) {
    seccion_about.style.display = "none";
    section_contact.style.display = "none";
    nav.style.background = "none";
  }
});

//console.log(window.screen.width);
