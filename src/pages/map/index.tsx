import * as React from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import GoogleMap from 'google-map-react';
import { Link } from 'react-router-dom';

import SearchBar from '~/components/SearchBar';
import NewLocationModal from '~/components/NewLocationModal';
import PinnedItem from '~/components/PinnedItem';
import { List as ListIcon } from '~/components/Icons';
import configs from '~/config';
import {
  addLocation as addLoc,
  deleteLocation as delLoc,
  editLocation as editLoc,
} from '~/redux/actions';

interface MapProps {
  defaultZoom: number,
  center: {
    lat: number,
    lng: number,
  },
  addLocation?: (data: Partial<PinnedLocation>) => string,
  deleteLocation?: (id: string) => void,
  editLocation?: (id: string, data: Partial<PinnedLocation>) => void,
  locations?: PinnedLocation[],
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

const MapStyles = createGlobalStyle`
  .gm-fullscreen-control {
    display: none !important;
  }
`;

const FloatButton = styled(Link)`
  position: absolute;
  left: 30px;
  bottom: 30px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background-color: white;
  color: #8c8c8c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:focus {
    box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  svg {
    max-width: 80%;
  }
`;

const Map: React.FC<MapProps> = ({
  defaultZoom,
  center,
  addLocation,
  deleteLocation,
  editLocation,
  locations,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [newId, setNewId] = React.useState<string>();
  const [showNewModal, setShowNewModal] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>();
  const onApiLoaded = React.useCallback(({ maps }) => {
    const sb = new maps.places.SearchBox(inputRef.current);
    setLoading(false);
  }, []);
  const onMapClick = React.useCallback(({ lat, lng }) => {
    const data = { lat, lng };
    const id = addLocation(data);
    setNewId(id);
    setShowNewModal(true);
  }, [newId]);
  const onNewModalClose = React.useCallback(() => {
    deleteLocation(newId);
    setShowNewModal(false);
  }, [newId]);
  const onNewModalDone = React.useCallback((id: string, title: string, description: string) => {
    editLocation(id, { title, description, status: 'PINNED' });
    setShowNewModal(false);
  }, [newId]);

  return (
    <Container>
      <MapStyles />
      <GoogleMap
        bootstrapURLKeys={{ key: configs.googleMapApiKey, libraries: ['places'] }}
        center={[center.lat, center.lng]}
        defaultZoom={defaultZoom}
        onGoogleApiLoaded={onApiLoaded}
        onClick={onMapClick}
      >
        {locations.map((loc) => (
          <PinnedItem
            id={loc.id}
            key={loc.id}
            title={loc.title}
            lat={loc.lat}
            lng={loc.lng}
          />
        ))}
      </GoogleMap>
      <SearchBar inputRef={inputRef} />
      {locations.length ? (
        <FloatButton to="/locations">
          <ListIcon />
        </FloatButton>
      ) : null}
      <NewLocationModal
        show={showNewModal}
        id={newId}
        onClose={onNewModalClose}
        onDone={onNewModalDone}
      />
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => (state);
const mapDispatchToProps = {
  addLocation: addLoc,
  deleteLocation: delLoc,
  editLocation: editLoc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
