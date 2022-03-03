let index = 0;
let definition = "hello";
let definitionNoSpaces = "hello";
let definitionSplit = new Array();
let arrayDefinition = new Array();
let hint = "hello";
let control = new Array();
let participants = new Array();

const add = document.querySelector("#participants-add");
add.addEventListener("click", (event) => {
  const input = document.querySelector("#participants-input").value;
  const inputText = document.createTextNode(input);
  console.log(input);
  const list = document.querySelector("#participants-list");
  const li = document.createElement("LI");
  li.classList.add("participants-name");
  li.appendChild(inputText);
  list.appendChild(li);
});

const play = document.querySelector("#play");
play.addEventListener("click", (event) => {
  let participantsName = document.getElementsByClassName("participants-name");
  if (participants.length > 0) {
    participants = [];
  }
  Array.from(participantsName).forEach((element) => {
    participants.push(element.textContent);
  });
  showPartcipants(participants);
  playGame();
  document.querySelector("#participants").style.display = "none";
});

function showPartcipants(array) {
  const list = document.querySelector("#play-participants-list");
  let number = 1;
  let shuffle = array.sort(function () {
    return Math.random() - 0.5;
  });
  shuffle.forEach((element) => {
    const li = document.createElement("LI");
    const span = document.createElement("SPAN");
    span.classList.add("vowel");
    const text = document.createTextNode(number + ": " + element);
    const textSpan = document.createTextNode("[ ]");
    li.appendChild(text);
    span.appendChild(textSpan);
    li.appendChild(span);
    list.appendChild(li);
    number++;
  });
}

function playGame() {
  const helpLetters = document.querySelectorAll(".help-letters");
  helpLetters.forEach((element) =>
    element.addEventListener("click", (event) => {
      //console.log(element.getAttribute("value"));
      element.classList.add("disabled");
      validation(element.getAttribute("value"));
    })
  );
  const show = document.querySelector("#show");
  show.addEventListener("click", (event) => {
    showLetters(control);
  });

  const participants = document.querySelectorAll("#play-participants-list li");
  Array.from(participants).forEach((element) => {
    element.addEventListener("click", (event) => {
      if (element.className == "active") {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    });
  });

  const participantsVowel = document.querySelectorAll(".vowel");
  Array.from(participantsVowel).forEach((element) => {
    element.addEventListener("click", (event) => {
      if (element.textContent == "[ ]") {
        element.textContent = "[x]";
      } else {
        element.textContent = "[ ]";
      }
    });
  });

  ///// Get data from Database /////
  $.ajax({
    url: "assets/php/query.php",
    type: "GET",
    dataType: "JSON",
    success: function (json) {
      //console.log("Hint: " + json.word);
      //console.log("Definition: " + json.definition);
      definition = json.definition;
      hint = json.word;
      author = json.author;
      //Create a definition without spaces//
      definitionNoSpaces = definition.replace(/\s+/g, "");
      //console.log(definitionNoSpaces);
      ///Create one array for each word/////
      definitionSplit = definition.split(" ");
      //create Array with definition///
      arrayDefinition = Array.from(definitionNoSpaces);
      //console.log(arrayDefinition);
      const correct = document.querySelector("#correct");
      correct.textContent = json.definition;
      splitToLetters();
      showHint();
      showAuthor(author);
      showNumberOfLetters(arrayDefinition.length);
    },
    error: function (xhr, status) {
      console.log("ERROR");
    },
  });
}

//Split each word in letters an save in an array///
function splitToLetters() {
  definitionSplit.forEach((element) => {
    let letters = Array.from(element);
    createBox(letters);
  });
}

function createBox(letters) {
  let word = document.createElement("DIV");
  word.classList.add("box-word");
  letters.forEach((element) => {
    //let textnode = document.createTextNode(element);
    let letter = document.createElement("DIV");
    //letter.appendChild(textnode);
    letter.classList.add("box-letter");
    letter.setAttribute("id", index);
    word.appendChild(letter);
    index++;
  });
  document.querySelector("#panel").appendChild(word);
}

function showHint() {
  document.querySelector("#hint-text").innerText = hint;
}
function showAuthor(author) {
  document.querySelector("#author-text").innerText = author;
}
function showNumberOfLetters(number) {
  document.querySelector("#numberOfLetters").innerText = number;
}

function validation(letter) {
  arrayDefinition.forEach((element, index) => {
    if (element === letter) {
      control.push(index);
    }
  });
  markLetters();
}
function validationInput(input) {
  const inputNoSpaces = input.toLowerCase().replace(/\s+/g, "");
  if (inputNoSpaces === definitionNoSpaces) {
    return "Good job! Your are awesome";
  } else {
    return "Ohh my God, Fucking Shit you fail";
  }
}
function markLetters() {
  control.forEach((element) => {
    document.getElementById(element).style.background = "yellow";
  });
}
function showLetters() {
  control.forEach((element) => {
    let letter = arrayDefinition[element];
    document.getElementById(element).textContent = letter;
  });
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("lucky");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  const inputDefinition = document.querySelector("#input-definition").value;
  document.querySelector("#answer").textContent = inputDefinition;
  document.querySelector("#validation").textContent =
    validationInput(inputDefinition);
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
