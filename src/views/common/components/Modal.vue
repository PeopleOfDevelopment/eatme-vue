<template>
  <div class="dimmed">
    <div class="modal">
      <div class="title-wrapper">
        <Btn btntype="textGray" :class="{ transparent: selectedNotice === -1 }">
          <span @click="selectedNotice = -1" class="material-symbols-rounded">
            chevron_left
          </span>
        </Btn>
        <div class="title">공지사항</div>
        <Btn btntype="textGray">
          <span class="material-symbols-rounded" @click="$emit('close')">
            close
          </span>
        </Btn>
      </div>
      <div class="contents-wrapper">
        <div class="list-container">
          <div
            v-if="selectedNotice === -1"
            v-for="(notice, index) in noticeList"
            :key="index"
            class="notice-list"
            @click="showContents(index)">
            <div class="notice-title">{{ notice.title }}</div>
            <div class="notice-date">{{ notice.date }}</div>
          </div>
        </div>
        <div class="notice-contents" v-if="selectedNotice !== -1">
          <div class="title-container">
            <div class="notice-title">{{ selectedNotice.title }}</div>
            <div class="notice-date">
              {{ selectedNotice.date }}　{{ selectedNotice.time }}
            </div>
          </div>
          <div class="selected-contents">
            {{ selectedNotice.contents }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from './Btn.vue';
import { ref } from 'vue';
const selectedNotice = ref(-1);

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

const showContents = (index) => {
  selectedNotice.value = noticeList.value[index];
};
</script>

<style scoped>
.dimmed {
  background-color: rgba(0, 0, 0, 0.5);
  width: calc(100% - 248px);
  height: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: white;
  position: fixed;
  padding: 10px;
  width: 100%;
  height: 600px;
  max-width: 600px;
  color: var(--ngray800);
}
.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
}
.contents-wrapper {
  padding: 18px 20px;
}
.notice-list {
  padding-block: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--ngray200);
  cursor: pointer;
}
.notice-contents {
  color: var(--ngray600);
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.notice-contents .notice-title {
  font-weight: 700;
  font-size: 18px;
}
.notice-date {
  color: var(--ngray400);
}
.selected-contents {
  line-height: 28px;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .dimmed {
    width: 100%;
  }
}
.transparent {
  opacity: 0;
  cursor: default;
}
</style>
