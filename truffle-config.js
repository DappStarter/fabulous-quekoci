require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind concert grace fork sugar spy'; 
let testAccounts = [
"0x0b1003419244dfa9d9030a7ce25ec159c23c391e1360eeea6f74c963801d60e0",
"0x24569bf697fb4be4fce95e07e2404ec390957bd2d9ca79e66de97a335744f8fb",
"0xa46a8c51acbed3d0fee8854363044ac9f6fdbc8614b211584a519b78f703df05",
"0x9c8b4cb959074eb2f9cfb8bf60fc8b91fb2dfb89aedc4110e1620705dd44966c",
"0xc0c0668ee35f2537c800be73d47b991f6c86ed8e99657f64f58664afbf67e7a5",
"0xf65c97e96b3b6f122d3cc44882f799ff68b780818e73f97050aea81a51178244",
"0xacccffc553b5ef9d58513072e00568252fb4c63cccf8bd6dac9f428af3d562ec",
"0x7423a2a661d1b702c6d6337b37307f7ab6aa7261b50d2c746b901725a15ed7e0",
"0x8d3ab7c08db0c7c51513b67f7258254b15d06a78774e49a1630819babb304fcf",
"0x16feb6dbfe0761d173bf9dd7c9c90d62f81a0bd8b592609a9a7cf5ab9dd4a3b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
