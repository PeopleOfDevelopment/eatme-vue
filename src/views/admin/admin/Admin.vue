<template>
  <Sidebar></Sidebar>
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
          <div class="dash-contents-container"></div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">고객 문의</span>
            <span class="dash-count">2</span>
          </div>
          <div class="dash-contents-container"></div>
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">신고내역</span>
            <span class="dash-count">3</span>
          </div>
          <div class="dash-contents-container"></div>
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
            <div v-for="item in noticeList" class="cs-tr">
              <div class="cs-title">
                {{ item.title }}
              </div>
              <div class="cs-detail-wrap">{{ item.noticeDate }}</div>
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
    title: '서비스 점검 안내 (2023년 5월 26일 새벽 23시 50분 ~ 00시 5분)',
    noticeDate: '2023.05.25',
  },
  {
    title: '제품 등록 안내',
    noticeDate: '2023.05.25',
  },
]);
</script>

<style scoped>
#main-wrapper {
  background-color: var(--ngray50);
}
.add-btn {
  color: var(--ngray400);
}
</style>
