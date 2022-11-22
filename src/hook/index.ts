import { Contract, utils } from "ethers";
import RewardNFTAbi from "../../contract/RewardNFT.json";
import { RewardNFT } from "../../contract";

const contractAddress = "0x1B815CFc267A6B7f91F2f8EdEC98C00547fa71df";
const RewardNFTInterface = new utils.Interface(RewardNFTAbi.abi);
export const contract = new Contract(
  contractAddress,
  RewardNFTInterface
) as RewardNFT;
