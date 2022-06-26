import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const streamCreator = await hre.ethers.getContract("StreamCreator");
  const liquidityHub = await hre.ethers.getContract("LiquidityHub");

  await streamCreator.initialize(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    liquidityHub.address
  );
  // await liquidityHub.initialize(streamCreator.address);
};

export default func;
