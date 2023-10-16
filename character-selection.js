document.addEventListener("DOMContentLoaded", function() {
    var titleScreen = document.querySelector(".title-screen");
    var characterSelection = document.querySelector(".open-character-selection");
    var playGame = document.querySelector('.play-game');
    characterSelection.style.display ='none'

    //OPem char selection
    function openCharacterSelection() {
        titleScreen.style.opacity = "0";
        setTimeout(function() {
            titleScreen.style.display = "none";
            characterSelection.style.display = "flex";
            setTimeout(function() {
                characterSelection.style.opacity = "1";
            }, 50); 
        }, 500); 
    }

    // close char selection
    function closeCharacterSelection() {
        characterSelection.style.opacity = "0";
        setTimeout(function() {
            characterSelection.style.display = "none";
            titleScreen.style.display = "flex";
            setTimeout(function() { 
                titleScreen.style.opacity = "1";
            }, 50); 
        }, 500); 
    }

    function openPlayGame() {
        characterSelection.style.opacity = "0";
        setTimeout(function() {
            characterSelection.style.display = "none";
            playGame.style.display = "flex";
            setTimeout(function() { 
                playGame.style.opacity = "1";
            }, 100); 
        }, 800); 
    }

    // Event listener for Start button click
    document.getElementById("start-button").addEventListener("click", function() {
        openCharacterSelection();
    });

    // Event listener for Cancel button click
    document.getElementById("cancel").addEventListener("click", function() {
        closeCharacterSelection();
    });
    document.getElementById("yes").addEventListener("click", function() {
        openPlayGame();
    });
});
