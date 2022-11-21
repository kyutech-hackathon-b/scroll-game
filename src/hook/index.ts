import { Contract, utils } from "ethers";
import GourmetAbi from "../../contract/KyutechNFT.json";
import { KyutechNFT } from "../../contract";

const contractAddress = "0xaD40c0b0B2Ac4dfcA2de8e15Db077f2bC80d7C7a";
const kyutechNFTInterface = new utils.Interface(GourmetAbi.abi);
export const contract = new Contract(
  contractAddress,
  kyutechNFTInterface
) as KyutechNFT;
