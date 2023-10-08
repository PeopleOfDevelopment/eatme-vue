<template>
  <div class="sub-title">
    <span class="material-symbols-rounded prev-btn" @click="$emit('close')">
      chevron_left
    </span>
    내 주변 할인 매장
  </div>
  <div class="item-list">
    <Card :itemList="placeList" :place="true"></Card>
  </div>
  <Footer></Footer>
</template>
<script setup>
import Card from '@/views/common/components/Card.vue';
import Footer from '@/views/common/main/footer/Footer.vue';
const props = defineProps({
  placeList: {
    type: Array,
  },
});
</script>

<style scoped>
.sub-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--ngray700);
  padding: 6px 75px;
  display: flex;
  margin: 0;
  align-items: center;
  position: sticky;
  top: 65px;
  background-color: white;
}
.sub-title .material-symbols-rounded {
  cursor: pointer;
  padding: 8px;
}
.item-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-inline: 75px;
  padding-bottom: 60px;
  flex: 1;
  align-content: flex-start;
}
</style>
