// Definieren Sie das pageMapping-Objekt zuerst
const pageMapping = {
    // 'button1': 'Notfall.html',
    // 'button2': 'Termine.html',
    // 'button3': 'Rezepte.html',
    // 'button4': 'Patienten.html',
    // 'button5': 'Jobs.html',
    // 'button6': 'Leistungsspektrum.html',
    // 'button7': 'Facharzt.html',
    // 'button8': 'Impfung.html',
    // 'button9': 'Bilder.html'
  };
  
  // Verwenden Sie die Funktion redirectToBilder() mit dem korrekten Parameter
  function redirectToPage(buttonId) {
    const pageUrl = pageMapping[buttonId];
    console.log('buttonId:', buttonId);
    console.log('pageUrl:', pageUrl);
    if (pageUrl) {
      window.location.href = pageUrl;
    } else {
      const buttonText = document.getElementById(buttonId).innerText;
      alert(`Leider ist diese Seite für "${buttonText}" in Bearbeitung. Bitte versuchen Sie es später noch einmal.`);
    }
  }
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".main-ul");
const bars = document.querySelectorAll(".bar");

let isOpen = false;

menuToggle.addEventListener("click", function() {
  isOpen = !isOpen;

  if (isOpen) {
    navLinks.classList.toggle("menu-open");
    bars[0].style.transform = "rotate(-45deg) translate(-7px, 6px)";
    bars[1].style.opacity = 0;
    bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
  } else {
    navLinks.classList.remove("menu-open");
    bars[0].style.transform = "none";
    bars[1].style.opacity = 1;
    bars[2].style.transform = "none";
  }
  console.log(navLinks);
});

function quartalMeldung(){
  const now = new Date();
  const quartal = Math.floor((now.getMonth()+ 3)/ 3);
  if (quartal % 2 === 0){
    document.querySelector("#quartalmeldung").innerText = 'Update: Wir nehmen aktuell wieder Neupatienten auf für mehr Informationen gehen Sie bitte unter Neupatienten.'
  } else {
    document.querySelector("#quartalmeldung").innerText = 'Update: Wir nehmen aktuell leider keine Neupatienten mehr auf'
  }
}
quartalMeldung();
setInterval(quartalMeldung, 3 * 30 * 24 * 60 * 60 * 1000);
