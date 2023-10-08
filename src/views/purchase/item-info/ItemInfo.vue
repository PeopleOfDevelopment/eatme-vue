<template>
  <TopNav navType="title" subtitle="상품정보" @close="$emit('close')"></TopNav>
  <div class="item-info-box1">
    <div class="item-img1"></div>
    <div class="item-info1">
      <p class="info-text1">{{ itemInfo.name }}</p>
    </div>
    <div class="item-info2">
      <p class="info-text2">{{ itemInfo.discountRat * 100 }}%</p>
      <p class="info-text3">
        {{ itemInfo.price * (1 - itemInfo.discountRat) }}원
      </p>
    </div>
    <div class="item-info3">
      <p class="info-text4">{{ itemInfo.price }}원</p>
    </div>
    <div class="item-info4">
      <p class="info-text5">유통기한</p>
      <p class="info-text7">{{ itemInfo.expire }}</p>
    </div>
    <div class="item-info4">
      <p class="info-text5">용량</p>
      <p class="info-text6">{{ itemInfo.capacity }}</p>
    </div>
    <div class="item-info4">
      <p class="info-text5">판매자</p>
      <p>{{ itemInfo.place }}</p>
    </div>
    <div class="btn-box1">
      <Btn btntype="outline" class="btn-style1">
        <span class="material-symbols-rounded">favorite</span>
      </Btn>
      <Btn btntype="ghost" class="btn-style2">장바구니 담기</Btn>
      <Btn btntype="solid" class="btn-style2">구매하기</Btn>
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
</script>

<style scoped>
.item-info-box1 {
  width: 902px;
  margin: 0 auto;
}
.item-img1 {
  width: 100%;
  height: 800px;
  background-color: #000;
}
.item-info1 {
  display: flex;
}
.info-text1 {
  float: left;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.item-info2 {
  font-size: 28px;
  font-weight: bold;
  display: flex;
}
.info-text2 {
  float: left;
  margin-top: 0px;
  margin-bottom: 10px;
  color: var(--secondary-def);
}
.info-text3 {
  float: left;
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 20px;
}
.item-info3 {
  display: flex;
  font-size: 20px;
}
.info-text4 {
  color: var(--gray400);
  text-decoration: line-through;
  margin-top: 0px;
  margin-bottom: 10px;
}
.item-info4 {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  margin-left: 20px;
}

.info-text5 {
  margin-right: 80px;
}
.info-text6 {
  margin-left: 20px;
}
.info-text7 {
  margin-left: -14px;
}
.btn-box1 {
  display: flex;
  float: right;
  margin-bottom: 50px;
}
.btn-style1 {
  margin-left: 20px;
  padding: 18px 18px;
}
.btn-style2 {
  margin-left: 20px;
  font-size: 20px;
  padding: 18px 100px;
}
</style>
