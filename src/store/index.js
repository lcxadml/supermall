import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

const state = {
  cartList:[

  ]
}
export default createStore({
  state,
  // 修改属性通过mutations
  mutations: mutations,
 actions: actions,
  modules: {
  }
})
