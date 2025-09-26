const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CertificateNFT", function () {
  let certificateNFT;
  let owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const CertificateNFT = await ethers.getContractFactory("CertificateNFT");
    certificateNFT = await CertificateNFT.deploy();
    await certificateNFT.deployed();
  });

  it("Should mint a certificate NFT", async function () {
    const hash = ethers.utils.id("CERT123");
    await certificateNFT.mintCertificate(hash);
    const [exists, tokenId] = await certificateNFT.verifyCertificate(hash);
    expect(exists).to.be.true;
    expect(tokenId).to.equal(1);
  });

  it("Should prevent duplicate certificates", async function () {
    const hash = ethers.utils.id("CERT123");
    await certificateNFT.mintCertificate(hash);
    await expect(certificateNFT.mintCertificate(hash)).to.be.revertedWith(
      "Certificate already exists"
    );
  });

  it("Should verify non-existing certificate as false", async function () {
    const hash = ethers.utils.id("UNKNOWN");
    const [exists, tokenId] = await certificateNFT.verifyCertificate(hash);
    expect(exists).to.be.false;
    expect(tokenId).to.equal(0);
  });
});
