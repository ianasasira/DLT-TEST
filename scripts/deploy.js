const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const CertificateNFT = await hre.ethers.getContractFactory("CertificateNFT");
  const certificateNFT = await CertificateNFT.deploy(); // no argument needed
  await certificateNFT.deployed();

  console.log("✅ CertificateNFT deployed to:", certificateNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
