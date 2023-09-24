import { createStore } from 'vuex';
import user from './modules/user';
import car from './modules/car';
import userFunctionalities from './modules/userFunctionalities';
export default createStore({
  modules: {
    user,
    car,
    userFunctionalities
  },
});