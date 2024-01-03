// Your code here
// Function to move the dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Function to move the dodger right
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // Get the width of the game field (400px) and the dodger width (40px)
    const gameWidth = 400;
    const dodgerWidth = 40;
  
    // Check if the right edge of the dodger has not reached the right edge of the game field
    if (left + dodgerWidth < gameWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  // Event listener for the left and right arrow keys
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  