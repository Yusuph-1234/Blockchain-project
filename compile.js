const path = require('path');
const fs = require('fs');
const solidityCompiler = require('solc');

const blockchainPath = path.resolve(__dirname,  'Blockchain.sol');
const source = fs.readFileSync(blockchainPath, 'utf8');
module.exports = solidityCompiler.compile(source, 1). contracts[':Inbox'];