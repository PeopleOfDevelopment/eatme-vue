<template>
  <Sidebar></Sidebar>
  <div id="main-wrapper">
    <TopNav state="location"></TopNav>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Sidebar from './sidebar/Sidebar.vue';
import TopNav from '../components/TopNav.vue';
import Footer from './footer/Footer.vue';
</script>

<style scoped>
svg {
  width: 24px;
  height: 24px;
}
</style>
