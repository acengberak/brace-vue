import VueRouter from 'vue-router'

// Pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Dashboard from './components/pages/user/Dashboard'

// Admin
import AdminDashboard from './components/pages/admin/AdminDashboard'
import UserList from './components/pages/admin/pages/AdminUserList';

// Routes 
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  // USER ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },
  // ADMIN ROUTES
  {
    path: '/admin',
    name: 'admin.dashboard',
    component: AdminDashboard,
    children: [
      { path: 'userlist', component: UserList}
    ],
    meta: {
      auth: {
        roles: 2, 
        redirect: {
          name: 'login'
        }, 
        forbiddenRedirect: '/403'
      }
    }
  },
]



const router = new VueRouter({
  history: true,
  mode: 'history',
  routes,
  linkActiveClass: 'active',
	linkExactActiveClass: "exact-active",
})
export default router