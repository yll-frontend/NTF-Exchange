const { ethers } = require("hardhat");

const TOKEN_ID = 0; // SET THIS BEFORE RUNNING SCRIPT

async function cancel() {
  const accounts = await ethers.getSigners();
  const [deployer, owner, buyer1] = accounts;

  const IDENTITIES = {
    [deployer.address]: "DEPLOYER",
    [owner.address]: "OWNER",
    [buyer1.address]: "BUYER_1",
  };

  const nftMarketplaceContract = await ethers.getContract("NftMarketplace");
  const basicNftContract = await ethers.getContract("BasicNft");

  const listing = await nftMarketplaceContract.cancelListing(
    basicNftContract.address,
    TOKEN_ID
  );

  await tx.wait(1);
}

cancel().catch((error) => {
  console.error(error);
});
