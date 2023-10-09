<template>
  <TopNav navType="title" subtitle="매장정보" @close="$emit('close')"></TopNav>
  <div class="market-info-wrap">
    <div class="market-img"></div>
    <div class="market-text-wrap">
      <div class="market-name">{{ marketInfo.corpNm }}</div>
      <div class="market-table">
        <div class="market-table-tr">
          <div class="table-label">주소</div>
          <div class="table-text">{{ marketInfo.corpAddr }}</div>
        </div>
      </div>
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
  color: var(--ngray800);
}
.market-img {
  width: 50%;
  aspect-ratio: 1 / 1;
  background-color: var(--gray100);
}
.market-text-wrap {
  flex: 1 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.market-name {
  font-size: 28px;
  font-weight: 700;
}
.market-table {
  color: var(--ngray600);
}
.market-table-tr {
  display: flex;
  gap: 16px;
  font-size: 20px;
}
.table-label {
  min-width: 60px;
}
</style>
