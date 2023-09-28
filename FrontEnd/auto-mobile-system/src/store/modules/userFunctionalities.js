import axios from "axios"
const state = {
  allCars : null,
  reserveCars: null,
  allAvailableCars: null
}
const mutations={
 ALL_CARS(state, payload)
 {
  state.allCars = payload;
 }, 
 RESERVE_CARS(state, payload)
 {
  state.reserveCars = payload;
 },
 ALL_AVAILABLE_CARS(state, payload)
 {
     state.allAvailableCars = payload;
 }
}
const actions={
  async getAllCars({commit}, payload){
  try {
    const config = {
      headers: {
        'searchdata': payload,
        'Content-Type': 'application/json'
      }
    };
    const {data} = await axios.get(`/user-page/get-all-cars`, config);
    commit('ALL_CARS', data.data);
  } catch (error) {
    console.log("error is ==>", error);
  }
  },
  async getAvailableCars({commit})
  {
    try{
     const {data} = await axios.get('/user-page/get-available-cars');
    //  console.log("res is ==>", data.data);
    commit("ALL_AVAILABLE_CARS", data.data);
    }catch(error )
    {
      console.log('error is ==>', error);
    }
  }, 
  async reserveCar(_,payload)
  {
   try {
    const {data} = await axios.post('/user-page/reserve-car', payload);
    if(data.status === 200)
    {
      alert("Car is Reserved, see on Reserve Cancellation Section");
    }
  } catch (error) {
     console.log("error is", error);
   }
  },
  async getReserveCars({commit})
  {
    try {
      const userLoginData = JSON.parse(localStorage.getItem('userLoginData'));
      const userId = userLoginData.userId;
      const config = {
        headers: {
          'userId': userId,
          'Content-Type': 'application/json'
        }
      };
      const {data} = await axios.get(`/user-page/get-reserve-cars`, config);
      commit('RESERVE_CARS', data.data);
    } catch (error) {
      console.log("error is ,", error );
    }
  },
  async cancelReserveCar({commit},payload)
  {
    const userLoginData = JSON.parse(localStorage.getItem('userLoginData'));
    const userId = userLoginData.userId;
    const config = {
      headers: {
        'userId' : userId,
        'carId': payload.carId,
        '_id' : payload._id,
        'Content-Type': 'application/json'
      }
    };
     try {
      const {data} = await axios.delete(`/user-page/cancel-reservation`, config);
      // console.log('response is ===>', data.data);
      commit('RESERVE_CARS', data.data);
     } catch (error) {
      console.log('error is ==>', error);
     }
  }
}
const getters={
  getAllCarss(state)
  {
    return state.allCars;
  },
  getAllReserveCars(state)
  {
    return state.reserveCars;
  },
  getAllAvailableCars(state)
  {
    return state.allAvailableCars;
  }
}
export default{
    namespaced: true,
    state, 
    mutations,
    actions,
    getters
}