<template>
  <Sidebar pageType="admin"></Sidebar>
  <div id="main-wrapper">
    <div class="title-wrapper">
      <h2 class="page-title">고객문의</h2>
    </div>
    <div class="contents-wrapper">
      <div class="table-header">
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
        <div>상태</div>
      </div>
      <div v-for="(item, index) in qnaList" class="table-tr">
        <div class="table-number">{{ index + 1 }}</div>
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
.cs-title {
  flex: 1 0 0;
}
.table-header div:nth-child(3),
.cs-detail-wrap {
  width: 145px;
}
.table-header div:nth-child(4),
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
