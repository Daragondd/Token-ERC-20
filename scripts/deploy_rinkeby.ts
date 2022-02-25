import { ethers } from "hardhat";

import dotenv from "dotenv";
dotenv.config()

async function main() {
    // We get the contract to deploy
    const addr: string = "0x73bEF69AB0a9f330eE38784e9c754C11f39dE03A";

    const deployer = await ethers.getSigner(addr);
    console.log(
        "Deploying contract with the account:",
        deployer.address
    );

    const Contract = await ethers.getContractFactory("ERC20");
    const contract = await Contract.connect(deployer).deploy();

    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
