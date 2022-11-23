import { Contract, ethers, utils } from "ethers";
import { useEffect, useState } from "react";
import RewardNFTAbi from "../../../contract/RewardNFT.json";
import { RewardNFT } from "../../../contract";
import { useEthers } from "@usedapp/core";

export type UseColorOutput = {
  url: string;
};

export const useColor = (): UseColorOutput => {
  const { account } = useEthers();
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (window) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAddress = "0x54B6C7e79a80a24423ddDb32E821Fa2E88EcEca4";
      const RewardNFTInterface = new utils.Interface(RewardNFTAbi.abi);
      const contract = new Contract(
        contractAddress,
        RewardNFTInterface,
        signer
      ) as RewardNFT;
      if (account) {
        const f = async () => {
          const nftInfo = await contract.tokenURI(0);
          setUrl(String(nftInfo));
        };
        f();
      }
    }
  }, [account]);
  return { url };
};
