const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
//const data = require('./cards.json');

const { v4: uuidv4 } = require('uuid');
uuidv4(); 

app.get("/cards", (req, res) => {

  let data = readFiles();
  console.log(data);
  res.writeHead(200, {'Access-Control-Allow-Origin' : '*'})

  let listCards = []
  
  //const data = require('./cards.json');
  
  while(listCards.length < data.length) {
    let index = Math.floor(Math.random() * data.length);

    if (!listCards.includes(c => c.key === data[index].key))
      listCards.push(data[index].key)
  }
  
  res.end(JSON.stringify(listCards))
  
});

app.get("/cards/:key", (req, res) => {
  res.writeHead(200, {'Access-Control-Allow-Origin' : '*'})

  let { key } = req.params;
  let card = findCard(key);

  if(!card) return res.status(204).json();

  res.end(JSON.stringify(card));
});

app.get("/cards/compare/:fst/:snd", (req, res) => {
  res.writeHead(200, {'Access-Control-Allow-Origin' : '*'})

  let { fst, snd } = req.params;

  firstCard = findCard(fst);
  secondCard = findCard(snd);

  if (!firstCard || !secondCard) return res.status(204).json();
  
  return res.end(JSON.stringify(firstCard.name == secondCard.name));
});

app.listen(3000, () => {
  console.log("Express API is running");
});

function findCard(key) {
  return data.find(c => c.key === key)
}

function readFiles() {

  const arrayFiles = [];
  let dir = path.join('C:\\Git\\games\\memory-game\\public\\img\\cards');

  fs.readdirSync(dir, (err, files) => {
    if (err) 
      return console.log('Unable to scan directory: ' + err);

    files.forEach(file => { 
      let c = { 
        key: uuidv4(), 
        name: path.basename(file, path.extname(file)) 
      }
      arrayFiles.push(c);
    });
  
    fs.writeFileSync(path.join(__dirname, "cards.json"), JSON.stringify(arrayFiles), err => { 
      if (err) console.log('Error on write file .json: ' + err);   
    });

  });

  return arrayFiles;

}