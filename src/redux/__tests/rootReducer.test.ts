import { v4 } from 'uuid';
import rootReducer from '../rootReducer';

describe('rootReducer tests', () => {
  const locationFactory = (
    title: string,
    description: string,
    status: PinnedLocationStatus = 'PINNED',
  ): PinnedLocation => ({
    id: v4(),
    title,
    description,
    lat: Math.random() * 100,
    lng: Math.random() * 100,
    status,
  });
  const defaultState = {
    locations: [
      locationFactory('loc1', 'loc desc1'),
      locationFactory('loc2', 'loc desc2'),
      locationFactory('loc3', 'loc desc3'),
      locationFactory('loc4', 'loc desc4'),
    ],
  };

  it('should set locations', () => {
    const state = rootReducer(undefined, {
      type: 'SET_LOCATIONS', payload: defaultState.locations,
    });

    expect(state).toStrictEqual(defaultState);
  });

  it('should add location', () => {
    const newLocation: PinnedLocation = {
      id: v4(),
      title: 'new location',
      description: 'new location description',
      lat: 31,
      lng: 37,
      status: 'PINNED',
    };
    const state = rootReducer(defaultState, {
      type: 'ADD_LOCATION',
      payload: newLocation,
    });
    expect(state).toStrictEqual({ locations: [...defaultState.locations, newLocation] });
  });

  it('should edit location', () => {
    const editId = defaultState.locations[2].id;
    const state = rootReducer(defaultState, {
      type: 'EDIT_LOCATION',
      payload: {
        id: editId,
        title: 'new Title',
        description: 'new Desc',
        status: 'TEMP',
      },
    });
    expect(state.locations[2]).toStrictEqual({
      id: editId,
      title: 'new Title',
      description: 'new Desc',
      lat: defaultState.locations[2].lat,
      lng: defaultState.locations[2].lng,
      status: 'TEMP',
    });
  });

  it('should delete location', () => {
    const deleteId = defaultState.locations[1].id;
    const state = rootReducer(defaultState, {
      type: 'DELETE_LOCATION',
      payload: deleteId,
    });
    const deletedItem = state.locations.find((loc) => loc.id === deleteId);
    expect(deletedItem).toBeUndefined();
  });
});
