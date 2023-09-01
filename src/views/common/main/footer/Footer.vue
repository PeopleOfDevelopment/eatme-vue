<template>
  <footer id="footer">
    <div class="notice-wrap">
      <Btn
        class="notice-title"
        btntype="textGrayThin"
        @click="noticeOpen = true">
        공지사항
      </Btn>
      <Btn btntype="textGray">사이트 점검 안내</Btn>
    </div>
    <div class="eatme-info-wrap">
      <div class="eatme-cs">
        <Btn btntype="ghostGray">EAT ME 고객센터</Btn>
        <Btn btntype="ghostGray">가맹 신청하기</Btn>
      </div>
      <div class="eatme-info">
        <Btn btntype="textGrayThin">사업자정보확인</Btn>
        <Btn btntype="textGrayThin">이용약관</Btn>
        <Btn btntype="textGrayThin">개인정보처리방침</Btn>
      </div>
    </div>
  </footer>
  <Modal v-if="noticeOpen" @close="noticeOpen = false"></Modal>
</template>

<script setup>
import { ref } from 'vue';
import Btn from '../../components/Btn.vue';
import Modal from '../../components/Modal.vue';
const noticeOpen = ref(false);
</script>

<style scoped>
#footer {
  padding: 0 75px 20px;
  background-color: var(--gray10);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.notice-wrap {
  display: flex;
  align-items: center;
  padding-block: 10px;
  border-bottom: 1px solid var(--ngray200);
}
.notice-title {
  font-size: 16px;
  color: var(--ngray600);
}
.notice-wrap .btn {
  font-size: 16px;
}
.eatme-info-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.eatme-cs {
  display: flex;
  gap: 18px;
}
.eatme-cs .btn {
  font-size: 14px;
  width: 140px;
  font-weight: 500;
}
.eatme-info {
  display: flex;
}
.eatme-info .btn {
  font-size: 14px;
  color: var(--ngray500);
}
</style>
