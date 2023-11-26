<template>
  <Sidebar @itemSelected="handleItemSelected"></Sidebar>
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
      :curSearchAddr="userData.curAddr"
      @update:curSearchAddr="updateCurAddr"></TopNav>
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
                @itemSelected="selectMarket"
                :corpImgData="corpImgData"></Card>
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
              <Card
                :itemList="productList"
                @itemSelected="selectItem"
                :itemImgData="itemImgData"></Card>
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
import axios from 'axios';

import { ref, onMounted } from 'vue';

const apiUtils = new ApiUtils();

const marketList = ref([]);
const productList = ref([]);

const userData = {
  userId: '',
  userAddr: '',
  curAddr: '',
};

const updateCurAddr = (newAddr) => {
  userData.curAddr = newAddr;
  userData.userAddr = newAddr;
  console.log(`바뀐주소검색: ${userData.curAddr}`);
  getMarketAround();
  getItemAround();
};

async function getMarketAround() {
  const result = await apiUtils.post('/api/main/query/corp', userData);
  marketList.value = result.data;

  if (marketList.value && marketList.value.length > 0) {
    marketList.value.forEach((item) => {
      if (item && item.corpCd) {
        getCorpImg(item);
      }
    });
  } else {
    console.log('데이터 없음');
  }
}

async function getItemAround() {
  const result = await apiUtils.post('/api/main/query/item', userData);
  productList.value = result.data;

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

const receivedNotice = ref();

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

onMounted(() => {
  const token = sessionStorage.getItem('token');
  if (token) {
    userData.userId = sessionStorage.getItem('userId');
  }
  const initAddr = sessionStorage.getItem('curSearchAddr');
  if (initAddr) {
    userData.curAddr = initAddr;
    userData.userAddr = initAddr;
  } else {
    sessionStorage.setItem(
      'curAddr',
      '충남 천안시 동남구 상명대길 31 (상명대학교천안캠퍼스)'
    );
    sessionStorage.setItem('curSearchAddr', '충남 천안시 동남구 안서동');
    userData.curAddr = '충남 천안시 동남구 안서동';
    userData.userAddr = '충남 천안시 동남구 안서동';
  }

  getMarketAround();
  getItemAround();
});

/* 이동 */
const selectedItem = ref(null);

const handleItemSelected = (item) => {
  selectedItem.value = item;
}

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
