import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/oauth2/callback',
      component: AuthHandler
    },
    {
      path: '/',
      component: ImageList
    },
    {
      path: '/upload',
      component: UploadForm
    }
  ]
})


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

console.log();