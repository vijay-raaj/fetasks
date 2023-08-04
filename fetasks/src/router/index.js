import { createRouter, createWebHistory } from 'vue-router'
import getdata from '@/views/getdata.vue'
import getId from '@/views/getId.vue'
import postMethod from '@/views/postMethod.vue'
import deleteMethod from '@/views/deleteMethod.vue'
import filterMethod from '@/views/filterMethod.vue'
import mapMethods from '@/views/mapMethods.vue'
import SignUp from '@/views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'get',
    component: getdata
  },
  {
    path:'/getid',
    name:'getid',
    component: getId
  },
  {
    path:'/post',
    name:'post',
    component: postMethod
  },
  {
    path:'/delete',
    name:'delete',
    component: deleteMethod
  },
  {
    path:'/filter',
    name:'filter',
    component: filterMethod
  },
  {
    path:'/map',
    name:'map',
    component: mapMethods
  },
  {
    path:'/signup',
    name:'signup',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
