import { Vpc } from './types';

export const SET_VPCS = 'SET_VPCS';
export const UPDATE_STORE = 'UPDATE_STORE';

export const updateStore = store => ({
  type: UPDATE_STORE,
  store,
});

const intial = {
  vpcs: [],
  filteredVpcs: [],
  searchText: '',
};

export default (state = intial, action) => {  
  switch (action.type) {
    case 'UPDATE_STORE':
      let newState = { ...state, ...action.store };
      newState.filteredVpcs = filter(newState.searchText, newState.vpcs);
      return newState;

    default:
      return state
  }
}

export const filter = (searchText: string, vpcs: Vpc[]): Vpc[] => {
  const searchRE = new RegExp(searchText, "i");

  return vpcs
    .filter(({ name }) => {
      return name.match(searchRE);
    })
    .slice(0, 15);
}

export const load = (client: string, cb: Function): void => {
  fetch(`http://localhost:5000/${client}.json`)
  .then(response => response.json())
  .then((vpcs: Vpc[]) => {
    cb({ vpcs });
  })
};
