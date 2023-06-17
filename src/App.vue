<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

// 타입스크립트 연결 확인
const testStr: string = "연결 완료"
console.log("타입스크립트 연결 확인 : " + testStr)

const check = getDbConnectionStatus()

console.log(check)

/** DB 연결확인  */
async function getDbConnectionStatus() {
  const result = await axios.post("/userlist/query")
  return result
}

@Options({
  components: {
    HelloWorld,
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
  margin-top: 60px;
}
</style>
