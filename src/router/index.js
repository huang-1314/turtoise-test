// //引入
// import Vue from "vue";

// import VueRouter from "vue-router";

// //使用插件
// Vue.use(VueRouter);

// //引入路由组件
// import Home from "@/pages/Home";
// import Login from "@/pages/Login";
// import Register from "@/pages/Register";
// import Search from "@/pages/Search";

// //配置路由
// export default new VueRouter({
//   routes: [
//     {
//       path: "/home",
//       component: Home,
//     },
//     {
//       path: "/login",
//       component: Login,
//     },
//     {
//       path: "/search",
//       component: Search,
//     },
//     {
//       path: "/register",
//       component: Register,
//     },
//   ],
// });


import { createWebHistory, createRouter } from "vue-router";       //Vue3路由写法

//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";



const history = createWebHistory();
const VueRouter = createRouter({
    history,
    routes: [   
         {
        path: "/home",
        component: Home,
        meta:{
            show:true
        }
      },
      {
        path: "/login",
        component: Login,
        meta:{
            show:false
        }
      },
      {
        path: "/search/:keyword?",     //params参数后面加一个？，代表此参数可传可不传
        component: Search,
        meta:{
            show:true
        },
        name:'search',
        //路由传递props参数
        //第一种写法：布尔值写法，只能传递pramas参数
        //props:true
        //第二种写法：对象写法,可在params参数中额外添加其他参数
        // props:{
        //   k:'abs',
        //   u:'df'
        // }
        //第三种写法：比较常用的函数式写法,可以把params参数和query参数传递给路由组件
        props:($route) => {
          return {keyword:$route.params.keyword,k:$route.query.k}
        }

      },
      {
        path: "/register",
        component: Register,
        meta:{
            show:false
        }
      },
      {
        path: "/",
        redirect:'/home',   //重定向
      }
    ]
})

//先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.push;
let originReplace = VueRouter.replace;

//重写push| replace 方法 
VueRouter.push = function (location,resolve,reject) {
  if(resolve&&reject){
    originPush.call(this,location,resolve,reject)
  }
  else{
    console.log("改写成功")
    originPush(this,location,() => {},() => {})
  }
}

VueRouter.replace = function (location,resolve,reject) {
  if(resolve&&reject){
    originReplace.call(this,location,resolve,reject)
  }
  else{
    console.log("改写成功")
    originReplace(this,location,() => {},() => {})
  }
}

 
export default VueRouter;
