import { createApp } from 'vue'
import App from './App.vue'

//생성한 뷰 라우터 받아오기
import { router } from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
