<template>
  <!-- <SideBar></SideBar>
  <history1></history1> -->
  <Join></Join>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import SideBar from './views/common/main/sidebar/Sidebar.vue';
import Buttons from './views/components/Btn.vue';
import Join from './views/login/Join.vue';
import modal1 from './views/common/components/modal1.vue';
import history1 from './views/purchase/purchase-history/PurchaseHistory.vue';

@Options({
  components: {
    HelloWorld,
    SideBar,
    Buttons,
    Join,
    modal1,
    history1,
  },
})

export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
./views/common/query/QueryUtils