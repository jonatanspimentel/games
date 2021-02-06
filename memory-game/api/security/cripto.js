//const crypto = require("crypto");

//const config = require('./config.json')


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