const http = require('http')
const URL = require('url')
//const crypto = require("crypto");

const data = require('./cards.json')
//const config = require('./config.json')

http.createServer((req, res) => {

  res.writeHead(200, {'Access-Control-Allow-Origin' : '*'})

  let { card, firstcard, secondcard } = URL.parse(req.url, true).query

  if (!firstcard && !secondcard && !card)
    return res.end(getAllCards())
  
  if (card) {
    let cardvalue = findCard(card)
    return res.end(JSON.stringify(cardvalue.name))
  }

  if (firstcard && secondcard) {
    let firstValue = findCard(firstcard)
    let secondValue = findCard(secondcard)

    if(firstValue.name === secondValue.name)
      return res.end("true")
    else 
      return res.end("false")

  }
  
}).listen(3000, () => console.log("Api is running"))

function getAllCards() {
  let listCards = []
  
  //remover .name após validar
  while(listCards.length < data.cards.length) {
    let index = Math.floor(Math.random() * data.cards.length);

    if (!listCards.find(c => c.key === data.cards[index].key))
      listCards.push(data.cards[index])
  }

  return JSON.stringify(listCards)
}

function findCard(cardKey){
  //return data.cards.find(c => c.key === decript(cardKey))
  return data.cards.find(c => c.key === cardKey)
}

// function encript(data) {
//   const algorithm = config.security.algorithm;
//   const password = config.security.key;
//   const key = crypto.scryptSync(password, 'salt', 24);
//   const iv = Buffer.alloc(16, 0);

//   const cipher = crypto.createCipheriv(algorithm, key, iv);

//   let encrypted = cipher.update(data, 'utf8', 'hex');
//   encrypted += cipher.final('hex');
  
//   return encrypted
// }

// function decript(data) {
//   const algorithm = config.security.algorithm;
//   const password = config.security.key;
//   const key = crypto.scryptSync(password, 'salt', 24);
//   const iv = Buffer.alloc(16, 0);
//   const decipher = crypto.createDecipheriv(algorithm, key, iv);

//   let decrypted = decipher.update(data, 'hex', 'utf8');
//   decrypted += decipher.final('utf8');

//   return decrypted
// }