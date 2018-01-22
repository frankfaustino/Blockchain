const hash = require('js-sha256').sha256
/* Blockchain class is responsible for managing the ledger —
 — Helper methods to store transactions and add new blocks */

class Blockchain {
  constructor() {
    this.chain = [],
    this.transactions = []
    this.new_block(previous_hash = 1, proof = 100)
  }

  // Each block contains the hash of the previous block
  new_block(previous_hash, proof) {
    const block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: self.current_transactions,
      proof: proof,
      previous_hash: previous_hash || this.hash(this.last_block),
    }

    // Reset the current list of transactions then add to the ledger
    this.current_transactions = []
    this.chain.push(block)

    return block
  }

  // Creates a new transaction to go into the next mined Block
  new_transaction(sender, recipient, amount) {
    this.current_transactions.push({ sender, recipient, amount })
    return this.last_block.index + 1
  }

  // Creates a SHA-256 hash of a block
  hash = (block) => hash(JSON.stringify(block))

  get last_block() {
    return this.chain[this.chain.length - 1]
  }

  // Simplified Proof of Work Algorithm
  proof_of_work(last_proof) {
    let proof = 0
    while (!this.valid_proof(last_proof, proof))
      proof++

    return proof
  }

  // Validates the Proof: Does hash(last_proof, proof) contain 4 leading zeroes?
  valid_proof(last_proof, proof) {
    const guess = hash(`${last_proof}${proof}`)
    return guess.substring(0, 4) === '0000'
  }
}

