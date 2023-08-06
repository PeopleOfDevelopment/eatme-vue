<template>
  <!-- <SideBar></SideBar> -->
  <!-- <div id="main-wrapper">
    <Main></Main>
    <Basket></Basket>
    <Footer></Footer>
  </div> -->
  <div id="app">
    <router-view></router-view>
  </div>
  <!-- <Join></Join> -->
  <!-- <SideBar></SideBar>
  <div id="main-wrapper">
    <history1></history1>
    <Footer></Footer>
  </div>
  <Login></Login> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import SideBar from './views/common/main/sidebar/Sidebar.vue';
import Buttons from './views/common/components/Btn.vue';
import Join from './views/login/Join.vue';
import modal1 from './views/common/components/Modal1.vue';
import history1 from './views/purchase/purchase-history/PurchaseHistory.vue';
import Main from './views/common/main/Main.vue';
import Basket from './views/purchase/basket/Basket.vue';
import Footer from './views/common/main/footer/Footer.vue';
import Login from './views/login/Login.vue';
import Mypage from './views/user/mypage/Mypage.vue';
import ChangeInfo from './views/user/mypage/change-user-info/ChangeUserInfo.vue';
import './assets/style.css';

@Options({
  components: {
    HelloWorld,
    SideBar,
    Buttons,
    Join,
    modal1,
    history1,
    Main,
    Footer,
    Basket,
    Login,
    Mypage,
    ChangeInfo,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Pretendard, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>
./views/common/query/QueryUtils
