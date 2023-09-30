<template>
  <Sidebar pageType="admin"></Sidebar>
  <div id="main-wrapper" v-if="!regOpen">
    <div class="title-wrapper">
      <h2 class="page-title">공지사항</h2>
      <div class="add-btn" @click="regToggle">
        <span class="material-symbols-rounded">add</span>
      </div>
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
  <div v-else id="main-wrapper" class="subpage">
    <NoticeReg @close="regToggle"></NoticeReg>
  </div>
</template>

<script setup>
import Sidebar from '@/views/common/main/sidebar/Sidebar.vue';
import NoticeReg from '@/views/admin/admin/notice-reg/NoticeReg.vue';
import { ref } from 'vue';
const noticeList = ref([
  {
    title: '[공지] 사이트 점검 안내',
    date: '2023.05.28',
    time: '10:45',
    contents:
      '서버 안정화를 위한 사이트 점검을 실시합니다. 작업 시간 동안 모든 서비스 이용이 중단되오니 이용에 참고 부탁드립니다.',
  },
  {
    title: '[이벤트] 인증 이벤트',
    date: '2023.05.28',
    time: '10:45',
    contents: '이벤트를 진행합니다.',
  },
]);

const isOpen = ref(Array(noticeList.length).fill(false));

const toggleContents = (index) => {
  isOpen.value[index] = !isOpen.value[index];
};

const regOpen = ref(false);

const regToggle = () => {
  regOpen.value = !regOpen.value;
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
.subpage {
  padding: 0 !important;
}
.title-wrapper {
  display: flex;
  align-items: center;
}
.add-btn {
  padding: 10px;
  display: flex;
  cursor: pointer;
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
}
.open .table-contents-box {
  display: block;
}
</style>
