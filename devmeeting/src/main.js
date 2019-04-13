import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';
import Navigation from '@/components/Navigation.vue';
import VoteOptions from '@/components/VoteOptions.vue';

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton);
Vue.component('BaseInput', BaseInput);
Vue.component('Navigation', Navigation);
Vue.component('VoteOptions', VoteOptions);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
