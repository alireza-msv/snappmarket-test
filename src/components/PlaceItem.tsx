import * as React from 'react';
import styled from 'styled-components';

import {
  Trash as TrashIcon,
  Pen as PenIcon,
} from './Icons';

interface PlaceItemProps {
  id: string,
  title: string,
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
}

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e9e9e9;
`;

const TitleCol = styled.div`
  flex-grow: 1;
  font-size: 18px;
`;

const ButtonsCol = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: background-color 300ms;
  color: #a3a3a3;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

const PlaceItem: React.FC<PlaceItemProps> = ({
  id, title, onDelete, onEdit,
}) => {
  const onEditClick = React.useCallback(() => {
    onEdit(id);
  }, [id]);
  const onDeleteClick = React.useCallback(() => {
    onDelete(id);
  }, [id]);

  return (
    <Row>
      <TitleCol>
        { title }
      </TitleCol>
      <ButtonsCol>
        <Button onClick={onEditClick}>
          <PenIcon />
        </Button>
        <Button onClick={onDeleteClick}>
          <TrashIcon />
        </Button>
      </ButtonsCol>
    </Row>
  );
};

export default PlaceItem;
