import { Modal } from "@mantine/core";
import { FC } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
};

export const ScoreModal: FC<Props> = (props) => {
  const { open, setOpen, score } = props;
  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      centered
      withCloseButton={false}
    >
      <h3 className="text-xl font-bold">Your score</h3>
      <p className="text-3xl font-bold text-center pt-10">{score}</p>
    </Modal>
  );
};
