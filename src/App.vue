<template>
  <SideBar></SideBar>
  <div id="main-wrapper">
    <Basket></Basket>
    <Main></Main>
    <Footer></Footer>
  </div>
  <!-- <Join></Join> -->
  <!-- <SideBar></SideBar>
  <div id="main-wrapper">
    <history1></history1>
    <Footer></Footer>
  </div> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import SideBar from './views/common/main/sidebar/Sidebar.vue';
import Buttons from './views/common/components/Btn2.vue';
import Join from './views/login/Join.vue';
import modal1 from './views/common/components/modal1.vue';
import history1 from './views/purchase/purchase-history/PurchaseHistory.vue';
import Main from './views/common/main/Main.vue';
import Basket from './views/purchase/basket/Basket.vue';
import Footer from './views/common/main/footer/Footer.vue';
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
}
#main-wrapper {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
}
</style>
./views/common/query/QueryUtils
