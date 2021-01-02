import { AnyAction } from 'redux';

export type ActionType = 'ADD_LOCATION' | 'EDIT_LOCATION' | 'DELETE_LOCATION' | 'SET_LOCATIONS';

export interface Action extends AnyAction {
  type: ActionType,
  payload: string | Partial<PinnedLocation> | PinnedLocation[],
}

const initialState: StoreState = {
  locations: [],
};
const rootReducer = (state: StoreState = initialState, action: AnyAction): StoreState => {
  switch (action.type) {
    case 'SET_LOCATIONS':
      return { ...state, locations: (action.payload as PinnedLocation[]) };
    case 'ADD_LOCATION':
      return { ...state, locations: [...state.locations, action.payload as PinnedLocation] };
    case 'EDIT_LOCATION':
      return {
        ...state,
        locations: state.locations.map((loc): PinnedLocation => {
          const data = action.payload as Partial<PinnedLocation>;

          if (loc.id === data.id) {
            return {
              ...loc,
              title: data.title,
              description: data.description,
              status: data.status || loc.status,
            };
          }
          return loc;
        }),
      };
    case 'DELETE_LOCATION':
      return {
        ...state,
        locations: state.locations.filter((loc) => loc.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
