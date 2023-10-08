<template>
  <Sidebar></Sidebar>
  <div id="main-wrapper" v-if="selectedItem">
    <ItemInfo :itemInfo="selectedItem" @close="clearSelectedItem"></ItemInfo>
  </div>
  <div id="main-wrapper" v-else>
    <TopNav navType="location"></TopNav>
    <div id="sub-wrapper" v-if="selectedList === 'item'">
      <AroundItem
        :productList="productList"
        @itemSelected="selectItem"
        @close="clearSelectedList"></AroundItem>
    </div>
    <div id="sub-wrapper" v-else-if="selectedList === 'place'">
      <AroundMarket
        :placeList="placeList"
        @close="clearSelectedList"></AroundMarket>
    </div>
    <div id="sub-wrapper" v-else>
      <Slide></Slide>
      <div class="list-container">
        <div class="list-section">
          <div class="sub-title-container">
            <span class="sub-title">내 주변 할인 매장</span>
            <Btn btntype="textThin" @click="selectList('place')">
              <span class="showmore">전체보기</span>
              <span class="material-symbols-rounded">chevron_right</span>
            </Btn>
          </div>
          <div class="item-list-wrap">
            <div class="item-list" ref="scrollBoxPlace">
              <Card :place="true" :itemList="placeList"></Card>
            </div>
            <Btn
              btntype="slideNav"
              class="item-nav item-prev"
              @click="slidePrev(scrollBoxPlace)">
              <span class="material-symbols-rounded">chevron_left</span>
            </Btn>
            <Btn
              btntype="slideNav"
              class="item-nav item-next"
              @click="slideNext(scrollBoxPlace)">
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
      <Footer></Footer>
    </div>
    <NonModal v-if="showNm"></NonModal>
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
import AroundItem from '@/views/purchase/around-item/AroundItem.vue';
import AroundMarket from '@/views/purchase/around-market/AroundMarket.vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';

import { ref, onMounted } from 'vue';
const apiUtils = new ApiUtils();

const placeList = ref([
  {
    name: 'GS25 영통한아름점',
    distance: '500',
    score: '4.3',
  },
  {
    name: 'GS25 영통한아름점',
    distance: '500',
    score: '4.3',
  },
  {
    name: 'GS25 영통한아름점',
    distance: '500',
    score: '4.3',
  },
  {
    name: 'GS25 영통한아름점',
    distance: '500',
    score: '4.3',
  },
  {
    name: 'GS25 영통한아름점',
    distance: '500',
    score: '4.3',
  },
  {
    name: 'GS25 영통한아름점',
    distance: '500',
    score: '4.3',
  },
]);
const productList = ref([
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRat: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
    expire: '2023-06-12',
    capacity: '55g x5',
  },
  {
    name: '동원참치 튜나페 고소마요 129g x 10개',
    price: 44000,
    discountRat: 0.5,
    place: 'GS25 영통한아름점',
    placeTime: 10,
    expire: '2023-06-12',
    capacity: '129g x 10',
  },
  {
    name: '네슬레 킷캣 청키 프룻비스킷 38g x 24개',
    price: 33600,
    discountRat: 0.5,
    place: 'GS25 영통한아름점',
    placeTime: 10,
    expire: '2023-10-26',
    capacity: '38g x 24',
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRat: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
    expire: '2023-06-12',
    capacity: '55g x5',
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRat: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
    expire: '2023-06-12',
    capacity: '55g x5',
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRat: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
    expire: '2023-06-12',
    capacity: '55g x5',
  },
]);

/*
const productList = ref([]);

const testData = {
  userId: 'testID2',
};
async function getItemAround() {
  const result = await apiUtils.post('/api/query/item', testData);
  productList.value = result.data;
  console.log(productList.value);
}
onMounted(() => {
  getItemAround();
});
*/

/* 이동 */
const selectedItem = ref(null);

const clearSelectedItem = () => {
  selectedItem.value = null;
};

const selectItem = (item) => {
  selectedItem.value = item;
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
const scrollBoxPlace = ref(null);
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
