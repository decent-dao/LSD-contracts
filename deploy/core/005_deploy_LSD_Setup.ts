import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const streamCreator = await hre.ethers.getContract("StreamCreator");
  const liquidityHub = await hre.ethers.getContract("LiquidityHub");

  await streamCreator.initialize(
    "0x567c4B141ED61923967cA25Ef4906C8781069a10",
    "0x8276469A443D5C6B7146BED45e2abCaD3B6adad9",
    liquidityHub.address
  );
  await liquidityHub.initialize(streamCreator.address);
};

export default func;
