<template>
  <Sidebar></Sidebar>
  <div id="main-wrapper" v-if="selectedItem">
    <ItemInfo :itemInfo="selectedItem" @close="clearSelectedItem"></ItemInfo>
  </div>
  <div id="main-wrapper" v-else-if="selectedMarket">
    <MarketInfo
      :marketInfo="selectedMarket"
      @close="clearSelectedMarket"
      @itemSelected="selectItem"></MarketInfo>
  </div>
  <div id="main-wrapper" v-else>
    <TopNav
      navType="location"
      :curAddr="userData.curAddr"
      @update:curAddr="updateCurAddr"></TopNav>
    <div id="sub-wrapper" v-if="selectedList === 'item'">
      <AroundItem
        :productList="productList"
        @itemSelected="selectItem"
        @close="clearSelectedList"></AroundItem>
    </div>
    <div id="sub-wrapper" v-else-if="selectedList === 'market'">
      <AroundMarket
        :marketList="marketList"
        @itemSelected="selectMarket"
        @close="clearSelectedList"></AroundMarket>
    </div>
    <div id="sub-wrapper" v-else>
      <Slide></Slide>
      <div class="list-container">
        <div class="list-section">
          <div class="sub-title-container">
            <span class="sub-title">내 주변 할인 매장</span>
            <Btn btntype="textThin" @click="selectList('market')">
              <span class="showmore">전체보기</span>
              <span class="material-symbols-rounded">chevron_right</span>
            </Btn>
          </div>
          <div class="item-list-wrap">
            <div class="item-list" ref="scrollBoxMarket">
              <Card
                :market="true"
                :itemList="marketList"
                @itemSelected="selectMarket"></Card>
            </div>
            <Btn
              btntype="slideNav"
              class="item-nav item-prev"
              @click="slidePrev(scrollBoxMarket)">
              <span class="material-symbols-rounded">chevron_left</span>
            </Btn>
            <Btn
              btntype="slideNav"
              class="item-nav item-next"
              @click="slideNext(scrollBoxMarket)">
              <span class="material-symbols-rounded">chevron_right</span>
            </Btn>
          </div>
        </div>
        <div class="list-section">
          <div class="sub-title-container">
            <span class="sub-title">내 주변 마감 할인</span>
            <Btn btntype="textThin" @click="selectList('item')">
              <span class="showmore">전체보기</span>
              <span class="material-symbols-rounded">chevron_right</span>
            </Btn>
          </div>
          <div class="item-list-wrap">
            <div class="item-list" ref="scrollBoxItem">
              <Card :itemList="productList" @itemSelected="selectItem"></Card>
            </div>
            <Btn
              btntype="slideNav"
              class="item-nav item-prev"
              @click="slidePrev(scrollBoxItem)">
              <span class="material-symbols-rounded">chevron_left</span>
            </Btn>
            <Btn
              btntype="slideNav"
              class="item-nav item-next"
              @click="slideNext(scrollBoxItem)">
              <span class="material-symbols-rounded">chevron_right</span>
            </Btn>
          </div>
        </div>
      </div>
      <Footer @notice="(n) => (receivedNotice = n)"></Footer>
    </div>
    <NonModal v-if="showNm" :notice="receivedNotice"></NonModal>
  </div>
</template>

<script setup>
import Sidebar from './sidebar/Sidebar.vue';
import TopNav from '../components/TopNav.vue';
import Slide from './slide/Slide.vue';
import Btn from '@/views/common/components/Btn.vue';
import Card from '../components/Card.vue';
import Footer from './footer/Footer.vue';
import NonModal from '../components/NonModal.vue';
import ItemInfo from '@/views/purchase/item-info/ItemInfo.vue';
import MarketInfo from '@/views/purchase/market-info/MarketInfo.vue';
import AroundItem from '@/views/purchase/around-item/AroundItem.vue';
import AroundMarket from '@/views/purchase/around-market/AroundMarket.vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';

import { ref, onMounted } from 'vue';

const apiUtils = new ApiUtils();

const marketList = ref([]);
const productList = ref([]);

const userData = {
  userId: '',
  userAddr: '',
  curAddr: '경기도',
};

const updateCurAddr = (newAddr) => {
  userData.curAddr = newAddr;
  getMarketAround();
  getItemAround();
};

async function getMarketAround() {
  const result = await apiUtils.post('/api/main/query/corp', userData);
  marketList.value = result.data;
}

async function getItemAround() {
  const result = await apiUtils.post('/api/main/query/item', userData);
  productList.value = result.data;
}

const receivedNotice = ref();

onMounted(() => {
  const token = sessionStorage.getItem('token');
  if (token) {
    userData.userId = sessionStorage.getItem('userId');
  }
  getMarketAround();
  getItemAround();
});

/* 이동 */
const selectedItem = ref(null);

const clearSelectedItem = () => {
  selectedItem.value = null;
};

const selectItem = (item) => {
  selectedItem.value = item;
  scrollToTop();
};

const selectedMarket = ref(null);

const clearSelectedMarket = () => {
  selectedMarket.value = null;
};

const selectMarket = (item) => {
  selectedMarket.value = item;
  scrollToTop();
};

const selectedList = ref(null);

const clearSelectedList = () => {
  selectedList.value = null;
};
const selectList = (pageName) => {
  selectedList.value = pageName;
  scrollToTop();
};

/* 리스트 스크롤 */
const scrollBoxMarket = ref(null);
const scrollBoxItem = ref(null);
const scrollStep = 309;

const slidePrev = (element) => {
  if (element) {
    element.scrollLeft -= scrollStep;
  }
};
const slideNext = (element) => {
  if (element) {
    element.scrollLeft += scrollStep;
  }
};
/*
const isAtLeft = (element) => {
  return element ? element.scrollLeft === 0 : false;
};
const isAtRight = (element) => {
  return element ? element.scrollLeft + element.clientWidth === 1505 : false;
};*/

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

/*논모달 오늘 하루 보지 않기 확인*/
let showNm = true;
const getCookie = (name) => {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
};
const todayCookie = getCookie('today');
if (todayCookie) {
  showNm = false;
} else {
  showNm = true;
}
</script>

<style scoped>
.list-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-inline: 75px;
}
.item-list-wrap {
  position: relative;
}
.item-list {
  display: flex;
  gap: 24px;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.item-list::-webkit-scrollbar {
  display: none;
}
.item-nav {
  position: absolute;
  border-radius: 50%;
  top: calc(50% - 22px);
}
.item-prev {
  left: -22px;
}
.item-next {
  right: -22px;
}
.list-container {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-block: 64px;
}
#sub-wrapper {
  display: flex;
  flex-direction: column;
}
.sub-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.sub-title {
  font-size: 28px;
  font-weight: 700;
  padding: 10px;
  color: var(--ngray800);
}
.showmore {
  font-size: 20px;
}
</style>
