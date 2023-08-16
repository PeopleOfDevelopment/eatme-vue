<template>
  <!--판매자 페이지: <Sidebar isSeller="true"></Sidebar>-->
  <div class="sideBar" :class="{ seller: isSeller }">
    <p class="eatMe">EAT ME</p>
    <div class="user">
      <div class="circle1">
        <svg
          style="margin-top: 20%"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 8C6.9 8 5.95834 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95834 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V13.2C1.69779e-06 12.6333 0.146002 12.1123 0.438002 11.637C0.730002 11.1617 1.11733 10.7993 1.6 10.55C2.63333 10.0333 3.68334 9.64567 4.75 9.387C5.81667 9.12833 6.9 8.99933 8 9C9.1 9 10.1833 9.12933 11.25 9.388C12.3167 9.64667 13.3667 10.034 14.4 10.55C14.8833 10.8 15.271 11.1627 15.563 11.638C15.855 12.1133 16.0007 12.634 16 13.2V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2Z"
            fill="#8B938A" />
        </svg>
      </div>
      <p style="float: left; margin-left: 10px" onclick="location.href='login'">
        로그인
      </p>
    </div>
    <div v-if="!isSeller" class="search">
      <span class="material-symbols-rounded">search</span>
      <input
        class="search_input"
        type="text"
        placeholder="제품 혹은 매장 검색" />
    </div>
    <div v-if="!isSeller" class="menu-container">
      <div class="menus">
        <p @click="goPage('home')" :class="{ clicked: clickedItem === 'home' }">
          <span class="material-symbols-rounded">home</span>
          홈
        </p>
        <p
          @click="goPage('wishlist')"
          :class="{ clicked: clickedItem === 'wishlist' }">
          <span class="material-symbols-rounded">favorite</span>
          찜목록
        </p>
        <p
          @click="goPage('purchase-history')"
          :class="{ clicked: clickedItem === 'purchase-history' }">
          <span class="material-symbols-rounded">list_alt</span>
          구매내역
        </p>
      </div>
      <Btns @click="goPage('basket')" btntype="ghost" style="margin-top: 10px">
        <span class="material-symbols-rounded">shopping_cart</span>
        장바구니
      </Btns>
      <Btns
        btntype="outline"
        style="margin-top: 10px"
        @click="goPage('dashboard')">
        판매 관리
      </Btns>
    </div>
    <!--판매자 페이지: 부모 파일에 isSeller="true" 추가-->
    <div v-else class="menu-container">
      <div class="menus">
        <p
          @click="goPage('dashboard')"
          :class="{ clicked: clickedItem === 'dashboard' }">
          <span class="material-symbols-rounded">dashboard</span>
          대시보드
        </p>
        <p
          @click="goPage('wishlist')"
          :class="{ clicked: clickedItem === 'wishlist' }">
          <span class="material-symbols-rounded">shopping_cart</span>
          상품관리
        </p>
        <p
          @click="goPage('purchase-history')"
          :class="{ clicked: clickedItem === 'purchase-history' }">
          <span class="material-symbols-rounded">insert_chart</span>
          통계
        </p>
        <p
          @click="goPage('purchase-history')"
          :class="{ clicked: clickedItem === 'purchase-history' }">
          <span class="material-symbols-rounded">payments</span>
          정산
        </p>
        <p
          @click="goPage('purchase-history')"
          :class="{ clicked: clickedItem === 'purchase-history' }">
          <span class="material-symbols-rounded">settings</span>
          정보 관리
        </p>
        <p
          @click="goPage('purchase-history')"
          :class="{ clicked: clickedItem === 'purchase-history' }">
          <span class="material-symbols-rounded">notifications_active</span>
          공지사항
        </p>
      </div>
      <Btns
        @click="goPage('barcodereg')"
        btntype="ghostDark"
        style="margin-top: 10px">
        <span class="material-symbols-rounded">barcode_scanner</span>
        제품 등록
      </Btns>
      <Btns
        @click="goPage('home')"
        btntype="ghostWhite"
        style="margin-top: 10px">
        나가기
      </Btns>
    </div>
  </div>
</template>

<script setup>
import { router } from '@/router';
import Btns from '../../components/Btn.vue';
import { ref } from 'vue';

const clickedItem = ref(window.location.pathname.substring(1) || 'home');

const goPage = (page) => {
  if (page === 'home') router.push('/');
  else router.push('/' + page);
  clickedItem.value = page;
};

const props = defineProps({
  isSeller: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.sideBar {
  width: 200px;
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  background-color: white;
  border-right-style: solid;
  border-right-color: #dde5db;
  border-right-width: 1px;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 999;
  color: #717971;
}

.eatMe {
  font-family: Pretendard;
  font-weight: bold;
  font-size: 28px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: #00a664;
  text-align: left;
}

.user {
  float: left;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 24px;
  font-family: Pretendard;
  font-size: 16px;
  border-top: solid 1px #dde5db;
  border-bottom: solid 1px #dde5db;
}

.circle1 {
  float: left;
  width: 30px;
  height: 30px;
  border-radius: 22px;
  margin-top: 10px;
  background: #c1c9bf;
}

.search {
  border-radius: 4px;
  border: #ebf3e9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
  background-color: #ebf3e9;
  padding: 8px;
  gap: 4px;
  color: var(--ngray600);
}

.search_input {
  background-color: #ebf3e9;
  font-family: Pretendard;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  width: 90%;
  outline: none;
}

.menus {
  font-family: Pretendard;
  margin-top: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.menus svg {
  padding-right: 8px;
}
.menus p {
  text-align: left;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  margin: 0;
  padding-block: 8px;
  cursor: pointer;
}
.clicked {
  color: var(--primary-def);
}
.clicked .material-symbols-rounded {
  font-variation-settings: 'FILL' 1;
}
.ghost-button,
.ghost-dark-button {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

/* 판매자 페이지 */
.seller {
  background-color: var(--ngray700);
  color: var(--ngray100);
  & .eatMe {
    color: var(--ngray100);
  }
  & .clicked {
    color: var(--primary-l3);
  }
}
@media screen and (max-width: 768px) {
  .sideBar {
    display: none;
  }
}
</style>
