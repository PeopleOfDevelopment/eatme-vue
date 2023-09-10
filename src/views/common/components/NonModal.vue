<template>
  <div class="nonmodal-box" v-if="modalOpen">
    <div class="nm-contents-container">
      <h2 class="nm-title">사이트 점검 안내</h2>
      <div class="nm-contents">
        서버 안정화를 위한 사이트 점검을 실시합니다.
        <br />
        작업 시간 동안 모든 서비스 이용이 중단되오니 이용에 참고 부탁드립니다.
        <br />
        <br />
        <strong>점검 시간</strong>
        <br />
        2023.05.29　13:00 ~ 13:10
        <Btn btntype="textThin">자세히 보기</Btn>
      </div>
    </div>
    <div class="nm-close-container">
      <div class="hide-nm-24-container">
        <input
          type="checkbox"
          id="hide-nm-24"
          name="hide-nm-24"
          v-model="hideModal" />
        <label class="hide-nm-24-label" for="hide-nm-24">
          오늘 하루동안 보지 않기
        </label>
      </div>
      <Btn btntype="textGrayThin" @click="closeModal">닫기</Btn>
    </div>
  </div>
</template>
<script setup>
import Btn from './Btn.vue';
import { ref } from 'vue';
const modalOpen = ref(true);
const hideModal = ref(false);

const setCookie = (name, val, exp) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  console.log(name + '=' + val + ';expires=' + date.toUTCString() + ';path=/');

  document.cookie = name + '=' + val + ';expires=' + date.toUTCString() + ';';
};

const closeModal = () => {
  modalOpen.value = false;
  console.log('closeModal');
  if (hideModal.value) {
    setCookie('today', 'y', 1);
  }
};
</script>
<style scoped>
.nonmodal-box {
  background-color: white;
  position: absolute;
  top: 100px;
  margin: 20px;
  border: 1px solid var(--primary-d5);
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--ngray800);
  max-width: 550px;
}
.nm-contents-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}
.nm-title {
  padding: 0;
  margin: 0;
  font-size: 20px;
}
.nm-contents {
  font-size: 16px;
  text-align: left;
  line-height: 28px;
}
/*닫기 영역*/
.nm-close-container {
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  width: 100%;
}
.text-thin-button,
.text-gray-thin-button {
  font-size: 14px;
}
.hide-nm-24-container {
  padding: 10px;
  display: flex;
  align-items: center;
  color: var(--ngray600);
}
#hide-nm-24,
.hide-nm-24-label {
  cursor: pointer;
  padding-inline: 4px;
  margin: 0;
}
@media screen and (max-width: 768px) {
  .nonmodal-box {
    margin-left: inherit;
  }
}
</style>
