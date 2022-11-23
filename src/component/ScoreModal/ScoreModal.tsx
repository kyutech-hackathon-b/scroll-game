import { Modal } from "@mantine/core";
import { FC, useCallback } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  sendMessage: (
    gameObjectName: string,
    methodName: string,
    parameter?: any
  ) => void;
  isLoaded: boolean;
};

export const ScoreModal: FC<Props> = (props) => {
  const { open, setOpen, score, sendMessage, isLoaded } = props;

  const handleRestart = useCallback(() => {
    sendMessage("ScrollController", "Restart");
    setOpen(false);
  }, [isLoaded]);
  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      centered
      withCloseButton={false}
    >
      <h3 className="text-xl font-bold">You got</h3>
      <p className="text-5xl font-bold text-center pt-10">
        {score}
        <span className="text-base pl-2">points</span>
      </p>
      <h4 className="text-lg font-bold mt-10 px-5">Log</h4>
      <ul className="px-5">
        <li>
          <span className="text-lg">1. </span>
          <span className="text-lg">10,000</span>
        </li>
        <li>
          <span className="text-lg">2. </span>
          <span className="text-lg">10,000</span>
        </li>
        <li>
          <span className="text-lg">3. </span>
          <span className="text-lg">10,000</span>
        </li>
        <li>
          <span className="text-lg">4. </span>
          <span className="text-lg">10,000</span>
        </li>
      </ul>
      <button
        className="text-sm leading-none cursor-pointer font-bold text-white bg-black py-4 px-5 mx-auto mt-8 rounded-md block w-full"
        onClick={handleRestart}
      >
        Play again
      </button>
    </Modal>
  );
};
