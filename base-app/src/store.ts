import { proxy } from 'valtio';
import { Vpc } from './types';

export interface VpcStore {
  taps: Vpc[];
  filteredVpcs: Vpc[];
  cart: Vpc[];
  searchText: string;
}

const store = proxy<VpcStore>({
  taps: [],
  searchText: "",
  filteredVpcs: [],
  cart: [],
});

const filter = () => {
  const searchRE = new RegExp(store.searchText, "i");
  console.log(store);
  return store.taps
    .filter(({ name }) => {
      return name.match(searchRE);
    })
    .slice(0, 15);
}

export const load = (client: string): void => {
  fetch(`http://localhost:5000/${client}.json`)
  .then(response => response.json())
  .then((taps: Vpc[]) => {
    store.taps = taps;store;
    store.filteredVpcs = filter();
  })
}

export const setSearchText = (searchText: string) => {
  store.searchText = searchText;
  store.filteredVpcs = filter();
};

export default store;
