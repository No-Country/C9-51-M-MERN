import styled from "styled-components";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalBody>
        <ButtonClose onClick={onClose}>x</ButtonClose>
        {children}
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;

const ButtonClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
`;

const ModalBody = styled.div`
  min-width: 400px;
  min-height: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: fadeInDown 0.8s;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;


