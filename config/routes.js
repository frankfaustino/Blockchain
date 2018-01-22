module.exports = server => {
  server.get('/mine', (req, res) => {
    res.send('Mining a new block')
  })

  server.post('/transactions/new', (req, res) => {
    res.send('Adding a new transaction')
  })

  server.get('/chain', (res, req) => {
    const response = {
      chain: blockchain.chain,
      length: blockchain.chain.length,
    }
    res.json(response)
  })

  server.get('/', (req, res) => {
    res.send('Test')
  })
}