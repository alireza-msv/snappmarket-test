import * as React from 'react';
import styled from 'styled-components';

import Modal from './Modal';
import Input, { TextArea } from './Input';
import Button, { ButtonsGroup } from './Button';

interface NewLocationModalProps {
  show: boolean,
  id?: string,
  mode?: 'add' | 'edit',
  oldTitle?: string,
  oldDesc?: string,
  onClose: () => void,
  onDone: (id: string, title: string, desc: string) => void,
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ModalBody = styled.div`
  flex-grow: 1;
  padding-top: 20px;
`;

const ModalFooter = styled.div`
  flex: 0 0 auto;
`;

const NewLocationModal: React.FC<NewLocationModalProps> = ({
  show,
  id,
  mode,
  oldTitle,
  oldDesc,
  onClose,
  onDone,
}) => {
  const [title, setTitle] = React.useState<string>('');
  const [desc, setDesc] = React.useState<string>('');
  React.useEffect(() => {
    setTitle(mode === 'edit' ? oldTitle : '');
    setDesc(mode === 'edit' ? oldDesc : '');
  }, [show]);
  const onTitleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
  }, []);
  const onDescChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setDesc(target.value);
  }, []);
  const onCancelClick = React.useCallback(() => {
    onClose();
  }, [id]);
  const onSubmitClick = React.useCallback(() => {
    onDone(id, title, desc);
  }, [id, title, desc]);

  return (
    <Modal
      show={show}
      onClose={onClose}
      title={mode === 'add' ? 'Add Location' : 'Edit Location'}
    >
      <ModalContent>
        <ModalBody>
          <Input
            value={title}
            placeholder="Name"
            onChange={onTitleChange}
          />
          <TextArea
            value={desc}
            placeholder="Description"
            onChange={onDescChange}
          />
        </ModalBody>
        <ModalFooter>
          <ButtonsGroup>
            <Button
              variant="primary"
              block
              onClick={onSubmitClick}
            >
              Submit
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

NewLocationModal.defaultProps = {
  mode: 'add',
};

export default NewLocationModal;
