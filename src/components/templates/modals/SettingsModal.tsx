import Modal from "react-modal";
import { memo } from "react";

type Props = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const SettingsModal = memo(
  ({ isOpen, open, close }: Props): JSX.Element => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, .2)",
          },
        }}
      ></Modal>
    );
  }
);

SettingsModal.displayName = "SettingsModal";
