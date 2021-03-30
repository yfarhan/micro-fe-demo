import { proxy } from 'valtio';
import { Vpc } from './types';

export interface Tapstore {
  taps: Vpc[];
  filteredTaps: Vpc[];
  cart: Vpc[];
  searchText: string;
  alcoholLimit: number;
}

const store = proxy<Tapstore>({
  taps: [],
  searchText: "",
  alcoholLimit: 10,
  filteredTaps: [],
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
  fetch(`/${client}.json`)
  .then(response => response.json())
  .then((taps: Vpc[]) => {
    store.taps = taps;store;
    store.filteredTaps = filter();
  })
}

export const setSearchText = (searchText: string) => {
  store.searchText = searchText;
  store.filteredTaps = filter();
};

export default store;
