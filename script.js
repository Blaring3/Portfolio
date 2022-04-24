const section = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const flex = document.querySelectorAll(".flex");
console.log(flex);
function PageTrans() {
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
}

// Section active
for (let i = 0; i < secBtn.length; i++) {
  secBtn[i].addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
    }

    section.forEach((section) => {
      section.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  });
}

PageTrans();


flex[1].addEventListener("click", false);
