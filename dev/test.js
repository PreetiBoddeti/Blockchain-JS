//import Blockchain constructor
const Blockchain = require ('./blockchain');
const bitcoin = new Blockchain();

const b1 ={
    "chain": [
    {
    "index": 1,
    "timestamp": 1610978151956,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1610978448319,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1610978522774,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e0630630599411ebba798546525171dd",
    "transactionId": "9116c5c0599511ebba798546525171dd"
    },
    {
    "amount": 3000,
    "sender": "SENDER_3000",
    "recipient": "RECIPIENT_3000",
    "transactionId": "ac6ac650599511ebba798546525171dd"
    },
    {
    "amount": 4000,
    "sender": "SENDER_4000",
    "recipient": "RECIPIENT_4000",
    "transactionId": "b4cac980599511ebba798546525171dd"
    },
    {
    "amount": 5000,
    "sender": "SENDER_5000",
    "recipient": "RECIPIENT_5000",
    "transactionId": "b9265b70599511ebba798546525171dd"
    }
    ],
    "nonce": 132364,
    "hash": "000024f946f6ab1314e168e03256216c041f75a3f96564186dd51894d3e59565",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1610978567513,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e0630630599411ebba798546525171dd",
    "transactionId": "bd6a6dc0599511ebba798546525171dd"
    },
    {
    "amount": 6000,
    "sender": "SENDER_6000",
    "recipient": "RECIPIENT_6000",
    "transactionId": "cc625e50599511ebba798546525171dd"
    },
    {
    "amount": 7000,
    "sender": "SENDER_7000",
    "recipient": "RECIPIENT_7000",
    "transactionId": "d0d7e0e0599511ebba798546525171dd"
    },
    {
    "amount": 8000,
    "sender": "SENDER_8000",
    "recipient": "RECIPIENT_8000",
    "transactionId": "d5c3f300599511ebba798546525171dd"
    }
    ],
    "nonce": 23621,
    "hash": "00007343a62d81c2e66619dc817ca75c1bdaee76a5740e1ec670c82301b28117",
    "previousBlockHash": "000024f946f6ab1314e168e03256216c041f75a3f96564186dd51894d3e59565"
    },
    {
    "index": 5,
    "timestamp": 1610978591335,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e0630630599411ebba798546525171dd",
    "transactionId": "d815f950599511ebba798546525171dd"
    }
    ],
    "nonce": 20423,
    "hash": "0000bd5d4db448294a1ad08878afefd9db4188f08422ec2ca27739b4c976e38d",
    "previousBlockHash": "00007343a62d81c2e66619dc817ca75c1bdaee76a5740e1ec670c82301b28117"
    },
    {
    "index": 6,
    "timestamp": 1610978593810,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e0630630599411ebba798546525171dd",
    "transactionId": "e647b3b0599511ebba798546525171dd"
    }
    ],
    "nonce": 28884,
    "hash": "00000325a145a9a0774d611951a79562f6fea0038aa73fec9bf33167e6ed1952",
    "previousBlockHash": "0000bd5d4db448294a1ad08878afefd9db4188f08422ec2ca27739b4c976e38d"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e0630630599411ebba798546525171dd",
    "transactionId": "e7c15b60599511ebba798546525171dd"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }

console.log('Valid: ',bitcoin.chainIsValid(b1.chain));
