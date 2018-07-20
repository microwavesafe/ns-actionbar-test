import Vue from 'nativescript-vue';
import Home from './components/Home';
import './styles.scss';

// Adding the frame inside the first component causes the problem
new Vue({
render: h => h(Home),
}).$start();

/*
// Adding the frame here, solves the problem
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
*/
