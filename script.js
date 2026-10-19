
// --------------------------------------------------
// SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add fields for each scene, as relevant, to match your mockup
// 2) customize the scenes to fit your story
// 3) add any new fields to the function below
// --------------------------------------------------

// First, we create a variable for the current scene being displayed
let currentScene = "map";

// Then, we create an object that stores the data for each scene,
const scenes = {
  // See "backyard" for the first example
/*   backyard: {
    title: "Location: Backyard",
    character: "Interviewee:Grandma",
    text: "Text: well what I remember happening is that Darcie went inside to play with her pretend kitchen, I heard her neighbor mention he was really hungry, and the dog ran around really quickly",
    // you can choose how many choices to include
    // each choice can have text, an action, and/or nextScene
    choices: [
      {
        text: "Chase after the dog (-10 HP)",
        action: function () {
          updateHealth(-10);
        },
        nextScene: "location1"
      },
      {
        text: "Ask about the neighbor",
        nextScene: "hallway"
      },
      {
          text: "Pick up the brass key",
          action: function () {
            pickUpItem("brass key");
          },
          nextScene: "hallway"
      }
    ]
  }, */


  map: {
    title: "Location: Oakland Museum",
    text: "Text: Greetings Detective! You have been called to the Oakland Museum to investigate a mysterious incident. Your task is to interview the staff and gather information about what happened. Explore the museum and talk to the staff to uncover the truth about who stole the compass and why. Good luck!",
    choices: [
      {
        text: "director's office",
        nextScene: "location1"
      },
      {
        text: "security office",
        nextScene: "location2"
      },
      {
        text: "Art gallery",
        nextScene: "location3"
      },
      {
        text: "Staff Break Room",
        nextScene: "location4"
      },
      {
          text: "Ancient History Gallery",
          nextScene: "location5"
      },
      {
        text: "Evidence Room",
        nextScene: "solution"
        }
    ]
  },

  location1: {
    title: "Location: Director's office",
    character: "Interviewee: Mr.Vale - Assistant Director",
    text: " ",
    choices: [
      {
        text: "Talk to Mr.Vale",
        action: function () {
          messageDisplay.textContent = "Mr.Vale: I was in the office when I heard a loud noise.";
        }
      },
         {
        text: "View the office",
        action: function () {
          messageDisplay.textContent = "You find nothing";
        }
      },
      {
        text: "Leave the office",
        action: function () {
         messageDisplay.textContent = " ";
        },
        nextScene: "map"
      }
    ]
  },
  location2: {
    title: "Location: Security Office",
    character: "Interviewee: Ms. Brooks - Security Guard",
    text: "Hey, do you need some help? I can show you around the office if you want.",
    choices: [
      {
        text: "Talk to Ms. Brooks",
        action: function () {
          messageDisplay.textContent = "Ms. Brooks: I was on duty when the incident happened, I didn't see anything suspicious.";
        }
      },
         {
        text: "View the Security cameras",
        action: function () {
          messageDisplay.textContent = "You find a suspicious figure on the camera feed wearing a gold watch and a red scarf. The figure is seen entering the museum through the back entrance.";
          pickUpItem("evidence: gold watch and red scarf");
        }
      },
      {
        text: "Leave the office ",
        action: function () {
         messageDisplay.textContent = " ";
        },
        nextScene: "map"
      }
    ]
  },

    location3: {
    title: "Location: Art Gallery",
    character: "Interviewee: Ms. Elena Cruz - Artist & Observer",
    text: "Hey, hows it going? Do you need some help?",
    choices: [
      {
        text: "Talk to Ms. Elena Cruz",
        action: function () {
          messageDisplay.textContent = "Ms. Elena Cruz: I was observing the art pieces when I heard a loud noise. I saw a black figure running away from the scene. I couldn't see their face, but they were holding a hammer heading to the Security Office.";
          pickUpItem("evidence: seen with a hammer");
        }
      },
         {
        text: "View the Art Gallery",
        action: function () {
          messageDisplay.textContent = "You find nothing";
        }
      },
      {
        text: "Leave the office",
        action: function () {
         messageDisplay.textContent = " ";
        },
        nextScene: "map"
      }
    ]
  },
    location4: {
    title: "Location: Staff Break Room",
    character: "Interviewee: Priya Shah - Museum Staff",
    text: "Hey, hows it going? Do you need some help?",
    choices: [
      {
        text: "Talk to Priya Shah",
        action: function () {
        messageDisplay.textContent = " I was getting some snacks when I heard a loud noise.";
        }
      },
         {
        text: "View the Staff Break Room",
        action: function () {
          messageDisplay.textContent = "You find a rat that attacks you";
          updateHealth(-30);
        }
      },
      {
        text: "Leave the office",
        action: function () {
         messageDisplay.textContent = " ";
        },
        nextScene: "map"
      }
    ]
  },

    location5: {
    title: "Location: Anchient History Gallery",
    character: "Interviewee: Marcus Green - History Expert",
    text: "Hey, hows it going? Do you need some help?",
    choices: [
      {
        text: "Talk to Marcus Green",
        action: function () {
          messageDisplay.textContent = "Marcus Green: I was examining the ancient artifacts when I heard a loud noise next to me and saw broken glass everywhere. glass shards are surrounding me so I am trapped and I can't move.";
          updateHealth(-20);
        }
      },
         {
        text: "View the gallery",
        action: function () {
          messageDisplay.textContent = "You find a piece of hair on the floor that matches the black hoodie.";
          pickUpItem("evidence: a piece of hair.");
        }
      },
      {
        text: "Leave the Ancient History Gallery",
        action: function () {
         messageDisplay.textContent = " ";
        },  
        nextScene: "map"
      }
    ]
  },
  solution: {
    title: "The solution",
    text: " if you have found all the evidence, you can solve the mystery and find out who stole the compass. If you have not found all the evidence, you will not be able to solve the mystery.",
    choices: [
      {
        text: "Solve the mystery",
        action: function () {
          if (inventory.includes("evidence: gold watch and red scarf") && inventory.includes("evidence: seen with a hammer") && inventory.includes("evidence: a piece of hair.")) {
            updateScene("win");
          } else {
            messageDisplay.textContent = "You don't have enough evidence to solve the mystery.";
          }
        }
      },
      {
        text: "Go back to the map",
        nextScene: "map"
      }
    ]
  },
  win: {
    title: "Congratulations!",
    text: "You have solved the mystery and found out who stole the compass. The thief was caught and justice was served.",
    choices: [
      {
        text: "Play again",
        action: function () {
          location.reload();
        }
      }
    ]
    
  },
  gameOver: {
    title: "Game Over",
    text: "You have lost all your health and failed to solve the mystery. Better luck next time!",
    choices: [
      {
        text: "Play again",
        action: function () {
          location.reload();
        }
      }
    ]
  },

/*   hallway: {
    title: "The Hallway",
    text: "The hallway is dark and silent.",
    choices: [
      {
        text: "backyard",
        nextScene: "lockedDoor"
      }
    ]
  }, */

   /* lockedDoor: {
    title: "The Locked Door",
    text: "The door handle doesn't move.",
    choices: [
      {
        text: "Try to open it",
        action: unlockDoor
      },
      {
        text: "Go back",
        nextScene: "map"
      }
    ]
  }, */
};

// --------------------------------------------------
// UPDATE SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add a new const variable for each new field you added above
// Make sure to match the ids used in your mock up with the fields 
// 2) set the .textContent of each variable to the corresponding field in the scene object
// Use sceneTitle as a model
// --------------------------------------------------

// First, we create variables to hold the references to the HTML elements
// Technically you could just use document.getElementById('id-name') 
// in the function itself, but that would be very wordy 
// and make the code harder to read
const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const characterName = document.getElementById("character-name");

// Then, we create a function to update the scene,
function updateScene(sceneName) {

  //This update the variable currentScene with the new scene passed as a parameter
  currentScene = sceneName;

  //This accesses the scene object based on the scene name
  const scene = scenes[sceneName];

  // Here, for each html element, you change the textContent to match
  // the appropriate text from the scene object
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  characterName.textContent = scene.character;

  // Clear the old buttons before creating new ones
  choicesContainer.innerHTML = "";

  // Loop through each choice in the scene, connecting an action and nextScene if included
  scene.choices.forEach(function (choice) {
    const button = document.createElement("button");
    let choiceUsed = false;

    button.textContent = choice.text;

    button.addEventListener("click", function () {
      if (choiceUsed) {
        return;
      }
      choiceUsed = true;

      if (choice.action) {
        choice.action();
      }

      if (choice.nextScene) {
        updateScene(choice.nextScene);
      }
    });

    choicesContainer.appendChild(button);
  });
}

// This updates the screen with the current scene
updateScene(currentScene);


// --------------------------------------------------
// HEALTH
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// Either customize the name from health to steps, stress, etc...
// OR
// create a copy of each step for each additional state you want to track throughout the game
// --------------------------------------------------

// Create a variable for health
let health = 100;

// Display current health
const healthDisplay = document.getElementById("health-display");

// Create a function to update health 
function updateHealth(amount) {
  health += amount;
  healthDisplay.textContent = health;
  if (health <= 0) {
    updateScene("gameOver");
  }
}

// This refreshes the health display
updateHealth(0);

// --------------------------------------------------
// INVENTORY
// Read through the comments below to see what this section does
//
// For now, you are probably leaving this section as is. 
// --------------------------------------------------

// Create a variable for inventory
let inventory = [];

// Display current inventory
const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

// Create a function to update inventory 
function pickUpItem(itemName) {
    // Add itemName to the inventory array
    // Show the updated inventory on the page
  inventory.push(itemName);
  inventoryDisplay.textContent = inventory.join(", ");
}

// --------------------------------------------------
// CONDITIONAL 
// Depending on how you want to implement the conditional logic, you may 
// simply adjust the names below or you may need to expand upon this section
// --------------------------------------------------

// Create a function that checks if the inventory contains one item and if so shows the win condition scene.
function unlockDoor() {
  if (inventory.includes("brass key")) {
    updateScene("solution");
  } else {
    messageDisplay.textContent = "The door is locked.";
  }
}

