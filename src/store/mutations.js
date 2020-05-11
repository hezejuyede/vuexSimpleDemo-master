import * as types from './mutations-types';


// state指的是state的数据
// name传递过来的数据

const mutations = {
  [types.SET_CITY](state, name) {
    state.city = name;
  }

};

export default mutations
