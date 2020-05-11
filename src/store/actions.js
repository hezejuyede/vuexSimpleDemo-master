import * as types from './mutations-types';


// 参数列表：{commit, state}
// state指的是state数据
// commit调用mutations的方法
// name就是调用此方法时要传的参数


export const setCityName = ({commit, state}, name) => {
  commit(types.SET_CITY, name);
};
