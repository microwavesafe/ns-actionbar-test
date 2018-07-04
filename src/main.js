import Vue from 'nativescript-vue';

import Home from './components/Home';


import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({
  components: {
    Home
  },
  template: `
    <Frame>
      <Home/>
    </Frame>
  `
}).$start({
  getRootView(vm) {
    return vm.$el.nativeView
  }
});
