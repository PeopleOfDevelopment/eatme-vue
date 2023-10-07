<template>
  <div class="sub-title">
    <span class="material-symbols-rounded prev-btn" @click="$emit('close')">
      chevron_left
    </span>
    내 주변 할인 제품
  </div>
  <div class="item-list">
    <Card
      :itemList="productList"
      @itemSelected="$emit('itemSelected', $event)"></Card>
  </div>
  <Footer></Footer>
</template>
<script setup>
import Card from '@/views/common/components/Card.vue';
import Footer from '@/views/common/main/footer/Footer.vue';
const props = defineProps({
  productList: {
    type: Array,
  },
});
</script>

<style scoped>
.sub-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--ngray800);
  padding: 20px 75px;
  display: flex;
  margin: 0;
  align-items: center;
}
.sub-title .material-symbols-rounded {
  font-size: 32px;
  cursor: pointer;
}
.item-list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding-inline: 75px;
}
</style>
