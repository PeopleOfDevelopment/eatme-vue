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
    <div class="dash-wrapper">
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">픽업예정</span>
            <span class="dash-count">2</span>
          </div>
          <div class="dash-contents-container"></div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">배송요청</span>
            <span class="dash-count">3</span>
          </div>
          <div class="dash-contents-container"></div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">문의</span>
            <span class="dash-count">3</span>
          </div>
          <div class="dash-contents-container"></div>
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">매출액</span>
          </div>
          <div class="dash-contents-container">
            <div class="stat-info-wrapper">
              <div class="stat-info">
                <div class="stat-date">오늘 현재까지</div>
                <div class="stat-num">12,000 원</div>
              </div>
              <div class="stat-info">
                <div class="stat-date">지난 7일</div>
                <div class="stat-num">84,000 원</div>
              </div>
              <div class="stat-info">
                <div class="stat-date">이번 달</div>
                <div class="stat-num">255,500 원</div>
              </div>
            </div>
            <div class="stat-data"></div>
          </div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">할인품목 추천</span>
          </div>
          <div class="dash-contents-container"></div>
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">많이 판매된 제품</span>
          </div>
          <div class="dash-contents-container"></div>
        </div>
        <div class="dash-card">
          <div class="dash-title-container">
            <span class="dash-title">공지사항</span>
          </div>
          <div class="dash-contents-container"></div>
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
#main-wrapper {
  background-color: var(--ngray50);
}
.dash-wrapper {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--ngray800);
}
.dash-section {
  display: flex;
  gap: 12px;
}
/*카드*/
.dash-card {
  background-color: var(--gray-white);
  border: 1px solid var(--ngray100);
  padding: 20px 24px;
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.dash-title-container {
  display: flex;
  gap: 10px;
  padding: 0 10px 10px;
  border-bottom: 1px solid var(--ngray100);
  font-size: 18px;
  font-weight: 700;
}
.dash-count {
  color: var(--secondary-def);
}
/*매출액 통계 카드*/
.stat-info-wrapper {
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.stat-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.stat-date {
  color: var(--ngray600);
  font-size: 16px;
}
.stat-num {
  color: var(--primary-d3);
  font-size: 20px;
}

/*상단 공지*/
.notif-wrapper {
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 10px;
  background-color: var(--gray-white);
  border-bottom: 1px solid var(--ngray100);
}
.notif-title {
  color: var(--ngray800);
}
.notif-date {
  color: var(--ngray400);
}
.notif-wrapper .btn {
  border-radius: 50%;
  padding: 8px;
}
.notif-wrapper .material-symbols-rounded {
  font-size: 20px;
}
</style>
