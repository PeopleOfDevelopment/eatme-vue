<template>
  <Sidebar></Sidebar>
  <div id="main-wrapper">
    <TopNav navType="location"></TopNav>
    <div id="sub-wrapper">
      <Slide></Slide>
      <div class="list-container">
        <div class="list-section">
          <SubTitle title="내 주변 할인 매장"></SubTitle>
          <div class="itemList-list">
            <Card :place="true" :itemList="placeList"></Card>
          </div>
        </div>
        <div class="list-section">
          <SubTitle></SubTitle>
          <div class="itemList-list">
            <Card :itemList="productList"></Card>
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
import SubTitle from '../components/SubTitle.vue';
import Card from '../components/Card.vue';
import Footer from './footer/Footer.vue';
import NonModal from '../components/NonModal.vue';

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

import { ref } from 'vue';

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
]);

const productList = ref([
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRate: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRate: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRate: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRate: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    discountRate: 0.25,
    place: 'GS25 영통한아름점',
    placeTime: 10,
  },
]);
</script>

<style scoped>
.list-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-inline: 75px;
}
.itemList-list {
  display: flex;
  gap: 24px;
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
</style>
