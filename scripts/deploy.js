
const hre = require("hardhat");

async function main() {
  

  const lock = await hre.ethers.deployContract("Lock");
  const lock = await lock.deploy();
  
  await lock.deployed();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
