<template>
  <TopNav navType="title" subtitle="매장정보" @close="$emit('close')"></TopNav>
  <div class="market-info-wrap">
    <div class="market-img"></div>
    <div class="market-text-wrap">
      <div class="market-name">{{ marketInfo.name }}</div>
    </div>
  </div>
</template>
<script setup>
import Btn from '../../common/components/Btn.vue';
import TopNav from '@/views/common/components/TopNav.vue';
const props = defineProps({
  marketInfo: {
    type: Array,
  },
});
</script>

<style scoped>
.market-info-wrap {
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 32px 75px;
}
.market-img {
  width: 50%;
  aspect-ratio: 1 / 1;
  background-color: var(--gray100);
}
.market-text-wrap {
  flex: 1 0 0;
  text-align: left;
}
.market-name {
  font-size: 28px;
  font-weight: 700;
}
</style>
