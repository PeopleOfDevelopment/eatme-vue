<template>
  <Sidebar pageType="seller"></Sidebar>
  <div id="main-wrapper">
    <TopNav
      navType="tabs"
      :tabList="['매출 통계', '정산 관리']"
      :currentTab="currentTab"
      :changeTab="changeTab"></TopNav>
    <div id="sub-wrapper">
      <div v-if="currentTab === 0" class="content-section">
        <div class="content-container">
          <h2 class="page-title">매출액</h2>
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
          <div class="stat-graph"></div>
        </div>
      </div>
      <div v-if="currentTab === 1" class="content-section">
        <div class="content-container">
          <h2 class="page-title">내 수입</h2>
          <div class="contents-info-container">
            <div class="stat-num">275,500 원</div>
            <div class="stat-info-text">
              2023년 4월 25일에 256,450 원이 마지막으로 정산되었습니다.
            </div>
          </div>
        </div>
        <div class="content-container">
          <h2 class="page-title">정산 방법</h2>
          <div class="contents-info-container">
            <div class="method-title">은행 계좌로 송금</div>
            <div class="method-info">
              김미미
              <br />
              국민은행 1234-56-7891000
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import TopNav from '@/views/common/components/TopNav.vue';
import Btn from '../../common/components/Btn.vue';
import { ref } from 'vue';

/* 탭 */
const currentTab = ref(0);

const changeTab = (index) => {
  currentTab.value = index;
};
</script>

<style scoped>
.content-section {
  padding: 64px 75px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  color: var(--ngray600);
}
.content-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.page-title {
  color: var(--ngray800);
  font-size: 28px;
  padding: 0;
  display: flex;
  margin: 0;
}
.stat-info-wrapper {
  font-weight: 700;
  display: flex;
  justify-content: space-between;
}
.stat-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
}
.stat-date {
  color: var(--ngray600);
  font-size: 16px;
}
.stat-num {
  color: var(--primary-d3);
  font-size: 28px;
  font-weight: 700;
}
.contents-info-container {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
}
.info-table {
  flex-direction: row;
  gap: 32px;
}
.method-title {
  font-size: 18px;
  font-weight: 700;
}
.method-info {
  text-align: left;
}
.payment-amount {
  font-weight: 700;
}
</style>
