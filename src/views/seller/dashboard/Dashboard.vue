<template>
  <Sidebar isSeller="true"></Sidebar>
  <div id="main-wrapper">
    <div class="notif-wrapper">
      <Btn btntype="solid">
        <span class="material-symbols-rounded icon-fill">
          notifications_active
        </span>
      </Btn>
      <span class="notif-title">
        서비스 점검 안내 (2023년 5월 26일 새벽 23시 50분 ~ 00시 5분)
      </span>
      <span class="notif-date">2023.05.25</span>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Footer from '../../common/main/footer/Footer.vue';
import Btn from '../../common/components/Btn.vue';
</script>

<style scoped>
.notif-wrapper {
  display: flex;
  align-items: center;
  padding: 4px 10px;
  gap: 10px;
}
.notif-wrapper .btn {
  border-radius: 50%;
  padding: 8px;
}
.notif-wrapper .material-symbols-rounded {
  font-size: 20px;
}
</style>
