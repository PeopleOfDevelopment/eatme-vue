<template>
  <Sidebar></Sidebar>
  <div v-if="selectedMarket" id="main-wrapper">
    <MarketInfo
      :marketInfo="selectedMarket"
      @close="clearSelectedMarket"></MarketInfo>
  </div>
  <div v-else id="main-wrapper">
    <div class="content-section">
      <h2 class="page-title">내가 찜한 매장</h2>
      <div class="item-list">
        <Card
          :itemList="wishList"
          :market="true"
          @itemSelected="selectMarket"
          :corpImgData="corpImgData"></Card>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Card from '../../common/components/Card.vue';
import Footer from '../../common/main/footer/Footer.vue';
import MarketInfo from '@/views/purchase/market-info/MarketInfo.vue';
import { router } from '@/router';
import axios from 'axios';

import { ref, onMounted } from 'vue';

import { ApiUtils } from '@/views/common/utils/ApiUtils';
const apiUtils = new ApiUtils();

const wishList = ref([]);

const userData = {
  userId: '',
};

async function getWishList() {
  const result = await apiUtils.post('/api/wishList/query', userData);
  wishList.value = result.data;

  if (wishList.value && wishList.value.length > 0) {
    wishList.value.forEach((item) => {
      if (item && item.corpCd) {
        getCorpImg(item);
      }
    });
  } else {
    console.log('데이터 없음');
  }
}

onMounted(async () => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    alert('로그인 후 이용할 수 있습니다.');
    router.push('/login'); //토큰이 없으면 로그인 페이지로
  } else {
    userData.userId = sessionStorage.getItem('userId');
  }
  getWishList();
});

/*매장 상세 페이지 이동*/
const selectedMarket = ref(null);

const clearSelectedMarket = () => {
  selectedMarket.value = null;
};

const selectMarket = (item) => {
  selectedMarket.value = item;
  scrollToTop();
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

//가게 이미지
const corpImgData = ref([]);

async function getCorpImg(item) {
  const imgData = {
    UUID: '',
    imgNm: '',
    imgLoc: '',
    corpCd: item.corpCd || '',
  };

  if (!imgData.corpCd) {
    item.imgSrc = require('../../../assets/img/eatme.jpg');
  }

  const reader = new FileReader();
  try {
    const result = await axios.get('/api/file/getCorpImg', {
      responseType: 'blob',
      params: {
        corpCd: item.corpCd,
      },
    });
    console.log(`getcorpimg실행`);
    reader.onload = () => {
      item.imgSrc = reader.result;
    };
    const blob = new Blob([result.data], { type: 'image/jpeg' });
    reader.readAsDataURL(blob);
  } catch (error) {
    item.imgSrc = require('../../../assets/img/eatme.jpg');
  }
}
</script>

<style scoped>
.content-section {
  padding: 64px 75px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: calc(100vh - 312px);
}
.page-title {
  color: var(--ngray800);
  font-size: 28px;
  font-weight: 700;
  padding: 10px;
  display: flex;
  margin: 0;
}
.item-list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
</style>
