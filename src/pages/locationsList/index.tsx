import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from '~/components/SearchBar';
import PlaceItem from '~/components/PlaceItem';
import NewLocationModal from '~/components/NewLocationModal';
import DeleteConfirm from '~/components/DeleteConfirm';

import {
  editLocation as editLoc,
  deleteLocation as delLoc,
} from '~/redux/actions';

interface ListProps {
  locations?: PinnedLocation[],
  editLocation?: (id: string, data: Partial<PinnedLocation>) => void,
  deleteLocation?: (id: string) => void,
}

const Container = styled.div`
  padding: 70px 20px 20px 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 12px;
  color: #878787;
`;

const HeaderTitle = styled.h3`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 0;
  flex-grow: 1;
`;

const BackButton = styled(Link)`
  flex: 0 0 24px;
  height: 24px;
  text-decoration: none;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:after, &:before {
    content: '';
    width: 6px;
    height: 1px;
    position: absolute;
    background-color: #878787;
  }
  &:after {
    left: 8px;
    transform: rotateZ(-130deg);
    top: 9px;
  }
  &:before {
    left: 8px;
    transform: rotateZ(130deg);
    top: 14px;
  }
`;

const LocationsList: React.FC<ListProps> = ({
  locations,
  editLocation,
  deleteLocation,
}) => {
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);
  const [activeItem, setActiveItem] = React.useState<PinnedLocation>();
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const onSearchChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchTerm(target.value);
  }, []);
  const onEditRequest = React.useCallback((id: string) => {
    const item = locations.find((loc) => loc.id === id);

    setActiveItem(item);
    setShowEditModal(true);
  }, [activeItem?.id]);
  const onDeleteRequest = React.useCallback((id: string) => {
    const item = locations.find((loc) => loc.id === id);

    setActiveItem(item);
    setShowDeleteModal(true);
  }, [activeItem?.id]);
  const hideEditModal = React.useCallback(() => {
    setShowEditModal(false);
  }, []);
  const onEditSubmit = React.useCallback((id: string, title: string, description: string) => {
    editLocation(id, { title, description });
    setShowEditModal(false);
  }, []);
  const hideDeleteModal = React.useCallback(() => {
    setShowDeleteModal(false);
  }, []);
  const onDeleteConfirm = React.useCallback((id: string) => {
    deleteLocation(id);
    setShowDeleteModal(false);
  }, [activeItem?.id]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Locations
        </HeaderTitle>
        <BackButton to="/" />
      </Header>
      <SearchBar value={searchTerm} onChange={onSearchChange} />
      { locations
        .filter((loc) => loc.title.toLowerCase().includes(searchTerm))
        .map((loc) => (
          <PlaceItem
            key={loc.id}
            title={loc.title}
            id={loc.id}
            onEdit={onEditRequest}
            onDelete={onDeleteRequest}
          />
        )) }
      <NewLocationModal
        show={showEditModal}
        id={activeItem?.id}
        mode="edit"
        oldTitle={activeItem?.title}
        oldDesc={activeItem?.description}
        onClose={hideEditModal}
        onDone={onEditSubmit}
      />
      <DeleteConfirm
        show={showDeleteModal}
        id={activeItem?.id}
        onDelete={onDeleteConfirm}
        onClose={hideDeleteModal}
      />
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({ locations: state.locations });
const mapDispatchToProps = {
  editLocation: editLoc,
  deleteLocation: delLoc,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
