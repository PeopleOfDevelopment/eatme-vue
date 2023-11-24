<template>
  <!--판매자 페이지: <Sidebar pageType="seller"></Sidebar>
  관리자 페이지: <Sidebar pageType="admin"></Sidebar>-->
  <div class="sideBar" :class="{ seller: pageType !== 'user' }">
    <p class="eatMe" @click="goPage('home')">EAT ME</p>
    <div
      class="user"
      v-if="isLoggedIn === false && pageType === 'user'"
      onclick="location.href='login'">
      <p class="login-text">로그인</p>
    </div>
    <div
      class="user"
      v-if="isLoggedIn === true && pageType === 'user'"
      @click="handle_toggle">
      <p class="login-text">
        <span class="user-nick">{{ userData2.userNick }}</span>
        님, 어서오세요!
      </p>
    </div>
    <div v-if="pageType === 'user'" class="search">
      <span class="material-symbols-rounded">search</span>
      <input
        class="search_input"
        type="text"
        placeholder="제품 혹은 매장 검색"
        v-model="searchQuery" />
    </div>
    <div v-if="searchQuery && filteredItems.length > 0" class="search-results">
      <div style="text-align: left; padding-bottom: 10px;">
        검색결과
      </div>
      <div v-for="(item, index) in filteredItems" :key="index" class="search-result">
        {{ item.itemNm || item.corpNm }}
      </div>
    </div>
    <div v-if="pageType === 'user'" class="menu-container">
      <div class="menus">
        <p @click="goPage('home')" :class="{ clicked: clickedItem === 'home' }">
          <span class="material-symbols-rounded">home</span>
          홈
        </p>
        <p
          @click="goPage('wishlist')"
          :class="{ clicked: clickedItem === 'wishlist' }">
          <span class="material-symbols-rounded">favorite</span>
          찜한 매장
        </p>
        <p
          @click="goPage('wishitem')"
          :class="{ clicked: clickedItem === 'wishitem' }">
          <span class="material-symbols-rounded">shopping_cart</span>
          찜한 상품
        </p>
        <p
          @click="goPage('mypage')"
          :class="{ clicked: clickedItem === 'mypage' }">
          <span class="material-symbols-rounded">nature</span>
          환경보호수치
        </p>
      </div>
      <Btns
        v-if="
          isLoggedInSeller === true &&
          corp &&
          corp.toLowerCase() !== '가맹점 등록이 되지 않은 계정입니다.'
        "
        btntype="outline"
        style="margin-top: 10px"
        @click="goPage('goodmanage')">
        판매 관리
      </Btns>
    </div>
    <!--판매자 페이지-->
    <div
      class="user"
      v-if="isLoggedInSeller === true && pageType === 'seller'"
      @click="handle_toggle2">
      <p class="login-text">
        <span class="user-nick">{{ userData2.userNick }}</span>
        님, 어서오세요!
      </p>
    </div>
    <div v-if="pageType === 'seller'" class="menu-container">
      <div class="menus">
        <p
          @click="goPage('goodmanage')"
          :class="{ clicked: clickedItem === 'goodmanage' }">
          <span class="material-symbols-rounded">dashboard</span>
          상품 관리
        </p>
        <p
          @click="goPage('seller-profile')"
          :class="{ clicked: clickedItem === 'seller-profile' }">
          <span class="material-symbols-rounded">settings</span>
          정보 관리
        </p>
        <p
          @click="goPage('seller-notice')"
          :class="{ clicked: clickedItem === 'seller-notice' }">
          <span class="material-symbols-rounded">notifications_active</span>
          공지사항
        </p>
      </div>
      <Btns
        @click="goPage('barcodereg-list')"
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
    <!--관리자 페이지-->
    <div v-if="pageType === 'admin'" class="menu-container">
      <div class="menus">
        <p
          @click="goPage('admin')"
          :class="{ clicked: clickedItem === 'admin' }">
          <span class="material-symbols-rounded">dashboard</span>
          대시보드
        </p>
        <p
          @click="goPage('notice-list')"
          :class="{ clicked: clickedItem === 'notice-list' }">
          <span class="material-symbols-rounded">notifications_active</span>
          공지사항
        </p>
        <p
          @click="goPage('qna-work')"
          :class="{ clicked: clickedItem === 'qna-work' }">
          <span class="material-symbols-rounded">
            production_quantity_limits
          </span>
          고객문의
        </p>
        <p
          @click="goPage('report')"
          :class="{ clicked: clickedItem === 'report' }">
          <span class="material-symbols-rounded">report</span>
          신고내역
        </p>
        <p
          @click="goPage('payment-list')"
          :class="{ clicked: clickedItem === 'payment-list' }">
          <span class="material-symbols-rounded">payments</span>
          정산신청
        </p>
        <p
          @click="goPage('seller-notice-list')"
          :class="{ clicked: clickedItem === 'seller-notice-list' }">
          <span class="material-symbols-rounded">edit_square</span>
          판매자 공지
        </p>
        <p
          @click="goPage('seller-qna-work')"
          :class="{ clicked: clickedItem === 'seller-qna-work' }">
          <span class="material-symbols-rounded">help</span>
          판매자 문의
        </p>
      </div>
      <Btns
        @click="goPage('home')"
        btntype="ghostWhite"
        style="margin-top: 10px">
        나가기
      </Btns>
    </div>
  </div>

  <div class="black-bg" v-show="LoginModal">
    <div class="modal1">
      <p class="t1" @click="goPage('changeinfo')" style="cursor: pointer">
        마이페이지
      </p>
      <hr />
      <p class="t2" @click="Logout" style="cursor: pointer">로그아웃</p>
    </div>
  </div>

  <div class="black-bg" v-show="LoginModal2">
    <div class="modal1">
      <p class="t1" @click="goPage('seller-profile')" style="cursor: pointer">
        마이페이지
      </p>
      <hr />
      <p class="t2" @click="Logout" style="cursor: pointer">로그아웃</p>
    </div>
  </div>
</template>

<script setup>
import { router } from '@/router';
import Btns from '../../components/Btn.vue';
import { ref, onMounted, watchEffect } from 'vue';
import { ApiUtils } from '../../utils/ApiUtils';

const clickedItem = ref(window.location.pathname.substring(1) || 'home');
const LoginModal = ref(false);
const LoginModal2 = ref(false);
const userData2 = ref([]);
const corp = ref('');
const corpData = ref([]);

const handle_toggle = () => {
  LoginModal.value = !LoginModal.value;
};

const handle_toggle2 = () => {
  LoginModal2.value = !LoginModal2.value;
};

const goPage = (page) => {
  if (page === 'home') router.push('/');
  else router.push('/' + page);
  clickedItem.value = page;
};

const props = defineProps({
  pageType: {
    type: String,
    default: 'user',
  },
});

const apiUtils = new ApiUtils();

const isLoggedIn = ref(false);
const isLoggedInSeller = ref(false);
const user = userData2.value.userNick;

onMounted(async () => {
  const userData = {
    userId: sessionStorage.getItem('userId'),
    userPw: sessionStorage.getItem('userPw'),
  };

  const corpData = {
    userId: sessionStorage.getItem('userId'),
  };

  const token = sessionStorage.getItem('token');

  if (token) {
    isLoggedIn.value = true;
    isLoggedInSeller.value = true;
    try {
      const result = await apiUtils.post('/api/mypage/query', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      userData2.value = result.data;
      console.log('사용자 정보: ', userData2);
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }

    try {
      const resultCorp = await apiUtils.post('/api/login/getCorpCd', corpData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      corp.value = resultCorp;

      const testData = {
        corpCd: corp.value,
      };

      if (corp.value && corp.value !== '가맹점 등록이 되지 않은 계정입니다.') {
        const getCorpData = await apiUtils.post(
          '/api/sellerProfile/query',
          testData
        );
        corpData.value = getCorpData.data;
        console.log(corpData.value);
        sessionStorage.setItem('corpCd', testData.corpCd);
      }
      console.log(corp.value);
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }
  }
});

const Logout = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('corpCd');

  goPage('/');
  router.go(0);
};

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
}

async function getItemAround() {
  const result = await apiUtils.post('/api/main/query/item', userData);
  productList.value = result.data;
}

onMounted(() => {
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

const searchQuery = ref('');
const filteredItems = ref([]);

const filterItems = () => {
  if (!productList.value || !marketList.value) {
    return;
  }

  const filteredProducts = productList.value.filter((item) => 
    item && item.itemNm && item.itemNm.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  const filteredMarkets = marketList.value.filter((item) => 
    item && item.corpNm && item.corpNm.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  filteredItems.value = [...filteredProducts, ...filteredMarkets];
};


watchEffect(() => {
  filterItems();
})
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
  cursor: pointer;
}

.user {
  float: left;
  width: 100%;
  padding-block: 10px;
  margin-bottom: 24px;
  font-family: Pretendard;
  font-size: 16px;
  border-top: solid 1px #dde5db;
  border-bottom: solid 1px #dde5db;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}
.user-nick {
  font-weight: 700;
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
  margin-bottom: 10px;
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

.black-bg {
  width: 1670px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  margin-left: 249px;
  z-index: 999;
}

.modal1 {
  width: 12%;
  height: 8%;
  background-color: white;
  border: solid 1px #dde5db;
  border-radius: 7px;
  font-family: Pretendard;
  margin-top: 5%;
  margin-left: -20px;
}

hr {
  width: 90%;
}
.t1 {
  padding-top: 10px;
}

.search-result {
  border-bottom: 1px solid var(--ngray200);
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;
}
</style>
