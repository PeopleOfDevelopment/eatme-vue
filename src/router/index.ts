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
import goodManagement from '../views/seller/management/goodManagement.vue';
import Payment from '../views/seller/payment/Payment.vue';
import SellerProfile from '../views/seller/seller-profile/SellerProfile.vue';
import SellerNotice from '../views/seller/seller-notice/SellerNotice.vue';
import FindIdPw from '../views/login/FindIdPw.vue';
import Faq from '../views/user/faq/Faq.vue';
import Admin from '../views/admin/admin/Admin.vue';
import QnaWork from '../views/admin/admin/qna-work/QnaWork.vue';
import Report from '../views/admin/admin/report/Report.vue';
import NoticeList from '../views/admin/admin/notice-list/NoticeList.vue';
import PaymentList from '../views/admin/admin/payment-list/PaymentList.vue';
import SellerNoticeList from '../views/admin/admin/seller-notice-list/SellerNoticeList.vue';
import SellerQnaWork from '../views/admin/admin/seller-qna-work/SellerQnaWork.vue';
import Qna from '../views/user/qna/QnaReg.vue';
import Ecostatus from '../views/user/eco-status/EcoStatus.vue';

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
  { path: '/goodmanage', component: goodManagement },
  { path: '/payment', component: Payment },
  { path: '/seller-profile', component: SellerProfile },
  { path: '/seller-notice', component: SellerNotice },
  { path: '/find-idpw', component: FindIdPw },
  { path: '/faq', component: Faq },
  { path: '/admin', component: Admin },
  { path: '/qna-work', component: QnaWork },
  { path: '/report', component: Report },
  { path: '/notice-list', component: NoticeList },
  { path: '/payment-list', component: PaymentList },
  { path: '/seller-notice-list', component: SellerNoticeList },
  { path: '/seller-qna-work', component: SellerQnaWork },
  { path: '/qna', component: Qna },
  { path: '/ecostatus', component: Ecostatus },
];

//라우터생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//라우터 추출
export { router };
