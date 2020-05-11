import * as types from './mutations-types';


export const setCityName = function ({commit, state}, name) {

  commit(types.SET_CITY, name);
  console.log(types.SET_CITY);
  console.log(state);
  console.log(name);
}
