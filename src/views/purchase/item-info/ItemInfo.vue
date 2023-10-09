<template>
  <TopNav navType="title" subtitle="상품정보" @close="$emit('close')"></TopNav>
  <div class="item-info-box1">
    <div class="item-img1"></div>
    <div class="item-text-wrap">
      <div class="item-info1">
        <p class="info-text1">{{ itemInfo.itemNm }}</p>
      </div>
      <div class="item-info2">
        <p class="info-text2">{{ itemInfo.discountRat }}%</p>
        <p class="info-text3">
          {{ (itemInfo.itemPrc * (100 - itemInfo.discountRat)) / 100 }}원
        </p>
      </div>
      <div class="item-info3">
        <p class="info-text4">{{ itemInfo.itemPrc }}원</p>
      </div>
      <div class="item-info-container">
        <div class="item-info4">
          <p class="info-text5">유통기한</p>
          <p class="info-text7">{{ itemInfo.itemExpdate }}</p>
        </div>
        <div class="item-info4">
          <p class="info-text5">용량</p>
          <p class="info-text6">{{ itemInfo.capacity }}</p>
        </div>
        <div class="item-info4">
          <p class="info-text5">판매자</p>
          <p>{{ itemInfo.corpNm }}</p>
        </div>
      </div>
      <div class="btn-box1">
        <Btn btntype="outline" class="btn-style1">
          <span class="material-symbols-rounded">favorite</span>
        </Btn>
        <Btn btntype="ghost" class="btn-style2">장바구니 담기</Btn>
        <Btn btntype="solid" class="btn-style2" @click="goPage('detail')">
          구매하기
        </Btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from '../../common/components/Btn.vue';
import TopNav from '@/views/common/components/TopNav.vue';

const props = defineProps({
  itemInfo: {
    type: Array,
  },
});

import { router } from '@/router';

const goPage = (page) => {
  router.push('/' + page);
};
</script>

<style scoped>
.item-info-box1 {
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 32px 75px;
}
.item-img1 {
  width: 50%;
  aspect-ratio: 1 / 1;
  background-color: var(--gray100);
}
.item-text-wrap {
  flex: 1 0 0;
  color: var(--ngray800);
  font-weight: 500;
}
.item-info-container {
  color: var(--ngray600);
  font-size: 20px;
  text-align: left;
  margin-top: 30px;
}
.item-info1 {
  display: flex;
}
.info-text1 {
  float: left;
  font-size: 24px;
}
.item-info2 {
  font-size: 28px;
  font-weight: bold;
  display: flex;
  gap: 12px;
  padding-block: 4px;
}
.info-text2 {
  float: left;
  color: var(--secondary-def);
}
.info-text3 {
  float: left;
}
.item-info3 {
  display: flex;
  font-size: 20px;
}
.info-text4 {
  color: var(--gray400);
  text-decoration: line-through;
}
.item-info4 {
  display: flex;
  gap: 16px;
  padding: 10px;
}
.info-text5 {
  min-width: 100px;
}

.btn-box1 {
  display: flex;
  gap: 16px;
  margin-top: 80px;
}
.btn-style1 {
  padding: 16px;
}
.btn-style2 {
  font-size: 20px;
  flex: 1 0 0;
  padding: 20px 12px;
}
</style>
