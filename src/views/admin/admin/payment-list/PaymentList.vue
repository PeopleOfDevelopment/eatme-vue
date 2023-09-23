<template>
  <Sidebar pageType="admin"></Sidebar>
  <div id="main-wrapper">
    <div class="title-wrapper">
      <h2 class="page-title">정산신청</h2>
    </div>
    <div class="contents-wrapper">
      <div class="table-header">
        <div>번호</div>
        <div class="flex-fill">신청일</div>
        <div class="flex-fill">신청자</div>
        <div class="flex-fill">정산금액</div>
        <div class="flex-fill">정산방식</div>
        <div class="flex-fill">상태</div>
      </div>
      <div v-for="(item, index) in paymentList" class="table-tr">
        <div class="table-number">{{ index + 1 }}</div>
        <div class="cs-detail-wrap flex-fill">{{ item.date }}</div>
        <div class="user-name flex-fill">{{ item.user }}</div>
        <div class="amount flex-fill">{{ item.amount }} 원</div>
        <div class="method flex-fill">{{ item.method }}</div>
        <div class="cs-condition flex-fill">{{ item.state }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/views/common/main/sidebar/Sidebar.vue';
import { ref } from 'vue';
const paymentList = ref([
  {
    user: 'GS25 안서점',
    date: '2023.05.28',
    amount: '320000',
    method: '계좌이체',
    state: '정산신청',
  },
  {
    user: 'GS25 안서점',
    date: '2023.05.28',
    amount: '290000',
    method: '계좌이체',
    state: '정산신청',
  },
  {
    user: 'GS25 안서점',
    date: '2023.05.28',
    amount: '300000',
    method: '계좌이체',
    state: '정산신청',
  },
]);
</script>

<style scoped>
#main-wrapper {
  padding-inline: 75px;
  padding-block: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.title-wrapper {
  display: flex;
  align-items: center;
}
.flex-fill {
  flex: 1 0 0;
}
.table-header div:nth-child(1),
.table-number {
  width: 32px;
}
.cs-title {
  text-align: left;
}
.table-tr {
  display: flex;
  border-bottom: 1px solid var(--ngray200);
  align-items: center;
}
.table-tr div {
  padding: 8px 10px;
}
</style>
