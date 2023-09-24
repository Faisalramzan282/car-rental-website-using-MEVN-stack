import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '../components/SignUp.vue';
import LoginPage from '../views/LoginPageView.vue';
import HomePage from '../views/manager/HomePageView.vue';
import CreateUser from '../views/manager/user-crud/CreateUserView.vue'
import UpdateDelUsers from '../views/manager/user-crud/UpdateDelUserView.vue';
import AddCar from '../views/manager/car-crud/AddCarView.vue';
import UpdateDelCar from '../views/manager/car-crud/UpdateDelCarView.vue';
import HomePageUser from '../views/user/HomePageView.vue';
import CarAvailable from '../views/user/CarAvailableView.vue';
import CarFilter from '../views/user/CarFilterView.vue';
import ReserveCar from '../views/user/ReserveCarView.vue';
import ReserveCancel from '../views/user/ReserveCancel.vue'
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
  {
    path: '/',
    name: 'home-user',
    component: HomePageUser,
    children:[
      {
        path: 'car-available',
        name: 'car-available',
        component: CarAvailable,
      },
      {
        path: 'car-filter',
        name: 'car-filter',
        component: CarFilter
      }, 
      {
        path: 'reserve-car',
        name: 'reserve-car',
        component: ReserveCar
      },
      {
        path: 'reserve-cancel',
        name : 'reserve-cancel',
        component: ReserveCancel
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
