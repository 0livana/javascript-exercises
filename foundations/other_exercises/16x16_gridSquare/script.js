const container = document.querySelector("#grid-container");
const resizeButton = document.querySelector("#resize-btn");

function createGrid(size) {
  // Remove the old grid
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("grid-square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      // Random RGB color
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

      // Progressive darkening
      let darkness = Number(square.dataset.darkness) || 0;

      if (darkness < 10) {
        darkness++;
        square.dataset.darkness = darkness;

        square.style.filter = `brightness(${100 - darkness * 10}%)`;
      }
    });

    container.appendChild(square);
  }
}

resizeButton.addEventListener("click", () => {
  let size = prompt("How many squares per side? (1-100)");

  if (size === null) {
    return;
  }

  size = Number(size);

  if (!Number.isInteger(size) || size < 1 || size > 100) {
    alert("Please enter a whole number between 1 and 100.");
    return;
  }

  createGrid(size);
});

// Create the initial 16 × 16 grid
createGrid(16);
