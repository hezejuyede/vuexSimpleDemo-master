import * as types from './mutations-types';

export const setCityName = function ({commit, state}, name) {
  commit(types.SET_CITY, name);
};
