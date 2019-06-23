// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

import axios from 'axios'

Vue.use(ElementUI);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.directive('special',{
    bind: function (el, binding, vnode) {

        el.onkeyup = function (e) {
            var e= e|| event;
            if(e.keyCode == 56 || e.keyCode == 106){
                el.value = el.value.substring(0,el.value.length-1)
            }
        }
        return el.value;
        console.log(el.value);
    },
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


