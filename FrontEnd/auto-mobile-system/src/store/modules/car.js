import axios from "axios";
const state= {
  allCars: null
}
const mutations={
    ALL_CARS(state, payload)
    {
        state.allCars = payload;
        // console.log("anbncc", state.allCars);
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
    // console.log("payload===>", payload);
    try {
        const {data} = await axios.post('/cars/add-car', payload);
        // console.log("stateus==>", data);
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
}
}
const getters={
    getAllCars(state)
    {
        return state.allCars;
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}