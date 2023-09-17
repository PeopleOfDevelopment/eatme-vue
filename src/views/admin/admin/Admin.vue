<template>
  <Sidebar pageType="admin"></Sidebar>
  <div id="main-wrapper">
    <div class="dash-wrapper">
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">공지사항</span>
            <div class="add-btn">
              <span class="material-symbols-rounded">add</span>
            </div>
          </div>
          <div class="dash-contents-container">
            <div v-for="item in noticeList" class="cs-tr">
              <div class="cs-title">
                {{ item.title }}
              </div>
              <div class="cs-detail-wrap">{{ item.date }}</div>
            </div>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">고객문의</span>
            <span class="dash-count">2</span>
          </div>
          <div class="dash-contents-container">
            <div v-for="item in qnaList" class="cs-tr">
              <div class="cs-info-container">
                <div class="cs-title">
                  {{ item.title }}
                </div>
                <div class="cs-detail-wrap">{{ item.date }}</div>
              </div>
              <div class="cs-condition">{{ item.state }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">신고내역</span>
            <span class="dash-count">2</span>
          </div>
          <div class="dash-contents-container">
            <div v-for="item in reportList" class="cs-tr">
              <div class="cs-info-container">
                <div class="cs-title">
                  {{ item.title }}
                </div>
                <div class="cs-detail-wrap">{{ item.date }}</div>
              </div>
              <div class="cs-condition">{{ item.state }}</div>
            </div>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">정산신청</span>
            <span class="dash-count">3</span>
          </div>
          <div class="dash-contents-container"></div>
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">판매자 공지</span>
            <div class="add-btn">
              <span class="material-symbols-rounded">add</span>
            </div>
          </div>
          <div class="dash-contents-container table-card">
            <div v-for="item in noticeListSeller" class="cs-tr">
              <div class="cs-title">
                {{ item.title }}
              </div>
              <div class="cs-detail-wrap">{{ item.date }}</div>
            </div>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">판매자 문의</span>
            <span class="dash-count">3</span>
          </div>
          <div class="dash-contents-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import { ref } from 'vue';
const noticeList = ref([
  {
    title: '[공지] 사이트 점검 안내',
    date: '2023.05.28',
    time: '10:45',
  },
  {
    title: '[이벤트] 인증 이벤트',
    date: '2023.05.28',
    time: '10:45',
  },
]);
const qnaList = ref([
  {
    title: '비밀번호 잊어버렸어요',
    date: '2023.05.28',
    time: '10:20',
    state: '답변대기',
  },
  {
    title: '구매내역이 사라졌어요',
    date: '2023.05.27',
    time: '10:20',
    state: '답변대기',
  },
]);
const reportList = ref([
  {
    title: '판매 물품이 실제와 달라요',
    target: 'GS25 신방점',
    date: '2023.05.28',
    time: '10:20',
    state: '처리대기',
  },
  {
    title: '악성 리뷰를 달아요',
    target: 'user111',
    date: '2023.05.27',
    time: '10:20',
    state: '처리대기',
  },
]);
const noticeListSeller = ref([
  {
    title: '서비스 점검 안내 (2023년 5월 26일 새벽 23시 50분 ~ 00시 5분)',
    date: '2023.05.25',
    time: '10:45',
  },
  {
    title: '제품 등록 안내',
    date: '2023.05.25',
    time: '10:45',
  },
]);
</script>

<style scoped>
#main-wrapper {
  background-color: var(--ngray50);
}
</style>

<style>
.add-btn {
  color: var(--ngray400);
}
</style>
