import { createRouter, createWebHistory } from 'vue-router';

//연결할 각 컴포넌트 import
import Main from '../views/common/main/Main.vue';
import Login from '../views/login/Login.vue';
import Join from '../views/login/Join.vue';
import Basket from '../views/purchase/basket/Basket.vue';
import PurchaseHistory from '../views/purchase/purchase-history/PurchaseHistory.vue';
import SellerReg from '../views/seller/seller-reg/Seller-Reg.vue';
import Mypage from '../views/user/mypage/Mypage.vue';
import ChangeInfo from '../views/user/mypage/change-user-info/ChangeUserInfo.vue';

//라우터설계(경로랑 컴포넌트 배열로 입력)
const routes = [
  { path: '/', component: Main }, //컴포넌트값에 현재 보고싶은 화면 컴포넌트 넣으면 됩니다..
  { path: '/login', component: Login },
  { path: '/join', component: Join },
  { path: '/basket', component: Basket },
  { path: '/purchase-history', component: PurchaseHistory },
  { path: '/seller-reg', component: SellerReg },
  { path: '/mypage', component: Mypage },
  { path: '/changeinfo', component: ChangeInfo },
];

//라우터생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//라우터 추출
export { router };
