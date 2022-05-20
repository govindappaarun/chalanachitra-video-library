import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import Wrapper, { Footer, Header, Main } from "./Modal.styled";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

function Modal({ open, onClose, children, ...rest }: ModalProps) {
  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);
    return () => window.addEventListener("keydown", handleEscKey);
  }, []);

  if (!open) {
    return null;
  }
  return createPortal(
    <Wrapper className="modal-overlay" {...rest}>
      <Main display="flex" direction="column" className="modal">
        <Header>
          <RiCloseLine className="close" onClick={onClose} />
        </Header>
        {children}
      </Main>
    </Wrapper>,
    document.body
  );
}

export default Modal;
