const divContainer = document.querySelector("#container");
const sizeButton = document.querySelector("#sizeButton");
const clearButton = document.querySelector("#clearButton");


    // Create the grid
function createGrid(size) {

      // Remove the old grid
    divContainer.innerHTML = "";

    // Create size × size squares
    for (let i = 0; i < size * size; i++) {

        const grid = document.createElement("div");

        grid.classList.add("grid");

        // Make each square fit perfectly inside the container
        grid.style.width = `${100 / size}%`;
        grid.style.height = `${100 / size}%`;

        // Change color when mouse enters
        grid.addEventListener("mouseenter", () => {
          grid.style.backgroundColor = "black";
        });

        divContainer.append(grid);
    }
}


    // Ask user for grid size
sizeButton.addEventListener("click", () => {

    const size = Number(
      prompt("Enter a grid size (1 - 100):")
    );

    if (size >= 1 && size <= 100) {
      createGrid(size);
    } else {
      alert("Please enter a number between 1 and 100.");
    }

});


//Clear the grid
clearButton.addEventListener("click", () => {
  createGrid(16);
});


//Create the initial 16 × 16 grid
createGrid(16);