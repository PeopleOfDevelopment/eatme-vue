<template>
  <Sidebar></Sidebar>
  <div v-if="selectedItem" id="main-wrapper">
    <itemInfo :itemInfo="selectedItem" @close="clearSelectedItem"></itemInfo>
  </div>
  <div v-else id="main-wrapper">
    <div class="content-section">
      <h2 class="page-title">내가 찜한 상품</h2>
      <div class="item-list">
        <Card
          :itemList="wishList"
          :item="true"
          @itemSelected="selectItem"
          :itemImgData="itemImgData"></Card>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Sidebar from '@/views/common/main/sidebar/Sidebar.vue';
import Card from '@/views/common/components/Card.vue';
import Footer from '@/views/common/main/footer/Footer.vue';
import itemInfo from '@/views/purchase/item-info/ItemInfo.vue';
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
  const result = await apiUtils.post('/api/basket/query', userData);
  wishList.value = result.data;

  if (wishList.value && wishList.value.length > 0) {
    console.log('호출됨');
    wishList.value.forEach((item) => {
      if (item && item.corpCd && item.itemCd) {
        getItemImg(item);
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

/*제품 상세 페이지 이동*/
const selectedItem = ref(null);

const clearSelectedItem = () => {
  selectedItem.value = null;
};

const selectItem = (item) => {
  selectedItem.value = item;
  scrollToTop();
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

//이미지
const itemImgData = ref([]);

async function getItemImg(item) {
  const imgData = {
    UUID: '',
    imgNm: '',
    imgLoc: '',
    corpCd: item.corpCd || '',
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
          corpCd: item.corpCd,
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
