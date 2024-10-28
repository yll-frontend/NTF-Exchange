const { ethers } = require("hardhat");

const TOKEN_ID = 0; // SET THIS BEFORE RUNNING SCRIPT

async function buyItem() {
  const accounts = await ethers.getSigners();
  const [deployer, owner, buyer1] = accounts;

  const IDENTITIES = {
    [deployer.address]: "DEPLOYER",
    [owner.address]: "OWNER",
    [buyer1.address]: "BUYER_1",
  };

  const nftMarketplaceContract = await ethers.getContract("NftMarketplace");
  const basicNftContract = await ethers.getContract("BasicNft");

  const listing = await nftMarketplaceContract.getListing(
    basicNftContract.address,
    TOKEN_ID
  );

  const price = listing.price.toString();
  const tx = await nftMarketplaceContract
    .connect(buyer1)
    .buyItem(basicNftContract.address, TOKEN_ID, {
      value: price,
    });
  await tx.wait(1);
  console.log("NFT Bought!");

  const newOwner = await basicNftContract.ownerOf(TOKEN_ID);
}

buyItem().catch((error) => {
  console.error(error);
});
