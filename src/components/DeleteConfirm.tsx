import * as React from 'react';
import styled from 'styled-components';

import Modal from './Modal';
import { Trash as TrashIcon } from './Icons';
import Button, { ButtonsGroup } from './Button';

interface DeleteConfirmProps {
  show: boolean,
  id: string,
  onClose: () => void,
  onDelete: (id: string) => void,
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ModalBody = styled.div`
  flex-grow: 1;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalFooter = styled.div`
  flex: 0 0 auto;
`;

const TrashContainer = styled.div`
  width: 90px;
  height: 90px;
  flex: 0 0 90px;
  border-radius: 50%;
  border: 1px solid #b7b7b7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b7b7b7;

  svg {
    max-width: 70%;
  }
`;

const ConfirmText = styled.p`
  font-size: 28px;
  color: #b7b7b7;
  margin-top: 12px;
  margin-bottom: 0;
`;

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({
  show,
  id,
  onClose,
  onDelete,
}) => {
  const onCancelClick = React.useCallback(() => {
    onClose();
  }, [id]);
  const onDeleteClick = React.useCallback(() => {
    onDelete(id);
  }, [id]);

  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Delete Location"
    >
      <ModalContent>
        <ModalBody>
          <TrashContainer>
            <TrashIcon />
          </TrashContainer>
          <ConfirmText>
            Are you sure?
          </ConfirmText>
        </ModalBody>
        <ModalFooter>
          <ButtonsGroup>
            <Button
              variant="primary"
              block
              onClick={onDeleteClick}
            >
              Delete
            </Button>
            <Button
              variant="secondary"
              block
              onClick={onCancelClick}
            >
              Cancel
            </Button>
          </ButtonsGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteConfirm;
