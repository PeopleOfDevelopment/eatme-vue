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
          @itemSelected="selectMarket"></Card>
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

import { ref, onMounted } from 'vue';

import { ApiUtils } from '@/views/common/utils/ApiUtils';
const apiUtils = new ApiUtils();

const wishList = ref([]);

const testData = {
  userId: 'admin',
};

async function getWishList() {
  const result = await apiUtils.post('/api/wishList/query', testData);
  wishList.value = result.data;
}

onMounted(() => {
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
