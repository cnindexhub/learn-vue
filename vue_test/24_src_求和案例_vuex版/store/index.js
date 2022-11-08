// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 引入countAbout
import countAbout from './count'
// 引入personAbout
import personAbout from './person'


export default new Vuex.Store({
    modules: {
        countAbout,
        personAbout
    }
})
