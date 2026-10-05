const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;




const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.querySelector("#product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;         
    option.textContent = product.name; 
    productSelect.appendChild(option);
  });
});


document.addEventListener("DOMContentLoaded", () => {

  let reviewCount = Number(localStorage.getItem("numReviews-ls")) || 0;
  reviewCount++;

  localStorage.setItem("numReviews-ls", reviewCount);

  
  const countDisplay = document.querySelector("#reviewCount");
  if (countDisplay) {
    countDisplay.textContent = reviewCount;
  }
}); 
  


