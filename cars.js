const carDivs = document.querySelectorAll(".car");
const mainTitle = document.querySelector("h1");
const pageContent = document.querySelector(".page-content");

function filterCars(searchValue) {
  let carFound = false;

  carDivs.forEach((car) => {
    const carText = car.innerText.toLowerCase();

    if (carText.includes(searchValue)) {
      car.style.display = "block";
      carFound = true;
    } else {
      car.style.display = "none";
    }
  });

  if (!carFound) {
    pageContent.innerHTML =
      `<center><h2>The car you are looking for was not found 😕</h2></center>`;

    mainTitle.style.display = "none";
  }
}

const savedSearch = localStorage.getItem("filterText");

if (savedSearch) {
  filterCars(savedSearch.toLowerCase());
  localStorage.removeItem("filterText");
}