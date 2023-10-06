<template>
  <span class="material-symbols-rounded prev-btn" @click="$emit('close')">
    chevron_left
  </span>
  내 주변 할인 매장
  <div class="itemList-list">
    <Card :place="true" :itemList="placeList"></Card>
  </div>
  <Footer></Footer>
</template>
<script setup>
import Card from '@/views/common/components/Card.vue';
import Footer from '@/views/common/main/footer/Footer.vue';
</script>
