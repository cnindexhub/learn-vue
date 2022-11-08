// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            path: '/home',
            component: Home,
            meta: {title: '首页'},
            children: [
                {
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    // 组件独享路由守卫
                    // beforeEnter(to, from, next) {
                    //     if (to.meta.isAuth && localStorage.getItem('username') != '邓鹏飞') {
                    //         alert('您当前没有权限访问该页面！');
                    //     } else {
                    //         next()
                    //     }
                    // },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title', // params属性传递参数需要在path添加特殊占位符 使用格式为 /:字段名
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props:{a:1,b:'hello'}

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // props:true,

                            //props的第三种写法，值为函数 就会把该函数返回的对象，以props的形式传给Detail组件
                            props({query}) {
                                return {
                                    id: query.id,
                                    title: query.title
                                }
                            },
                            component: Detail,
                            meta: {isAuth: true, title: '消息详情'}
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                }
            ]
        }
    ]
})

//添加前置路由守卫 在meta中添加开发者自定义的属性 添加路由鉴权标识isAuth
// 全局前置路由守卫-----初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     if (to.meta.isAuth && localStorage.getItem('username') != '邓鹏飞') {
//         alert('您当前没有权限访问该页面！');
//     } else {
//         next()
//     }
// })
// 全局后置路由守卫-----初始化的时候被调用、每次路由切换之前被调用
// router.afterEach((to, from) => {
//     // 当前我们想跳转路由后切换当前页签标题
//     document.getElementsByTagName('title')[0].innerText = to.meta.title
// })
export default router

