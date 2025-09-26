require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.28",
  networks: {
        localhost: {
      url: "http://127.0.0.1:8546",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" ] // Example private key,
    },
    hardhat: {},
    sepolia: {
      
      //https://sepolia.infura.io/v3/ad441041c9f04145b02f9d3b0e06f9d9
      //296cd79a080b1006c8e7e7d33177013038a38333d74c6029545a69d38d736331
      url:"https://sepolia.infura.io/v3/ad441041c9f04145b02f9d3b0e06f9d9",
      accounts: ["0a9897e4367c317aef878d34be1b1232cd176bfb2f749d752e33f8517341015a"]
    },
  },
};



