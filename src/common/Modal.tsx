// Modal.js
import React, { PropsWithChildren } from 'react';
import './Modal.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps> ) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={onClose}>&times;</span>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
