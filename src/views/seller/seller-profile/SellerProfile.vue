<template>
  <Sidebar pageType="seller"></Sidebar>
  <div id="main-wrapper">
    <h2 class="page-title">판매자 정보</h2>
    <div class="info-table">
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">상호명</span>
          <span class="info-data">GS25 안서점</span>
        </div>
        <Btn btntype="ghostGray">수정</Btn>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">대표자명</span>
          <span class="info-data">김이름</span>
        </div>
        <Btn btntype="ghostGray">수정</Btn>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">대표 전화번호</span>
          <span class="info-data">041-000-0000</span>
        </div>
        <Btn btntype="ghostGray">수정</Btn>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">이메일</span>
          <span class="info-data">000-00-00000</span>
        </div>
        <Btn btntype="ghostGray">수정</Btn>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">사업자등록번호</span>
          <span class="info-data">000-00-00000</span>
        </div>
        <Btn btntype="ghostGray">수정</Btn>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">사업장 주소</span>
          <span class="info-data">
            충남 천안시 동남구 상명대길 25 1층 (안서동 321-34, 부광빌딩)
          </span>
        </div>
        <Btn btntype="ghostGray">수정</Btn>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">사진</span>
          <span class="info-data profile-img"></span>
        </div>
        <Btn btntype="ghostGray">수정</Btn>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">매장 사진</span>
          <span class="info-data"><span class="place-img"></span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/views/common/main/sidebar/Sidebar.vue';
import Btn from '@/views/common/components/Btn.vue';
</script>

<style scoped>
#main-wrapper {
  padding: 60px 75px;
}
.page-title {
  text-align: left;
  margin-bottom: 20px;
}
.info-table {
  font-size: 18px;
  border-top: 2px solid var(--ngray600);
}
.info-tr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--ngray100);
  padding: 16px 20px;
}
.info-wrap {
  display: flex;
  gap: 15px;
  text-align: left;
}
.info-label {
  width: 120px;
  color: var(--ngray600);
}
.info-data {
  flex: 1 0 0;
  color: var(--ngray800);
  font-weight: 700;
}
.profile-img {
  width: 90px;
  height: 90px;
  background-color: var(--ngray200);
  border-radius: 50%;
}
.place-img {
  width: 285px;
  height: 180px;
  background-color: var(--ngray200);
  display: block;
}
.info-table .btn {
  min-width: 60px;
}
</style>
