
# Blockchain (JavaScript Implementation)
My attempt to understand the fundamental technology behind the blockchain.

## Summary
### Balances (blockchain)
The blockchain is an shared public ledger which includes all confirmed transactions. The _immutability_ and the _sequential order_ of the blockchain are enforced with cryptography.

### Transactions (private keys)
A transaction is a transfer of value between _wallets_ that gets included in the block chain. _Wallets_ keep a private key or seed, which is used to sign transactions, providing a mathematical proof that they have come from the owner of the wallet. The signature also prevents the transaction from being altered by anybody once it has been issued. All transactions are broadcast between users and usually begin to be confirmed by the network in the following 10 minutes, through a process called _mining_.

### Processing (mining)
Mining is a _distributed consensus system_ that is used to confirm waiting transactions by including them in the block chain. It enforces a chronological order in the block chain, protects the neutrality of the network, and allows different computers to agree on the state of the system. To be confirmed, transactions must be packed in a block that fits very strict cryptographic rules that will be verified by the network. These rules prevent previous blocks from being modified because doing so would invalidate all following blocks. Mining also creates the equivalent of a competitive lottery that prevents any individual from easily adding new blocks consecutively in the block chain. This way, no individuals can control what is included in the block chain or replace parts of the block chain to roll back their own spends.

## Example of a Block

```
{
    "index": 88888,
    "timestamp": 1516477067084,
    "transactions": [
        {
            "sender": "Frank",
            "recipient": "Ryan",
            "amount": 1000000,
            "timestamp": 1516477065915
        },
        {
            "sender": "Bad Actor",
            "recipient": "fa1d2db62d4d952e2031452e1bc1ddcad0b192c2e29a706f11ce426ae5acddea",
            "amount": 0.000001,
            "timestamp": 1516477067082
        }
    ],
    "proof": 90506,
    "previous_hash": "32d01c59c3d970c054d1699cf10f0edb12d3bce1c30595e274e2e6c79ec0b542"
}
```