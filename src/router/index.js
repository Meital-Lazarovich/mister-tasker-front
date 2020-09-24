import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskApp from '../views/TaskApp.vue'
import TaskEdit from '../views/TaskEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/task',
    name: 'app',
    component: TaskApp
  },
  {
    path: '/task/edit/:id?',
    name: 'task-edit',
    component: TaskEdit
  }
]

const router = new VueRouter({
  routes
})

export default router
