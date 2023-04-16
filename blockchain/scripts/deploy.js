const hre = require("hardhat");

async function main() {
  const SecurePass = await hre.ethers.getContractFactory("SecurePass");
  const securePass = await SecurePass.deploy();

  await securePass.deployed();

  console.log(`Contract Address: ${securePass.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
