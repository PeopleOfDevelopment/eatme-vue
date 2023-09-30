<template>
  <div class="dimmed">
    <div class="modal">
      <div class="error-text">사용자 정보를 찾을 수 없습니다.</div>
      <Btn btntype="text" @click="$emit('close')">확인</Btn>
    </div>
  </div>
</template>
<script setup>
import Btn from '@/views/common/components/Btn.vue';
</script>
<style scoped>
.dimmed {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: white;
  position: fixed;
  padding: 20px 36px;
  color: var(--ngray800);
  max-width: 400px;
}
.error-text {
  font-size: 18px;
  text-align: left;
  padding-block: 10px;
  margin-bottom: 16px;
}
.modal .btn {
  float: right;
}
</style>
