import { memo } from "react";
import Modal from "react-modal";

type Props = {
  isOpen: boolean;
  close: () => void;
};

export const SettingsModal = memo(({ close, isOpen }: Props): JSX.Element => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, .2)",
          bottom: 0,
          left: 0,
          position: "fixed",
          right: 0,
          top: 0,
        },
      }}
    ></Modal>
  );
});

SettingsModal.displayName = "SettingsModal";
