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
        <div class="item-info4">
          <p class="info-text5">남은 수량</p>
          <p>{{ itemInfo.saleAmt }}</p>
        </div>
        <div class="btn-box">
          <Btn btntype="outline" @click="toggleWish">
            <span
              class="material-symbols-rounded"
              :class="{ 'icon-fill': isInWishList }">
              favorite
            </span>
          </Btn>
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
import axios from 'axios';

const apiUtils = new ApiUtils();
const props = defineProps({
  itemInfo: {
    type: Array,
  },
});

//찜

const userData = {
  userId: '',
};

const targetItem = props.itemInfo;

const isInWishList = ref(false);

const wishData = [
  {
    userId: '',
    corpCd: targetItem.corpCd,
    itemCd: targetItem.itemCd,
    salePrc: targetItem.salePrc,
    itemExpdate: targetItem.itemExpdate,
    itemQty: targetItem.saleAmt,
    itemNm: targetItem.itemNm,
    purchaseSt: '주문전',
  },
];

const deleteData = {
  userId: '',
  corpCd: targetItem.corpCd,
  itemCd: targetItem.itemCd,
};
const wishList = ref([]);

const toggleWish = () => {
  if (isInWishList.value) {
    deleteWishData();
  } else {
    insertWishData();
  }
};

async function getWishList() {
  const result = await apiUtils.post('/api/basket/query', userData);
  wishList.value = result.data;
  isInWishList.value = wishList.value.some(
    (item) =>
      item.itemCd === targetItem.itemCd && item.corpCd === targetItem.corpCd
  );
}

async function insertWishData() {
  try {
    const result = await apiUtils.post('/api/basket/insert', wishData);
    if (result === 1) {
      console.log('찜 목록 추가 성공');
      isInWishList.value = true;
    } else {
      console.log('찜 목록 추가 실패');
    }
  } catch (error) {
    console.error('찜 목록 추가 중 오류 발생:', error);
  }
}
async function deleteWishData() {
  try {
    const result = await apiUtils.post('/api/basket/delete', deleteData);
    if (result === 0) {
      console.log('찜 목록 삭제 실패');
    } else {
      console.log('찜 목록 삭제 성공');
      isInWishList.value = false;
    }
  } catch (error) {
    console.error('찜 목록 삭제 중 오류 발생:', error);
  }
}

//이미지
const testData = {
  UUID: '',
  imgNm: '',
  imgLoc: '',
  corpCd: props.itemInfo.corpCd || '',
  itemCd: props.itemInfo.itemCd || '',
  userId: 'admin',
};

const itemImgData = ref('');

async function getItemImg() {
  if (!testData.corpCd || !testData.itemCd) {
    itemImgData.value = require('../../../assets/img/eatme.jpg');
  }

  const reader = new FileReader();
  try {
    const result = await axios.get('/api/file/getImg', {
      responseType: 'blob',
      params: {
        corpCd: props.itemInfo.corpCd,
        itemCd: props.itemInfo.itemCd,
      },
    });
    reader.onload = () => {
      itemImgData.value = reader.result;
    };
    const blob = new Blob([result.data], { type: 'image/jpeg' });
    reader.readAsDataURL(blob);
    // itemImgData.value = result;
  } catch (error) {
    console.error('이미지를 불러올 수 없습니다.', error);
    itemImgData.value = require('../../../assets/img/eatme.jpg');
  }
}
onMounted(() => {
  userData.userId = sessionStorage.getItem('userId');
  wishData[0].userId = sessionStorage.getItem('userId');
  deleteData.userId = sessionStorage.getItem('userId');
  getWishList();
  getItemImg();
});

const itemInfo = props.itemInfo;
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
  position: relative;
}
.item-img1 img {
  object-fit: cover;
  width: 100%;
  height: 100%;
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
.btn-box {
  display: flex;
  margin: 10px;
}
</style>
