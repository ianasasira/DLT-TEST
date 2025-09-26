// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CertificateNFT is ERC721 {
    uint256 public nextTokenId;
    mapping(bytes32 => uint256) public hashToTokenId;

    constructor() ERC721("CertificateNFT", "CERT") {}

    // Mint certificate NFT by hash
    function mintCertificate(bytes32 certificateHash) external {
        require(hashToTokenId[certificateHash] == 0, "Certificate already exists");
        nextTokenId++;
        uint256 tokenId = nextTokenId;
        _mint(msg.sender, tokenId);
        hashToTokenId[certificateHash] = tokenId;
    }

    // Verify certificate hash
    function verifyCertificate(bytes32 certificateHash) external view returns (bool, uint256) {
        uint256 tokenId = hashToTokenId[certificateHash];
        if (tokenId == 0) return (false, 0);
        return (true, tokenId);
    }
}
