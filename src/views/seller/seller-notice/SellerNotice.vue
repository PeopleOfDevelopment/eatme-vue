<template>
  <Sidebar pageType="seller"></Sidebar>
  <div id="main-wrapper">
    <div class="title-wrapper">
      <h2 class="page-title">판매자 공지사항</h2>
    </div>
    <div class="contents-wrapper">
      <div class="table-header">
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </div>
      <div
        v-for="(item, index) in noticeListSeller"
        @click="toggleContents(index)"
        :class="{ open: isOpen[index] }">
        <div class="table-tr">
          <div class="table-number">{{ index + 1 }}</div>
          <div class="cs-title">
            {{ item.title }}
          </div>
          <div class="cs-detail-wrap">{{ item.date }}　{{ item.time }}</div>
        </div>
        <div class="table-contents-box">
          {{ item.contents }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/views/common/main/sidebar/Sidebar.vue';
import { ref } from 'vue';
const noticeListSeller = ref([
  {
    title: '서비스 점검 안내 (2023년 5월 26일 새벽 23시 50분 ~ 00시 5분)',
    date: '2023.05.25',
    time: '10:45',
    contents: '서비스 점검을 실시합니다.',
  },
  {
    title: '제품 등록 안내',
    date: '2023.05.25',
    time: '10:45',
    contents: '제품 등록 방법 안내입니다.',
  },
]);
const isOpen = ref(Array(noticeListSeller.length).fill(false));

const toggleContents = (index) => {
  isOpen.value[index] = !isOpen.value[index];
};
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
.add-btn {
  padding: 10px;
  display: flex;
}
.add-btn .material-symbols-rounded {
  font-size: 28px;
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
.table-contents-box {
  text-align: left;
  padding: 20px 40px;
  border-bottom: 1px solid var(--ngray200);
  display: none;
  color: var(--ngray800);
}
.open .table-contents-box {
  display: block;
}
</style>
