import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/toast'
// import fastClick from 'fastclick'
// Vue.prototype.$bus = Bus

// 解决移动端300毫秒的延迟

    const app = createApp(App).use(store).use(router).use(toast).mount('#app');
    // fastClick.attach(document.body)
    
