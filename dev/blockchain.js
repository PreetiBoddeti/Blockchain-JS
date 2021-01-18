//Build the Blockchain Datastructure

const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];

function Blockchain() {
    this.chain= [];
    this.pendingTransactions= [];

    this.currentNodeUrl= currentNodeUrl;
    this.networkNodes = [];

    //Genesis Block- first block
    this.createNewBlock( 100, '0', '0');
}


//create a new Block
Blockchain.prototype.createNewBlock= function(nonce, previousBlockHash, hash) {
    //create a new object
    const newBlock= {
        index: this.chain.length+1,                  //Block number
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,                                     //hash of the current block
        previousBlockHash: previousBlockHash            // hash of the previous block
    };

    this.pendingTransactions = [];                          //empty the transactions array  so that next new block created can start off new
    this.chain.push(newBlock);

    return newBlock;
}


Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction); 

    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);

    //create HASH
    const hash = sha256(dataAsString);
    return hash;
}


//proof of work - make our blockchains secured
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0,4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce); 
    }

    return nonce;
}

module.exports= Blockchain;
;