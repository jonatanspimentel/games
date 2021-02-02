var attempts = 0;
var score = 0;
var firstCardElement = undefined;
var secondCardElement = undefined;
var listCards = [];
var matchedCards = [];

function HandleClick() {
  if (!PreValidation(this)) return;
  ShowCardSelected(this);

  if (firstCardElement === undefined) {
    firstCardElement = this;
  } else {
    secondCardElement = this;

    if (!ValidationCompareCards()) return;
    setTimeout(function () { CompareCards(); }, 800);
  }
};

function ShowCardSelected(cardElement) {
  let imgElement = cardElement.children[0];
  let card = GetCardValue(cardElement);
  imgElement.setAttribute( "src", `img\\${card}.png` );
}

function HideCards() {
  firstCardElement.children[0].setAttribute("src", "img\\wpt.png");
  secondCardElement.children[0].setAttribute("src", "img\\wpt.png");
}

function GetCardValue(element) {
  return list.find(x => x.key === element.getAttribute("value")).value;
}

function PreValidation(cardElement) {
  if (attempts === 0 || matchedCards.includes(cardElement.getAttribute("value"))) {
    return false;
  }
  return true;
}

function ValidationCompareCards() {
  if (secondCardElement.children[0] === firstCardElement.children[0]) {
    return false;
  }
  return true;
}

function CompareCards() {
  let cardValue1 = GetCardValue(firstCardElement);
  let cardValue2 = GetCardValue(secondCardElement);

  if (cardValue1 === cardValue2) {
    score++;
    matchedCards.push(firstCardElement.getAttribute("value"));
    matchedCards.push(secondCardElement.getAttribute("value"));
    SetPontuation();
  } else {
    attempts--;
    HideCards(); 
    SetAttempts();
  }

  CleanElements();
}

function CleanElements() {
  firstCardElement = undefined;
  secondCardElement = undefined;
}
function SetPontuation(){
  let scoreElement = document.getElementById("score");
  scoreElement.innerHTML = score;

  if (score === list.length) {
    //modal aqui
    alert( "You win!" );
  }
}

function SetAttempts() {
  let attemptsElement = document.getElementById("attempts");
  attemptsElement.innerHTML = attempts;

  if (attempts === 0) {
    //modal aqui
    alert( "You Lose!" );
    document.getElementById("newgame").style.display = "block";
  }
}

function NewGame() {
  location.reload(true);
}

let list = [];
list.push({ key: btoa("01"), value: "bulbassaur"});
list.push({ key: btoa("02"), value: "bulbassaur"});
list.push({ key: btoa("03"), value: "charmander"});
list.push({ key: btoa("04"), value: "charmander"});
list.push({ key: btoa("05"), value: "chikorita"});
list.push({ key: btoa("06"), value: "chikorita"});
list.push({ key: btoa("07"), value: "clefairy"});
list.push({ key: btoa("08"), value: "clefairy"});
list.push({ key: btoa("09"), value: "growlithe"});
list.push({ key: btoa("10"), value: "growlithe"});
list.push({ key: btoa("11"), value: "jigglypuff"});
list.push({ key: btoa("12"), value: "jigglypuff"});
list.push({ key: btoa("13"), value: "mankey"});
list.push({ key: btoa("14"), value: "mankey"});
list.push({ key: btoa("15"), value: "meowth"});
list.push({ key: btoa("16"), value: "meowth"});
list.push({ key: btoa("17"), value: "pikachu"});
list.push({ key: btoa("18"), value: "pikachu"});
list.push({ key: btoa("19"), value: "psyduck"});
list.push({ key: btoa("20"), value: "psyduck"});
list.push({ key: btoa("21"), value: "squirtle"});
list.push({ key: btoa("22"), value: "squirtle"});
list.push({ key: btoa("23"), value: "wobbuffet"});
list.push({ key: btoa("24"), value: "wobbuffet"});
attempts = (list.length / 4) + 2;

SetAttempts();
SetPontuation();

while (listCards.length < list.length) {
  let index = Math.floor(Math.random() * (list.length))
  
  if (listCards.includes(index)) continue;
  
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("value", list[index].key);

  let img = document.createElement("img");
  img.setAttribute("class", "imgHeigth");
  img.setAttribute("src", "img\\wpt.png");

  card.appendChild(img);
  document.getElementById("cards").appendChild(card);
  listCards.push(index);
}

listCards = [];

var cardsElements = document.querySelectorAll('#cards .card');
[].forEach.call(cardsElements, function(card) {
  card.addEventListener('click', HandleClick, false);
});