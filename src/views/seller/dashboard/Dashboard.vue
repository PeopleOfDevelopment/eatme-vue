<template>
  <Sidebar pageType="seller"></Sidebar>
  <div id="main-wrapper">
    <div class="notif-wrapper">
      <Btn btntype="solid">
        <span class="material-symbols-rounded icon-fill">
          notifications_active
        </span>
      </Btn>
      <span class="notif-title">
        서비스 점검 안내 (2023년 5월 26일 새벽 23시 50분 ~ 00시 5분)
      </span>
      <span class="notif-date">2023.05.25</span>
    </div>
    <div class="dash-wrapper">
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">픽업예정</span>
            <span class="dash-count">2</span>
          </div>
          <div class="dash-contents-container">
            <div v-for="item in pickupList" class="cs-tr">
              <div class="cs-img"></div>
              <div class="cs-info-container">
                <div class="cs-title">
                  {{ item.name }} {{ item.quantity }}개
                </div>
                <div class="cs-detail-wrap">
                  <div class="cs-detail">
                    <div class="detail-label">구매자</div>
                    <div class="detail-text">{{ item.buyer }}</div>
                  </div>
                  <div class="cs-detail">
                    <div class="detail-label">결제일시</div>
                    <div class="detail-text">{{ item.paymentTime }}</div>
                  </div>
                </div>
              </div>
              <div class="cs-condition">{{ item.pickupTime }}</div>
            </div>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">배송요청</span>
            <span class="dash-count">3</span>
          </div>
          <div class="dash-contents-container">
            <div v-for="item in deliveryList" class="cs-tr">
              <div class="cs-img"></div>
              <div class="cs-info-container">
                <div class="cs-title">
                  {{ item.name }} {{ item.quantity }}개
                </div>
                <div class="cs-detail-wrap">
                  <div class="cs-detail">
                    <div class="detail-label">구매자</div>
                    <div class="detail-text">{{ item.buyer }}</div>
                  </div>
                  <div class="cs-detail">
                    <div class="detail-label">결제일시</div>
                    <div class="detail-text">{{ item.paymentTime }}</div>
                  </div>
                </div>
              </div>
              <div class="cs-condition">{{ item.condition }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">매출액</span>
          </div>
          <div class="dash-contents-container">
            <div class="stat-info-wrapper">
              <div class="stat-info">
                <div class="stat-date">오늘 현재까지</div>
                <div class="stat-num">12,000 원</div>
              </div>
              <div class="stat-info">
                <div class="stat-date">지난 7일</div>
                <div class="stat-num">84,000 원</div>
              </div>
              <div class="stat-info">
                <div class="stat-date">이번 달</div>
                <div class="stat-num">255,500 원</div>
              </div>
            </div>
            <div class="stat-data"></div>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">문의</span>
            <span class="dash-count">3</span>
          </div>
          <div class="dash-contents-container">
            <div v-for="item in contactList" class="cs-tr">
              <div class="cs-info-container">
                <div class="cs-title">
                  {{ item.title }}
                </div>
                <div class="cs-detail-wrap">
                  <div class="cs-detail">
                    <div class="detail-label">작성자</div>
                    <div class="detail-text">{{ item.customer }}</div>
                  </div>
                  <div class="cs-detail">
                    <div class="detail-label">작성일</div>
                    <div class="detail-text">{{ item.postTime }}</div>
                  </div>
                </div>
              </div>
              <div class="cs-condition">{{ item.condition }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">할인품목 추천</span>
          </div>
          <div class="dash-contents-container table-card">
            <div v-for="(item, index) in recommendList" class="cs-tr">
              <div class="table-number">{{ index + 1 }}</div>
              <div class="cs-img"></div>
              <div class="cs-info-container">
                <div class="cs-title">
                  {{ item.name }}
                </div>
                <div class="cs-detail-wrap">
                  <div class="cs-detail">
                    <div class="detail-label">원가</div>
                    <div class="detail-text">{{ item.price }} 원</div>
                  </div>
                </div>
              </div>
              <div class="cs-td discount-rate">
                {{ item.recommendDiscount * 100 }}%
              </div>
              <div class="cs-td total-price">
                {{ item.price * (1 - item.recommendDiscount) }} 원
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">많이 판매된 제품</span>
          </div>
          <div class="dash-contents-container table-card">
            <div v-for="(item, index) in bestList" class="cs-tr">
              <div class="table-number">{{ index + 1 }}</div>
              <div class="cs-img"></div>
              <div class="cs-info-container">
                <div class="cs-title">
                  {{ item.name }}
                </div>
                <div class="cs-detail-wrap">
                  <div class="cs-detail">
                    <div class="detail-label">원가</div>
                    <div class="detail-text">{{ item.price }} 원</div>
                  </div>
                  <div class="cs-detail">
                    <div class="detail-label">평균할인</div>
                    <div class="detail-text discount-rate">
                      {{ item.averageDiscount * 100 }}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">공지사항</span>
          </div>
          <div class="dash-contents-container table-card">
            <div v-for="item in noticeList" class="cs-tr">
              <div class="cs-title">
                {{ item.title }}
              </div>
              <div class="cs-detail-wrap">{{ item.noticeDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import { ref, onMounted } from 'vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
const apiUtils = new ApiUtils();

const pickupList = ref([
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    quantity: 1,
    buyer: '김수현',
    paymentTime: '20:32',
    pickupTime: '20:50',
  },
  {
    name: '[비비고] 그린믹스 콜라겐 샐러드키트 5봉',
    quantity: 1,
    buyer: '김미현',
    paymentTime: '20:35',
    pickupTime: '20:55',
  },
]);

const deliveryList = ref([
  {
    name: '맛있는 고기',
    quantity: 2,
    buyer: '김미소',
    paymentTime: '20:45',
    condition: '배송대기',
  },
  {
    name: '[비비고] 그린믹스 콜라겐 샐러드키트 5봉',
    quantity: 1,
    buyer: '김이지',
    paymentTime: '20:50',
    condition: '배송대기',
  },
]);
const contactList = ref([
  {
    title: '배송 언제 와요?',
    customer: '김미소',
    postTime: '7월 5일',
    condition: '답변대기',
  },
  {
    title: '배송 문의',
    customer: '김이지',
    postTime: '7월 23일',
    condition: '답변대기',
  },
]);
const recommendList = ref([
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    recommendDiscount: 0.25,
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    recommendDiscount: 0.25,
  },
]);
const bestList = ref([
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    averageDiscount: 0.25,
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    price: 8900,
    averageDiscount: 0.25,
  },
]);
const noticeList = ref([
  {
    title: '서비스 점검 안내 (2023년 5월 26일 새벽 23시 50분 ~ 00시 5분)',
    noticeDate: '2023.05.25',
  },
  {
    title: '제품 등록 안내',
    noticeDate: '2023.05.25',
  },
]);

const sellingReport = ref([]);

const testData = {
  corpCd: '테스트가맹점코드',
  frDt: '2023-07-01',
  toDt: '2023-12-30',
};

async function getSelling() {
  const result = await apiUtils.post('/api/dashboard/selling', testData);
  sellingReport.value = result.data;
}

const qnaList = ref([]);

const testData2 = {
  corpCd: 'testcorpCd',
};

async function getQnaList() {
  const result = await apiUtils.post('/api/dashboard/qnaList', testData2);
  qnaList.value = result.data;
}

onMounted(() => {
  getSelling();
  getQnaList();
});
</script>

<style scoped>
#main-wrapper {
  background-color: var(--ngray50);
}
/*매출액 통계 카드*/
.stat-info-wrapper {
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.stat-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.stat-date {
  color: var(--ngray600);
  font-size: 16px;
}
.stat-num {
  color: var(--primary-d3);
  font-size: 20px;
}
</style>

<style>
.dash-wrapper {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--ngray800);
}
.dash-section {
  display: flex;
  gap: 12px;
}
/*상단 공지*/
.notif-wrapper {
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 10px;
  background-color: var(--gray-white);
  border-bottom: 1px solid var(--ngray100);
}
.notif-title {
  color: var(--ngray800);
}
.notif-date {
  color: var(--ngray400);
}
.notif-wrapper .btn {
  border-radius: 50%;
  padding: 8px;
}
.notif-wrapper .material-symbols-rounded {
  font-size: 20px;
}

/*카드*/
.dash-card {
  background-color: var(--gray-white);
  border: 1px solid var(--ngray100);
  padding: 20px 24px;
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 250px;
}
.dash-title-container {
  display: flex;
  gap: 10px;
  padding: 0 10px 10px;
  border-bottom: 1px solid var(--ngray100);
  font-size: 18px;
  font-weight: 700;
}
.dash-count {
  color: var(--secondary-def);
}

.cs-tr {
  display: flex;
  padding: 8px 10px;
  gap: 16px;
  font-size: 16px;
}
.cs-img {
  width: 90px;
  height: 90px;
  background-color: var(--gray100);
}
.cs-info-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  flex: 1 0 0;
}
.cs-title {
  color: var(--ngray800);
}
.cs-detail-wrap {
  color: var(--ngray400);
  display: flex;
  flex-direction: column;
}
.cs-detail {
  display: flex;
  gap: 8px;
}
.detail-label {
  width: 60px;
}
.detail-text {
  flex: 1 0 0;
}
.cs-condition {
  color: var(--primary-def);
}
/*할인품목 추천*/
.table-card .cs-tr {
  align-items: center;
}
.table-number {
  color: var(--ngray400);
  padding-inline: 8px;
}
.cs-td {
  width: 16%;
  max-width: 100px;
}
.discount-rate {
  color: var(--secondary-def);
  font-weight: 700;
}
.total-price {
  font-weight: 700;
}
.table-card .cs-title {
  text-align: left;
}
</style>
