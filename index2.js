const fs = require('fs');
const { dirname } = require('path');

fs.writeFileSync("Hello.txt", "code step by step")
console.log("dekhe =>>", __dirname);
console.log("dekhe =>>", __filename);