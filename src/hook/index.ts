import { Contract, utils } from "ethers";
import { RewardNFT } from "../../contract";
import RewardNFTAbi from "../../contract/RewardNFT.json";

const contractAddress = "0x54B6C7e79a80a24423ddDb32E821Fa2E88EcEca4";
const RewardNFTInterface = new utils.Interface(RewardNFTAbi.abi);
export const contract = new Contract(
  contractAddress,
  RewardNFTInterface
) as RewardNFT;
