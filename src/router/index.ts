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
import HistoryDetail from '../views/purchase/purchase-history-detail/PurchaseHistoryDetail.vue';
import WishList from '../views/user/wish-list/WishList.vue';
import ItemReg from '../views/seller/item-reg/ItemReg.vue';
import ItemInfo from '../views/purchase/item-info/ItemInfo.vue';
import Dashboard from '../views/seller/dashboard/Dashboard.vue';
import BarcodeReg from '../views/seller/barcode-reg/BarcodeReg.vue';
import BarcodeRegList from '../views/seller/barcode-reg/BarcodeRegList.vue';
import ItemManagement from '../views/seller/management/ItemManagement.vue';
import FindIdPw from '../views/login/FindIdPw.vue';
import Faq from '../views/user/faq/Faq.vue';

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
  { path: '/detail', component: HistoryDetail },
  { path: '/wishlist', component: WishList },
  { path: '/itemreg', component: ItemReg },
  { path: '/iteminfo', component: ItemInfo },
  { path: '/dashboard', component: Dashboard },
  { path: '/barcodereg', component: BarcodeReg },
  { path: '/barcodereg-list', component: BarcodeRegList },
  { path: '/itemmanage', component: ItemManagement },
  { path: '/find-idpw', component: FindIdPw },
  { path: '/faq', component: Faq},
];

//라우터생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//라우터 추출
export { router };
