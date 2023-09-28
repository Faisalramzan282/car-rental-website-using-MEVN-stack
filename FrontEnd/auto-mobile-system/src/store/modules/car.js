import axios from "axios";
const state= {
  allCars: null,
  reservedCars: null,
  usersReserveCar: null
}
const mutations={
    ALL_CARS(state, payload)
    {
        state.allCars = payload;
        // console.log("anbncc", state.allCars);
    },
    RESERVED_CARS(state, payload)
    {
        state.reservedCars = payload;
    }, 
    USERS_RESERVE_CAR(state, payload)
    {
       state.usersReserveCar = payload;
    }
}
const actions={
   async addCar(_, payload)
   {   

    const managerDetail = JSON.parse(localStorage.getItem('managerDetail'));
    payload= {
        ...payload,
        ...managerDetail  //manger id and token
    }
    try {
        const {data} = await axios.post('/cars/add-car', payload);
        if(data.status === "Success")
        {
            alert("Car Added Successfully");
        }

    } catch (error) {
       console.log("error is,",  error );  
    }
   },
   async getCars({commit})
   {
    const managerDetail = JSON.parse(localStorage.getItem('managerDetail'));
    const {data} = await axios.get(`/cars/get-cars/${managerDetail.mangerID}`); //sending mag ID 
    commit("ALL_CARS", data.data[0].cars);
   },
   async deleteCar({commit}, payload)
   {
        const managerDetail = JSON.parse(localStorage.getItem('managerDetail'));
        try {
          const {data} = await axios.delete(`/cars/delete-car/${payload._id}/${managerDetail.mangerID}`);
        //   console.log("dat is ==>", data.data);
          commit("ALL_CARS", data.data);
          alert(data.msg);
        } catch (error) {
          console.log("error is ===>", error);
        }
},
async updateCar({commit}, payload)
{
        console.log("in action", payload);
        const managerDetail = JSON.parse(localStorage.getItem('managerDetail'));
        const {data} = await axios.patch(`/cars/update-car/${managerDetail.mangerID}`, payload);
        commit("ALL_CARS", data.data.cars);
        console.log("car is ==>", data.status)
        if(data.status === 200)
        {
            alert("car Updated successfully");
        }
},
async getReservedCars({commit})
{
   try {
    const managerDetail = JSON.parse(localStorage.getItem('managerDetail'));
    // console.log("manid ==>", managerDetail.mangerID);
    const config = {
        headers: {
          'mangerId': managerDetail.mangerID,
          'Content-Type': 'application/json'
        }
      };
    const {data} = await axios.get('/cars/get-reserve-cars', config);
    console.log("data ==>", data);
    commit('RESERVED_CARS', data.data);
    }catch (error) {
    console.log("error is", error);
   }
},
async userReserveCars({commit})
{
   try {
    const {data} = await axios.get('/cars/users-reserve-car');
    commit("USERS_RESERVE_CAR", data.data)
   } catch (error) {
    console.log("error is ", error);
   }
}
}
const getters={
    getAllCars(state)
    {
        return state.allCars;
    },
    showReserveCars(state){
        return state.reservedCars;
    }, 
    showUsersReserveCar(state)
    {
     return state.usersReserveCar
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}