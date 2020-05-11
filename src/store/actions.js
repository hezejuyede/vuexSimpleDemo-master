import * as types from './mutations-types';


export const setCityName = function ({commit, state}, name) {
  console.log(types.SET_CITY);
  console.log(state);
  console.log(name);
  commit(types.SET_CITY, name)
}
