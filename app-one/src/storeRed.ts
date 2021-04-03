export const UPDATE_STORE_RED = 'UPDATE_STORE_RED';

export const updateStoreRed = store => ({
  type: UPDATE_STORE_RED,
  store,
});

export default (state = {
  counter: 1000
}, action) => {  
  switch (action.type) {
    case 'UPDATE_STORE_RED':
      return { ...state, ...action.store };

    default:
      return state
  }
};
