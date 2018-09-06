import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/home/HelloWorld'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path: '/city',
			name: 'City',
			component: City
		},
		{
			path: '/detail/:id',
			name: 'Detail',
			component: Detail
		}
  ]
})
