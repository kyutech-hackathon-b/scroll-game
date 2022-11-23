import { Modal } from "@mantine/core";
import { FC, useCallback, useState } from "react";
import useSWR from "swr";
import { useColor } from "../../hook/Color";
import { useOwnerOf } from "../../hook/OwnerOf";
import { fetcher } from "../../utils/fetcher";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sendMessage: (
    gameObjectName: string,
    methodName: string,
    parameter?: any
  ) => void;
  isLoaded: boolean;
};

export const ColorModal: FC<Props> = (props) => {
  const { open, setOpen, sendMessage, isLoaded } = props;
  const [changed, setChanged] = useState<boolean>(false);
  const { url } = useColor();
  const { owner } = useOwnerOf();
  const { data } = useSWR(url, fetcher);
  const handleColor = useCallback(
    (rgb: string) => {
      sendMessage("Player", "ChangeColor", rgb);
      setChanged(true);
      setOpen(false);
    },
    [isLoaded]
  );
  const handleUndo = useCallback(
    (rgb: string) => {
      sendMessage("Player", "ChangeColor", rgb);
      setChanged(false);
      setOpen(false);
    },
    [isLoaded]
  );
  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      centered
      withCloseButton={false}
    >
      <h3 className="text-xl font-bold">Colors you have</h3>
      <ul className="pt-10">
        {owner ? (
          <li className="flex justify-between">
            <span
              className="block py-2 px-4 rounded-full text-center w-[70%]"
              style={{ backgroundColor: data?.name }}
            >
              {data?.name}
            </span>
            {changed ? (
              <button
                className="text-sm leading-none cursor-pointer font-bold text-white bg-black py-4 px-5 ml-10 rounded-md"
                onClick={() => handleUndo("#2ee3fd")}
              >
                戻す
              </button>
            ) : (
              <button
                className="text-sm leading-none cursor-pointer font-bold text-white bg-black py-4 px-5 ml-10 rounded-md"
                onClick={() => handleColor(data.name)}
              >
                選択
              </button>
            )}
          </li>
        ) : (
          <li>NFTを所持していません</li>
        )}
      </ul>
    </Modal>
  );
};
