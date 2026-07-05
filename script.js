const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");

function handleSearch() {
  const searchValue = searchBox.value.trim().toLowerCase();

  if (!searchValue) return;

  localStorage.setItem("filterText", searchValue);

  window.location.href = "cars.html";
}

searchButton.addEventListener("click", handleSearch);

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});
