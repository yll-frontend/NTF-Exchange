const { ethers } = require("hardhat");

const PRICE = ethers.utils.parseEther("0.1");
async function main() {
  const accounts = await ethers.getSigners();
  console.log("accounts", accounts);
  const [deployer, owner, buyer1] = accounts;

  const IDENTITIES = {
    [deployer.address]: "DEPLOYER",
    [owner.address]: "OWNER",
    [buyer1.address]: "BUYER_1",
  };

  const nftMarketplace = await ethers.getContract("NFTMarketplace");
  const basicNft = await ethers.getContract("BasicNft");

  console.log(Minting NFT for ${owner.address})
  const mintTx = await basicNftContract.connect(owner).mintNft()
  const mintTxReceipt = await mintTx.wait(1)
  const tokenId = mintTxReceipt.events[0].args.tokenId

  
  console.log("Approving Marketplace as operator of NFT...")
  const approvalTx = await basicNftContract
      .connect(owner)
      .approve(nftMarketplaceContract.address, tokenId)
  await approvalTx.wait(1)

  console.log("Listing NFT...")
  const tx = await nftMarketplaceContract
      .connect(owner)
      .listItem(basicNftContract.address, tokenId, PRICE)
  await tx.wait(1)
  console.log("NFT Listed with token ID: ", tokenId.toString())

  const mintedBy = await basicNftContract.ownerOf(tokenId)
 
}

main()
  .then()
  .catch((error) => {
    console.error(error);
  });
