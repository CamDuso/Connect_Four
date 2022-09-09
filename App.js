// Game Initialization

// Yellow will go first
// On turn, yellow will pick a slot to place their token
// Token must fall to the furthest down slot in their respective row (No floating tokens)
// After yellow has placed their piece, it will change to Red's turn
// Red will follow the same steps, ensuring tokens fall to the "floor" of the gameboard
// Repeat until Either red or yellow has 4 in a row, displaying a "____ Wins!" Message on screen, as well as a "New Game" Button

// If No winners are declared by the time the board is full, then a "Game Over" message will display, also prompting players to play "New Game

const instructions = document.querySelector (".instructions");

function displayInstructions(){
  instructions.style.display = 'block'
}


function hideInstructions(){
  instructions.style.display = 'none'
}

document.addEventListener("DOMContentLoaded", () => {
  const tokens = document.querySelectorAll(".tokenContainer div");
  const displayCurrentPlayer = document.querySelector("#currentPlayer");
  let currentPlayer = 1;
  const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]

  function playSound(){
    const soundOne = new Audio('sounds/mixkit-small-hit-in-a-game-2072.wav')
    soundOne.play();
  }

  function winSound(){
    const soundTwo = new Audio('sounds/mixkit-thin-metal-card-deck-shuffle-3175.wav')
    soundTwo.play();
  }

  function winCondition() {
    for (let i = 0; i < winningArrays.length; i++) {
      const token1 = tokens[winningArrays[i][0]];
      const token2 = tokens[winningArrays[i][1]];
      const token3 = tokens[winningArrays[i][2]];
      const token4 = tokens[winningArrays[i][3]];

      if (
        token1.classList.contains("playerOne") &&
        token2.classList.contains("playerOne") &&
        token3.classList.contains("playerOne") &&
        token4.classList.contains("playerOne")
      ) {
        winSound()
        winText.innerHTML = "Player One Wins!";
        document.querySelector ('.winScreen').style.display = 'block'
      }

      if (
        token1.classList.contains("playerTwo") &&
        token2.classList.contains("playerTwo") &&
        token3.classList.contains("playerTwo") &&
        token4.classList.contains("playerTwo")
      ) {
        winSound()
        winText.innerHTML = "Player Two Wins!";
        document.querySelector ('.winScreen').style.display = 'block'
      }
    }
  }

  for (let i = 0; i < tokens.length; i++) {
    tokens[i].onclick = () => {
      if (
        tokens[i + 7].classList.contains("taken") && !tokens[i].classList.contains("taken")
      ) {
        if (currentPlayer == 1) {
          playSound()
          tokens[i].classList.add("taken");
          tokens[i].classList.add("playerOne");
          currentPlayer = 2;
          displayCurrentPlayer.innerHTML = currentPlayer;
        } else if (currentPlayer == 2) {
          playSound()
          tokens[i].classList.add("taken");
          tokens[i].classList.add("playerTwo");
          currentPlayer = 1;
          displayCurrentPlayer.innerHTML = currentPlayer;
        }
      } else alert("Placement not allowed");
      winCondition();
      }
    };
});

