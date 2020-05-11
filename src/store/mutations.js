import * as types from './mutations-types';


const mutations = {
  [types.SET_CITY](state, name) {
    state.city = name;
  }

};

export default mutations
