const searchBox = document.getElementById("searchBox"); 
const searchButton = document.getElementById("searchButton"); 

searchButton.addEventListener("click", () => { 
   const searchValue = searchBox.value.trim().toLowerCase(); 
   if(!searchValue) return; 
   localStorage.setItem("filterText", searchValue); 
   window.location.href = "cars.html";
});

searchBox.addEventListener("keydown", (e) => {
   if (e.key === "Enter") {
      const searchValue = searchBox.value.trim().toLowerCase();
      if (!searchValue) return;
      localStorage.setItem("filterText", searchValue);
      window.location.href = "cars.html";
   };
});