import axios from "axios";
import router from "@/router";
const state = {
    users: [],
    tokens: "", //tokens generating jwt came here
    errors: null,
    updatedProfile : null,
    roles_Store: "user", //default role
    loginError : null,
    allUsers:  null
}
const mutations={
      SET_WEB_TOKENS(state, payload) {
        state.tokens = payload;
      },
      SET_USER(state, payload) {
        state.users = payload;
      },
      SIGUP_VALIDATION_ERROR(state, payload)
      {
        state.errors = payload;
        console.log("signUp error is ==>", state.errors);
      },
      LOGIN_VALIDATION_ERROR(state, payload)
      {
        state.loginError = payload;
      },
      ALL_USERS(state, payload)
      {
       state.allUsers = payload;
      }
}
const actions = {
    async registerUser({commit}, payload) {
        try {
         await axios.post("/users", payload); 
            commit("SET_USER", payload);
          }
           catch(err)
           {
             commit("SIGUP_VALIDATION_ERROR", err.response.data.message);
           }
      },
      async authenticateUser({ commit }, payload) {
          localStorage.getItem('managerDetail') | [];
          try {
          const { data } = await axios.post("/authenticate", payload);
          console.log("data is ==>", data);
          commit("LOGIN_VALIDATION_ERROR", data.message)
          commit("SET_WEB_TOKENS", data.data.token); //for web tokens
          if(data.data.user.role === "manager") //for manager's side
          {
            const userInfo ={
              token : data.data.token, 
              mangerID: data.data.user._id
            }
            localStorage.setItem('managerDetail', JSON.stringify(userInfo));
            router.push({name: 'home-mang'});
          }
          else if(data.data.user.role === "user")  //for user's side
          {
            const userInfo ={
              token : data.data.token, 
              userId: data.data.user._id
            }
            localStorage.setItem('userLoginData', JSON.stringify(userInfo));
            router.push({name: 'home-user'});
          }
        }catch (error) {
          alert("token is not found");
        }
      },
      async getUsers({commit})
      {
       const {data} = await axios.get("/users"); 
       commit("ALL_USERS", data.data)
      },
      async deleteUser(_, payload)
      {
        console.log("payload in actiom", payload);
        try {
          const {data} = await axios.delete(`/users/${payload}`);
          console.log("dat is ", data);
        } catch (error) {
          console.log("error is ===>", error);
        }
      },
      async updateUser(_, payload)
      {
        try {
          const {data} = await axios.patch(`/users/${payload.id}`, payload);
          console.log("dat is ", data);
        } catch (error) {
          console.log("error is ===>", error);
        }
      }
}
const getters = {
  signUpValError(state){
    return state.errors;
  }, 
  loginValErrors(state)
  {
    return state.loginError
  }, 
  getAllUsers(state)
  {
    return state.allUsers;
  }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}