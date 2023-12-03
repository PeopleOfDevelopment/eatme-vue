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
        v-for="(item, index) in noticeList"
        @click="toggleContents(index)"
        :class="{ open: isOpen[index] }">
        <div class="table-tr">
          <div class="table-number">{{ item.noticeNo }}</div>
          <div class="cs-title">
            {{ item.noticeTit }}
          </div>
          <div class="cs-detail-wrap">{{ item.noticeFrdt }}</div>
        </div>
        <div class="table-contents-box" v-html="item.noticeTxt"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/views/common/main/sidebar/Sidebar.vue';
import { ref, onMounted } from 'vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
const apiUtils = new ApiUtils();

const noticeList = ref([]);

let today = new Date();
let tY = today.getFullYear();
let tM = String(today.getMonth() + 1).padStart(2, '0');
let tD = String(today.getDate()).padStart(2, '0');
let todayFormat = `${tY}-${tM}-${tD}`;

const noticeParam = {
  noticeTp: '전체',
  noticeFrdt: todayFormat,
  noticeTodt: todayFormat,
};
async function getNoticeList() {
  const result = await apiUtils.post('/api/admin/notice/query', noticeParam);
  noticeList.value = result.data.reverse();
}

onMounted(() => {
  getNoticeList();
});

const isOpen = ref(Array(getNoticeList.length).fill(false));

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
