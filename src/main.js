import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
// Vue.use(axios);
// Vue.prototype.$axios = axios
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// console.log("1");
// console.log("2");
// console.log("3");

// console.log(":1");

// setTimeout(() => {
//       console.log(":2");
// }, 2000);

// console.log(":3");

// console.log("-1");       

// var f2 = function() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log("-2");
//       resolve();
//     }, 2000);
//   });
// };

// f2().then(function() {
//   console.log("-3");
// });

// // ("-1" , "-2" , "-3")




// function func(x,y) {
//   this.x=x;
//   this.y=y;
//   }

//   func.prototype.gumarel={function () {
//     console.log(this.x+this.y)
//   }}

//   let arm= new func(4 , 5)

//   func.gumarel()


// function job() {
//   return new Promise(function (resolve,reject) {
  
//     reject();
// })
// }
// let promise= job();
//  promise 
//  .then(function () {
//      console.log(5);
//  })
//  .catch(function () {
//      console.log("ERROR")   //Error
//  })