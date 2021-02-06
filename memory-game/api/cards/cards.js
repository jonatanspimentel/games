const express = require('express');
const app = express();

const data = require('./cards.json')

app.get("/cards",  function(req, res) {

  res.writeHead(200, {'Access-Control-Allow-Origin' : '*'})

  let listCards = []
  
  while(listCards.length < data.cards.length) {
    let index = Math.floor(Math.random() * data.cards.length);
  
    if (!listCards.find(c => c.key === data.cards[index].key))
      listCards.push(data.cards[index])
  }
  
  res.end(JSON.stringify(listCards))
});

app.get("/cards/:key",  function(req, res) {

  res.writeHead(200, {'Access-Control-Allow-Origin' : '*'})

  let { key } = req.params;
  let card = findCard(key);

  if(!card) return res.status(204).json();

  res.end(JSON.stringify(card));
});

app.get("/cards/compare/:fst/:snd",  function(req, res) {

  res.writeHead(200, {'Access-Control-Allow-Origin' : '*'})

  let { fst, snd } = req.params;

  firstCard = findCard(fst);
  secondCard = findCard(snd);

  if (!firstCard || !secondCard) return res.status(204).json();
  
  return res.end(JSON.stringify(firstCard.name == secondCard.name));
  
});

app.listen(3000, function() {
  console.log("Express API is reunning");
});

function findCard(key) {
  return data.cards.find(c => c.key === key)
}