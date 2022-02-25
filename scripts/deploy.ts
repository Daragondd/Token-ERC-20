import { ethers } from "hardhat";

async function main() {
    // We get the contract to deploy
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contract with the account:",
        deployer.address
    );

    const Contract = await ethers.getContractFactory("TokenERC20");
    const contract = await Contract.deploy();

    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
