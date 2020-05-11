import * as types from './mutations-types';

export const setCityName = ({commit, state}, name) => {
  commit(types.SET_CITY, name);
};
