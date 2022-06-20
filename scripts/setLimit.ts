import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x433697232e3b55ec39050cb7a5678a3b1347eec4";

  // We get the contract to deploy
  const factory = await ethers.getContractFactory("PrideSquiggle");
  const contract = factory.attach(contractAddress);

  await contract.setLimit(200);
  await contract.setDescription("Celebrating Pride Month 2022!");

  const data = await contract.limit();
  console.log(data);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});