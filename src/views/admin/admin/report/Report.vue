<template>
  <Sidebar pageType="admin"></Sidebar>
  <div id="main-wrapper">
    <div class="title-wrapper">
      <h2 class="page-title">신고내역</h2>
    </div>
    <div class="contents-wrapper">
      <div class="table-header">
        <div>번호</div>
        <div>신고대상</div>
        <div>신고사유</div>
        <div>신고일</div>
        <div>상태</div>
      </div>
      <div v-for="(item, index) in reportList" class="table-tr">
        <div class="table-number">{{ index + 1 }}</div>
        <div class="user-name">{{ item.target }}</div>
        <div class="cs-title">
          {{ item.title }}
        </div>
        <div class="cs-detail-wrap">{{ item.date }}　{{ item.time }}</div>
        <div class="cs-condition">{{ item.state }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/views/common/main/sidebar/Sidebar.vue';
import { ref } from 'vue';
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
.table-header div:nth-child(1),
.table-number {
  width: 32px;
}
.table-header div:nth-child(2),
.user-name {
  width: 100px;
}
.table-header div:nth-child(3),
.cs-title {
  flex: 1 0 0;
}

.table-header div:nth-child(4),
.cs-detail-wrap {
  width: 145px;
}
.table-header div:nth-child(5),
.cs-condition {
  width: 100px;
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
