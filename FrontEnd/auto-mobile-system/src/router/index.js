import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '../components/SignUp.vue';
import LoginPage from '../views/LoginPageView.vue';
import HomePage from '../views/manager/HomePageView.vue';
import CreateUser from '../views/manager/user-crud/CreateUserView.vue'
import UpdateDelUsers from '../views/manager/user-crud/UpdateDelUserView.vue';
import AddCar from '../views/manager/car-crud/AddCarView.vue';
import UpdateDelCar from '../views/manager/car-crud/UpdateDelCarView.vue';
const routes = [
  { 
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home-mang',
    name: 'home-mang',
    component: HomePage,
    children:[
      {
        path: 'create-user',
        name: "create-user",
        component: CreateUser
      }, 
      {
        path: 'update-del-users',
        name: "update-del-users",
        component: UpdateDelUsers
      },  
      {
        path: 'add-car',
        name: 'add-car',
        component: AddCar
      },
      {
        path: 'update-del-car',
        name: 'update-del-car',
        component: UpdateDelCar
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
