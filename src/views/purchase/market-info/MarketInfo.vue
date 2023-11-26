<template>
  <TopNav navType="title" subtitle="매장정보" @close="$emit('close')"></TopNav>
  <div class="market-info-wrap">
    <div class="market-detail-wrap">
      <div class="market-img">
        <img :src="corpImgData" />
      </div>
      <div class="market-text-wrap">
        <div class="market-name">{{ marketInfoDetail.corpNm }}</div>
        <div class="market-table">
          <div class="market-table-tr">
            <div class="table-label">소개</div>
            <div class="table-text">{{ marketInfoDetail.corpDesc }}</div>
          </div>
          <div class="market-table-tr">
            <div class="table-label">주소</div>
            <div class="table-text">{{ marketInfoDetail.corpAddr }}</div>
          </div>
          <div class="market-table-tr">
            <div class="table-label">영업시간</div>
            <div class="table-text">{{ marketInfoDetail.openTime }}</div>
          </div>
          <div class="market-table-tr">
            <div class="table-label">판매자</div>
            <div class="table-text">{{ marketInfoDetail.ceoNm }}</div>
          </div>
          <div class="market-table-tr">
            <div class="table-label">연락처</div>
            <div class="table-text">{{ marketInfoDetail.corpPhoneNumber }}</div>
          </div>
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
    <div class="market-goods-wrap">
      <h2 class="market-goods-title">판매 중인 할인 상품</h2>
      <div class="item-list">
        <Card
          :itemList="productList"
          @itemSelected="$emit('itemSelected', $event)"
          :itemImgData="itemImgData"></Card>
      </div>
    </div>
  </div>
</template>
<script setup>
import Btn from '../../common/components/Btn.vue';
import TopNav from '@/views/common/components/TopNav.vue';
import Card from '@/views/common/components/Card.vue';
import axios from 'axios';
const props = defineProps({
  marketInfo: {
    type: Array,
  },
});

import { ApiUtils } from '@/views/common/utils/ApiUtils';
import { ref, onMounted } from 'vue';

const apiUtils = new ApiUtils();

const targetCorp = props.marketInfo.corpCd;

const marketInfoDetail = ref([]);

const corpData = {
  corpCd: targetCorp,
};

async function getMarketInfoDetail() {
  const result = await apiUtils.post('/api/marketInfo/query', corpData);
  marketInfoDetail.value = result.data;
}

const productList = ref([]);

async function getItem() {
  const result = await apiUtils.post('/api/goodsReg/query', corpData);
  const currentDate = new Date();

  productList.value = result.data.filter(item => {
    return new Date(item.itemExpdate) > currentDate;
  });

  if (productList.value && productList.value.length > 0) {
    console.log('호출됨');
    productList.value.forEach((item) => {
      if (item && item.corpCd && item.itemCd) {
        getItemImg(item);
      }
    });
  } else {
    console.log('데이터 없음');
  }
  
}

/* 찜 */

const isInWishList = ref(false);

const wishData = {
  userId: '',
  corpCd: targetCorp,
};

const wishList = ref([]);

const userData = {
  userId: '',
};

async function getWishList() {
  const result = await apiUtils.post('/api/wishList/query', userData);
  wishList.value = result.data;
  isInWishList.value = wishList.value.some(
    (item) => item.corpCd === targetCorp
  );
}

const toggleWish = () => {
  if (isInWishList.value) {
    deleteWishData();
  } else {
    insertWishData();
  }
};

async function insertWishData() {
  try {
    const result = await apiUtils.post('/api/wishList/insert', wishData);
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
    const result = await apiUtils.post('/api/wishList/delete', wishData);
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
const imgData = {
  UUID: '',
  imgNm: '',
  imgLoc: '',
  corpCd: targetCorp || '',
};

const corpImgData = ref('');

async function getCorpImg() {
  if (!imgData.corpCd) {
    corpImgData.value = require('../../../assets/img/eatme.jpg');
  }

  const reader = new FileReader();
  try {
    const result = await axios.get('/api/file/getCorpImg', {
      responseType: 'blob',
      params: {
        corpCd: targetCorp,
      },
    });
    reader.onload = () => {
      corpImgData.value = reader.result;
    };
    const blob = new Blob([result.data], { type: 'image/jpeg' });
    reader.readAsDataURL(blob);
  } catch (error) {
    console.error('이미지를 불러올 수 없습니다.', error);
    corpImgData.value = require('../../../assets/img/eatme.jpg');
  }
}

//이미지
const itemImgData = ref([]);

async function getItemImg(item) {
  const imgData = {
    UUID: '',
    imgNm: '',
    imgLoc: '',
    corpCd: targetCorp || '',
    itemCd: item.itemCd || '',
    userId: 'admin',
  };

  if (!imgData.corpCd || !imgData.itemCd) {
    item.imgSrc = require('../../../assets/img/eatme.jpg');
  } else {
    try {
      const result = await axios.get('/api/file/getImg', {
        responseType: 'blob',
        params: {
          corpCd: targetCorp,
          itemCd: item.itemCd,
        },
      });
      const reader = new FileReader();
      reader.onload = () => {
        item.imgSrc = reader.result;
      };
      const blob = new Blob([result.data], { type: 'image/jpeg' });
      reader.readAsDataURL(blob);
      // itemImgData.value = result;
    } catch (error) {
      console.error('이미지를 불러올 수 없습니다.', error);
      item.imgSrc = require('../../../assets/img/eatme.jpg');
    }
  }
}

onMounted(() => {
  const token = sessionStorage.getItem('token');
  if (token) {
    userData.userId = sessionStorage.getItem('userId');
    wishData.userId = sessionStorage.getItem('userId');
  }
  getMarketInfoDetail();
  getCorpImg();
  getWishList();
  getItem();
});
</script>

<style scoped>
.market-info-wrap {
  padding: 32px 75px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.market-detail-wrap {
  display: flex;
  flex-direction: row;
  gap: 32px;
  color: var(--ngray800);
}
.market-img {
  width: 50%;
  aspect-ratio: 4 / 3;
  background-color: var(--gray100);
}
.market-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
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
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
}
.market-table-tr {
  display: flex;
  gap: 16px;
  font-size: 20px;
}
.table-label {
  min-width: 80px;
}
.btn-box {
  display: flex;
}
.market-goods-wrap {
  margin-bottom: 60px;
}
.market-goods-title {
  text-align: left;
  color: var(--ngray800);
  padding-inline: 10px;
}
.item-list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
</style>
