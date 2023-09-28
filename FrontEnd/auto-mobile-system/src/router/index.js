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
import ReserveCarUser from '../views/manager/ReserveCarsView.vue';
import UnauthorizePage from '../views/UnauthorizePageView.vue';
import UserReserveCars from '../views/manager/UserReserveCarsView.vue';
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
    path: '/unauthorize',
    name: 'unauthorize',
    component: UnauthorizePage
  }, 
  {
    path: '/home-mang',
    name: 'home-mang',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      let managerDetail =JSON.parse(localStorage.getItem('managerDetail'));
      if (managerDetail) {
        if (managerDetail.token && managerDetail.mangerID) {
          next();
        } else {
          next('/unauthorize');
        }
      } else {
        next('/unauthorize');
      }
     },
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
      },
      {
        path: 'reserve-cars',
        name: 'reserve-cars',
        component: ReserveCarUser
      },
      {
        path: 'users-reserve-car',
        name: 'users-reserve-car', 
        component: UserReserveCars
      }
    ]
  },
  {
    path: '/',
    name: 'home-user',
    component: HomePageUser,
    beforeEnter: (to, from, next) => {
      let userLoginData = JSON.parse(localStorage.getItem('userLoginData'));
      if (userLoginData) {
        if (userLoginData.token && userLoginData.userId) {
          next();
        } else {
          next('/unauthorize');
        }
      } else {
        next('/unauthorize');
      }
    },
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
// router.beforeEach((to, from, next) => {
//   const managerDetail = JSON.parse(localStorage.getItem('managerDetail'));

//   if (to.name !== 'home-mang') {
//     // Check if managerDetail and required properties (token and managerId) exist
//     if (!managerDetail || !managerDetail.token || !managerDetail.mangerID) {
//       // Redirect to the unauthorized page if not authenticated
//       next('/unauthorize');
//     } else {
//       // Continue to the requested page if authenticated
//       next();
//     }
//   } else {
//     // Allow access to the home-mang route without authentication
//     next();
//   }
// })
export default router
