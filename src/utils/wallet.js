var bitgo = require('bitgo-utxo-lib')
var bip32utils = require('bip32-utils')

// Hierarchical Deterministic wallet
function phraseToSecretItems (phraseStr) {
  // Seed key, make it very strong
  // phraseStr: string
  const seedHex = Buffer.from(phraseStr.slice(0, 64)).toString('hex')

  //Set Network
  let network = bitgo.networks['zerc']
  
  // chains
  const hdNode = bitgo.HDNode.fromSeedHex(seedHex, network)
  var chain = new bip32utils.Chain(hdNode)
  
  // Creates 3 address from the same chain
  for (var k = 0; k < 2; k++) {
    chain.next()
  }

  // Get private keys from them
  var secretItems = chain.getAll().map(function (x) {
    // Get private key (WIF)
    const pkWIF = chain.derive(x).keyPair.toWIF()

    //Get keyPair
    const keyPair = bitgo.ECPair.fromWIF(pkWIF, network)

    // Address
    const address = keyPair.getAddress()

    return {
      address,
      privateKey: pkWIF
    }
  })

  return secretItems
}

module.exports = {
  phraseToSecretItems: phraseToSecretItems
}
