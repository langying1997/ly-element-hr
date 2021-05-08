import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters' // 快捷访问
import app from './modules/app' // 折叠展开
import settings from './modules/settings' // logo/头部
import user from './modules/user' // 用户信息

Vue.use(Vuex)

// 实例化
const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters
})

export default store
