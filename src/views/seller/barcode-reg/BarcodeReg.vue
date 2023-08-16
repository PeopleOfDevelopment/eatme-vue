<template>
  <Sidebar isSeller="true"></Sidebar>
  <div id="main-wrapper">
    <div class="content-section">
      <h2 class="page-title">제품 등록 방법 선택</h2>
      <div class="reg-how-container">
        <div class="reg-how bg-green">
          <span class="material-symbols-rounded">barcode_scanner</span>
          <span class="reg-how-text">바코드로 등록</span>
        </div>
        <div class="reg-how bg-gray">
          <span class="material-symbols-rounded">edit</span>
          <span class="reg-how-text">직접 등록</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
</script>

<style scoped>
.content-section {
  padding: 64px 75px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.page-title {
  color: var(--ngray800);
  font-size: 28px;
  font-weight: 700;
  padding: 10px;
  display: flex;
  margin: 0;
}
.reg-how-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100vh - 214px);
}
.reg-how {
  flex: 1 0 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  color: var(--ngray800);
  cursor: pointer;
}
.reg-how .material-symbols-rounded {
  font-size: 48px;
}
.reg-how-text {
  font-size: 20px;
  font-weight: 700;
}
.bg-green {
  background-color: var(--primary-l4);
}
.bg-gray {
  background-color: var(--ngray100);
}
</style>
