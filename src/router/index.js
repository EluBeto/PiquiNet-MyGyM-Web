import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from '../views/AuthLayout.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let authPages = {
  path: "/",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "/login",
      name: "Login",
      component: () => import('../views/Login.vue')
    }
  ]
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  authPages
]

const router = new VueRouter({
  routes, // short for routes: routes
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  linkExactActiveClass: "nav-item active"
})

export default router
