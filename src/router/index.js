import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestComponent from '../components/TestComponent.vue'
import AddRecipe from '../components/AddRecipeForm.vue'
import GroceryList from '../components/GroceryList.vue'
import SearchRecipe from '../components/SearchRecipesForm.vue'
import Results from '../components/SearchResults.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'TestComponent',
    component: TestComponent
  },
  {
    path: '/addrecipe',
    name: 'AddRecipe',
    component: AddRecipe
  },
  {
    path: '/grocerylist',
    name: 'GroceryList',
    component: GroceryList
  },
  {
    path: '/searchrecipe',
    name: 'SearchRecipe',
    component: SearchRecipe
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
