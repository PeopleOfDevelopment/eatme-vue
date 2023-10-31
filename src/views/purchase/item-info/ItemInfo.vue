<template>
  <TopNav navType="title" subtitle="상품정보" @close="$emit('close')"></TopNav>
  <div class="item-info-box1">
    <div class="item-img1">
      <!-- 문제 여기 -->
      <img :src="itemImgData" />
    </div>
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
          <p class="info-text5">판매자</p>
          <p>{{ itemInfo.corpNm }}</p>
        </div>
      </div>
      <div class="sale-wrap">
        <div class="total-amt">
          <p>남은 수량: {{ itemInfo.saleAmt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from '../../common/components/Btn.vue';
import TopNav from '@/views/common/components/TopNav.vue';
import { ref, onMounted } from 'vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';

const apiUtils = new ApiUtils();
const props = defineProps({
  itemInfo: {
    type: Array,
  },
});

//이미지
const testData = {
  UUID: '',
  imgNm: '',
  imgLoc: '',
  corpCd: '테스트가맹점코드',
  itemCd: '41',
  userId: 'admin',
};
const itemImgData = ref('');

async function getItemImg() {
  const result = await apiUtils.post('/api/file/getImg', testData);
  itemImgData.value = result;
}
onMounted(() => {
  getItemImg();
});

const selectAmt = ref(0);

const itemInfo = props.itemInfo;

const amtDecrease = () => {
  if (selectAmt.value > 0) selectAmt.value -= 1;
};
const amtIncrease = () => {
  if (selectAmt.value < itemInfo.saleAmt) selectAmt.value += 1;
  else alert(`구매할 수 있는 최대 수량은 ${itemInfo.saleAmt}개 입니다.`);
};

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
  overflow: hidden;
}
.item-img1 img {
  width: 100%;
  height: auto;
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
.sale-wrap {
  margin-top: 60px;
}
.btn-box1 {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}
.btn-style2 {
  font-size: 20px;
  flex: 1 0 0;
  padding: 20px 12px;
}
.item-amt-wrap {
  display: flex;
  gap: 12px;
  align-items: flex-end;
  font-size: 18px;
  color: var(--ngray400);
}
.item-amt-box {
  width: 140px;
  display: flex;
  border: 1px solid var(--ngray200);
  border-radius: 4px;
}
.item-amt {
  flex: 1 0 0;
  border: none;
  text-align: center;
  width: 24px;
  outline: none;
  font-size: 18px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
