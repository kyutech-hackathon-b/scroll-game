import { Group, Text } from "@mantine/core";
import { Goerli, useEthers } from "@usedapp/core";

export const WalletConnect = () => {
  const { account, chainId, deactivate, activateBrowserWallet, switchNetwork } =
    useEthers();

  if (account) {
    if (chainId === Goerli.chainId) {
      return (
        <button
          onClick={deactivate}
          className="text-sm leading-none cursor-pointer font-bold text-white bg-black py-4 px-5 ml-10 rounded-md"
        >
          ウォレット接続を解除
        </button>
      );
    } else {
      return (
        <Group>
          <Text className="text-sm" color="red">
            ネットワークが違います
          </Text>
          <button
            onClick={() => switchNetwork(Goerli.chainId)}
            className="text-sm leading-none cursor-pointer font-bold text-white bg-black py-4 px-5 ml-10 rounded-md"
          >
            ネットワークを切り替える
          </button>
        </Group>
      );
    }
  } else {
    return (
      <button
        className="text-sm leading-none cursor-pointer font-bold text-white bg-black py-4 px-5 ml-10 rounded-md"
        onClick={activateBrowserWallet}
      >
        ウォレットを接続
      </button>
    );
  }
};
