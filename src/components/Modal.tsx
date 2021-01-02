import * as React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Close as CloseIcon } from './Icons';

interface ModalProps {
  show: boolean,
  title: string,
  onClose: () => void,
}

const Backdrop = styled.div`
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const ModalContainer = styled.div`
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalBox = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  max-width: 100%;
  max-height: 100%;
  overflow-y: auto;
  background-color: white;
  padding: 15px;

  @media (min-width: 576px) {
    width: 360px;
    max-height: 300px;
  }
`;

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  color: #c6c6c6;
`;

const ModalTitle = styled.h4`
  flex-grow: 1;
  font-size: 26px;
  font-weight: 400;
`;

const CloseButton = styled.button`
  border: none;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 50%;
  transition: 300ms background-color;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c6c6c6;

  &:hover { 
    background-color: rgba(0, 0, 0, 0.1);
    color: #aaa;
  }
`;

const ModalContent = styled.div`
  padding-top: 12px;
  height: calc(100% - 40px);
`;

const Modal: React.FC<ModalProps> = ({
  show,
  title,
  onClose,
  children,
}) => {
  const handleCloseClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  }, []);
  const handleCloseButtonClick = React.useCallback((
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    onClose();
  }, []);
  const handleModalBoxClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  if (show) {
    return createPortal(
      <>
        <Backdrop />
        <ModalContainer
          data-testid="container"
          onClick={handleCloseClick}
        >
          <ModalBox
            data-testid="box"
            onClick={handleModalBoxClick}
          >
            <ModalHeader>
              <ModalTitle>
                {title}
              </ModalTitle>
              <CloseButton
                data-testid="close"
                onClick={handleCloseButtonClick}
              >
                <CloseIcon />
              </CloseButton>
            </ModalHeader>
            <ModalContent>
              {children}
            </ModalContent>
          </ModalBox>
        </ModalContainer>
      </>,
      document.body,
    );
  }

  return null;
};

export default Modal;
