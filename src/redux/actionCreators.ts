import { Action } from './rootReducer';

export const setLocations = (locations: PinnedLocation[]): Action => ({
  type: 'SET_LOCATIONS',
  payload: locations,
});

export const addLocation = (data: Partial<PinnedLocation>): Action => ({
  type: 'ADD_LOCATION',
  payload: data,
});

export const editLocation = (
  id: string,
  data: Partial<PinnedLocation>,
): Action => ({
  type: 'EDIT_LOCATION',
  payload: { id, ...data },
});

export const deleteLocation = (id: string): Action => ({
  type: 'DELETE_LOCATION',
  payload: id,
});
