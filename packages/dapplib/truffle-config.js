require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad heavy clip outer talk'; 
let testAccounts = [
"0xa0e9e8f38b2e20dfa139830fcebdf78d2f1f410ca5b07cf4693a08e6bc3ee6ef",
"0x101ac65b5183fb3a779a33d9caff3715d8d5ad88391ad6275628c00160556ff9",
"0xaf5f06d011a1bb56dc560290a905e32de7111ae6a7ac0055cdde08af9ec43a03",
"0x6224b932430f97f49991a9426207863b190111badc572adae07cb6d23e03867b",
"0x866f6fa9689be96bfcd206b0e7c5aafde85742d14ea30763d2d623618fecca61",
"0xd757768e0bd36b8b85f8efb452d9d2abe6852c84d7e6cdcae6c3609371e304c8",
"0x5e78acab519416f4e9efce5e6bf6d82657d32913dbe7a9049e3a18c2a2184813",
"0x92f071e60082e9a9c3828f6146509cc414cf7e77683ba82551376e827bd57097",
"0x247ddc05e6801a598555738065990b48f78a1cfcc5204b8cb2288c350576ec59",
"0x1ef8b484897233d2dbd9524d2452a36ea0ea5ddfecc0ab0592def7957f0ee62a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

