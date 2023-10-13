<template>
  <Sidebar></Sidebar>
  <div id="main-wrapper">
    <TopNav
      navType="tabs"
      :tabList="['상품', '매장']"
      :currentTab="currentTab"
      :changeTab="changeTab"></TopNav>
    <div id="sub-wrapper">
      <div class="content-section">
        <h2 class="page-title">{{ pageContents[currentTab].title }}</h2>
        <div class="item-list">
          <Card
            :itemList="pageContents[currentTab].list"
            :place="currentTab === 1"></Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import TopNav from '../../common/components/TopNav.vue';
import Card from '../../common/components/Card.vue';
import Footer from '../../common/main/footer/Footer.vue';

import { ref, onMounted } from 'vue';

import { ApiUtils } from '@/views/common/utils/ApiUtils';
const apiUtils = new ApiUtils();

const wishList = ref([]);
const productList = ref([]);
const placeList = ref([]);

const testData = {
  userId: 'admin',
  corpCd: '테스트가맹점코드',
};

async function getWishList() {
  const result = await apiUtils.post('/api/wishList/query', testData);
  wishList.value = result.data;
}

onMounted(() => {
  getWishList();
});

const pageContents = ref([
  { title: '내가 찜한 상품', list: productList },
  { title: '내가 찜한 매장', list: placeList },
]);

// 탭 버튼 관련
const currentTab = ref(0);

const changeTab = (index) => {
  currentTab.value = index;
};
</script>

<style scoped>
.content-section {
  padding: 64px 75px;
  display: flex;
  flex-direction: column;
  gap: 32px;
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
