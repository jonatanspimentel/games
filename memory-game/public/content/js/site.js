"use strict";

var attempts = 0;
var score = 0;
var firstCardElement = undefined;
var secondCardElement = undefined;
var matchedCards = [];

function HandleClick() {
  if (!PreValidation(this)) return;
  TurnCard(this);

  if (firstCardElement === undefined) {
    firstCardElement = this;
  } else {
    secondCardElement = this;

    if (!ValidationCompareCards()) return;
    setTimeout(function () { CompareCards(); }, 800);
  }
};

function HideCards() {
  firstCardElement.children[0].setAttribute("src", "img\\wpt.png");
  secondCardElement.children[0].setAttribute("src", "img\\wpt.png");
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

function CleanElements() {
  firstCardElement = undefined;
  secondCardElement = undefined;
}

function SetPontuation(){
  let scoreElement = document.getElementById("score");
  scoreElement.innerHTML = score;

  if (score === 12) {
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

async function load(){
  const res = await fetch("http://localhost:3000/").then((data) => data.json())
  res.map(card => addElement(card.key))

  var cardsElements = document.querySelectorAll('#cards .card');

  [].forEach.call(cardsElements, function(card) {
    card.addEventListener('click', HandleClick, false);
  });

}

async function TurnCard(cardElement) {
  let key = cardElement.getAttribute("value");
  let res = await fetch(`http://localhost:3000?card=${key}`).then((data) => data);

  if (res.ok) {
    let value = await res.json();
    cardElement.children[0].setAttribute( "src", `img\\${value}.png` );
  }

}

async function CompareCards(){
  let firstcard = firstCardElement.getAttribute("value");
  let secondcard = secondCardElement.getAttribute("value");
  let res = await fetch(`http://localhost:3000?firstcard=${firstcard}&secondcard=${secondcard}`).then((data) => data);

  if (res.ok) {
    let value = await res.json();

    if (value == true){
      score++;
      matchedCards.push(firstcard);
      matchedCards.push(secondcard);
      SetPontuation();
    } else {
      attempts--;
      HideCards(); 
      SetAttempts();
    }

    CleanElements();
  }
}

attempts = 8;

SetAttempts();
SetPontuation();

function addElement(key){
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("value", key);

  let img = document.createElement("img");
  img.setAttribute("class", "imgHeigth");
  img.setAttribute("src", "img\\wpt.png");

  card.appendChild(img);
  document.getElementById("cards").appendChild(card);

}

load()


