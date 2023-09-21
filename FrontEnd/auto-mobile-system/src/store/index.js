import { createStore } from 'vuex';
import user from './modules/user';
import car from './modules/car';

export default createStore({
  modules: {
    user,
    car
  },
});