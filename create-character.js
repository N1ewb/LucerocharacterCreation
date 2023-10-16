//Dialogs 
function closeAllDialogs() {
    const dialogs = document.querySelectorAll('.create-char-dialog');
    dialogs.forEach(dialog => {
        dialog.style.display = 'none';
        dialog.classList.remove('isActive');
    });
}

function openDialog(openDialogId) {
    var dialog = document.getElementById(openDialogId);
    
    const isActive = dialog.classList.contains("isActive");

    if (!isActive) {
        dialog.style.display = 'flex';
        dialog.classList.add("isActive");

        

        window.addEventListener('click', (event) => {
            if (event.target === dialog) {
                dialog.style.display = 'none';
                dialog.classList.remove("isActive");
            }
        });
    } else {
        dialog.style.display = 'none';
        dialog.classList.remove("isActive");
    }
}
const closedialog = document.getElementById('confirm-create-character-dialog')
const nonameDialog = document.getElementById('Enter-Name')
const closeDialogBtn = document.getElementById('close-dialog');
const noBtn = document.getElementById('no');
const nonameBtn = document.getElementById('no-name');
const yes = document.getElementById('yes')


    yes.addEventListener('click', function(){
        closedialog.style.display = 'none';
        closedialog.classList.remove("isActive");
    })


noBtn.addEventListener('click', () => {
    closedialog.style.display = 'none';
    closedialog.classList.remove("isActive");
});

nonameBtn.addEventListener('click', () => {
    nonameDialog.style.display = 'none';
    nonameDialog.classList.remove("isActive");
});



window.onload = function() {
    closeAllDialogs();
};


// Create Char
var createdCharacter;

var playerName; 
function CreateCharacterKnight() {
    console.log('Clicked Knight Button');
    const character = new CharacterType().setKnight().build(playerName);
    return character
}
function CreateCharacterWizard() {
    console.log('Clicked Wizard Button');
    const character = new CharacterType().setWizard().build(playerName);
    return character
}
function CreateCharacterSamurai() {
    console.log('Clicked Samurai Button');
    const character = new CharacterType().setSamurai().build(playerName);
    return character
}

const createCharacterKnight = document.querySelector('#create-knight');
const createCharacterWizard = document.querySelector('#create-wizard');
const createCharacterSamurai = document.querySelector('#create-samurai');
const playerNameKnight = document.querySelector('#create-name-knight');
const playerNameWizard = document.querySelector('#create-name-wizard');
const playerNameSamurai = document.querySelector('#create-name-samurai');



createCharacterKnight.addEventListener("click", function() {
    playerName = playerNameKnight.value;
    if (playerName){
        openDialog('confirm-create-character-dialog');
        yes.addEventListener('click', function(){
            createdCharacter = CreateCharacterKnight();
            
        })
    } else {
        openDialog('Enter-Name');
    }
});

createCharacterWizard.addEventListener("click", function() {
    playerName = playerNameWizard.value;
    if (playerName){
        openDialog('confirm-create-character-dialog');
        yes.addEventListener('click', function(){
            createdCharacter = CreateCharacterWizard();
        })
    } else {
        openDialog('Enter-Name');
    }
});

createCharacterSamurai.addEventListener("click", function() {
    playerName = playerNameSamurai.value;
    if (playerName){
        openDialog('confirm-create-character-dialog');
        yes.addEventListener('click', function(){
            createdCharacter = CreateCharacterSamurai();

        })
    } else {
        openDialog('Enter-Name');
    }
}); 

var createdCharacter;
var playerCharacterSprite;
var playerCharacterName;
var playerCharacterType;
var playerNameTag;
var playerCharacterImg = document.getElementById('player-character-img');
var playerNameContainer = document.getElementById('player-name-container');
var playerTypeContainer = document.getElementById('player-type-container');
var nameTag = document.getElementById('name-tag')
var playerCharacterContainer = document.getElementById('player-character-container');

// Function to check if character is created and return it
function getCreatedCharacter() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (createdCharacter) {
                clearInterval(interval); 
                resolve(createdCharacter); 
            }
        }, 500);
    });
}


getCreatedCharacter()
    .then(character => {
        var CharacterCreated = character
        var createdPlayerName = character.playerName
        var createdCharacterType = character.characterType
        var Attack = character.attack
        console.log(CharacterCreated)
        console.log(createdPlayerName)
        console.log(createdCharacterType)
        console.log(Attack)
       
        if(createdCharacterType == 'knight'){
            playerCharacterSprite = document.createElement('img');
            playerCharacterName = document.createElement('h5');
            playerCharacterType = document.createElement('p')
            playerNameTag = document.createElement('p')
            playerCharacterSprite.src = "./characterSprites/knight/knight_3/Idle.png"
            playerCharacterName.innerText = createdPlayerName;
            playerCharacterType.innerText = createdCharacterType;
            playerNameTag.innerText = "Player Name";
            nameTag.appendChild(playerNameTag);
            playerNameContainer.appendChild(playerCharacterName)
            playerCharacterImg.appendChild(playerCharacterSprite);
            playerTypeContainer.appendChild(playerCharacterType)
        } else if (createdCharacterType == 'wizard') {
            playerCharacterSprite = document.createElement('img');
            playerCharacterName = document.createElement('h5');
            playerCharacterType = document.createElement('p')
            playerNameTag = document.createElement('p')
            playerCharacterSprite.src = "./characterSprites/wizard/Wanderer Magican/Idle.png"
            playerCharacterName.innerText = createdPlayerName;
            playerCharacterType.innerText = createdCharacterType;
            playerNameTag.innerText = "Player Name";
            nameTag.appendChild(playerNameTag);
            playerNameContainer.appendChild(playerCharacterName)
            playerCharacterImg.appendChild(playerCharacterSprite);
            playerTypeContainer.appendChild(playerCharacterType)
        } else if (createdCharacterType == 'samurai') {
            playerCharacterSprite = document.createElement('img');
            playerCharacterName = document.createElement('h5');
            playerCharacterType = document.createElement('p')
            playerNameTag = document.createElement('p')
            playerCharacterSprite.src = "./characterSprites/New folder/Samurai/Idle.png"
            playerCharacterName.innerText = createdPlayerName;
            playerCharacterType.innerText = createdCharacterType;
            playerNameTag.innerText = "Player Name";
            nameTag.appendChild(playerNameTag);
            playerNameContainer.appendChild(playerCharacterName)
            playerCharacterImg.appendChild(playerCharacterSprite);
            playerTypeContainer.appendChild(playerCharacterType)
        }

    })
    .catch(error => {
        console.error('Error:', error); 
    });
