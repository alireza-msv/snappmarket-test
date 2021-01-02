import { Dispatch } from 'redux';
import { v4 } from 'uuid';
import {
  addLocation as addLocActionCreator,
  editLocation as editLocActionCreator,
  deleteLocation as deleteLocActionCreator,
} from './actionCreators';

/**
 * adds new location to store
 * @param data Partial<PinnedLocation>
 * @returns {string}
 * @public
 */
export const addLocation = (data: Partial<PinnedLocation>) => (dispatch: Dispatch): string => {
  const id = v4();
  dispatch(addLocActionCreator({
    ...data,
    status: data.status || 'TEMP',
    id,
  }));

  return id;
};

/**
 * edits location info in store
 * only title, description and status can be editted
 * @param id string location uuid
 * @param data Partial<PinnedLocation> location new data
 * @public
 */
export const editLocation = (
  id: string,
  data: Partial<PinnedLocation>,
) => (dispatch: Dispatch): void => {
  dispatch(editLocActionCreator(id, data));
};

/**
 * deletes location form store
 * @param id loaction uuid
 * @public
 */
export const deleteLocation = (id: string) => (dispatch: Dispatch): void => {
  dispatch(deleteLocActionCreator(id));
};
