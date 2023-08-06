<template>
  <Sidebar></Sidebar>
  <div id="main-wrapper">
    <TopNav
      navType="tabs"
      :tabList="['상품', '매장']"
      :currentTab="currentTab"></TopNav>
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

import { ref } from 'vue';

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

const pageContents = ref([
  { title: '내가 찜한 상품', list: productList },
  { title: '내가 찜한 매장', list: placeList },
]);
const currentTab = ref(0);
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
