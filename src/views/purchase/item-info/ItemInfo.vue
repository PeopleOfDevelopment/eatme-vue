<template>
  <div class="top-box">
    <div class="top-box-items">
      <span class="material-symbols-rounded">arrow_back_ios</span>
      <p class="top-box-text1">상품 정보</p>
    </div>
  </div>
  <div class="item-info-box1">
    <div class="item-img1"></div>
    <div class="item-info1">
      <p class="info-text1">[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉</p>
    </div>
    <div class="item-info2">
      <p class="info-text2">25%</p>
      <p class="info-text3">6,675원</p>
    </div>
    <div class="item-info3">
      <p class="info-text4">8000원</p>
    </div>
    <div class="item-info4">
      <p class="info-text5">유통기한</p>
      <p class="info-text7">2023-06-12</p>
    </div>
    <div class="item-info4">
      <p class="info-text5">용량</p>
      <p class="info-text6">55g X5</p>
    </div>
    <div class="item-info4">
      <p class="info-text5">판매자</p>
      <p>gs25 상명대전문점</p>
    </div>
    <div class="btn-box1">
      <Btn btntype="outline" class="btn-style1">
        <span class="material-symbols-rounded">favorite</span>
      </Btn>
      <Btn btntype="ghost" class="btn-style2">장바구니 담기</Btn>
      <Btn btntype="solid" class="btn-style2">구매하기</Btn>
    </div>
  </div>
</template>

<script setup>
import Btn from '../../common/components/Btn.vue';
</script>

<style scoped>
.top-box {
  border-bottom: solid 1px #dde5db;
}

.top-box-items {
  display: flex;
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.top-box-text1 {
  font-size: 28px;
  font-weight: bold;
  margin-left: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.material-symbols-rounded {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
}
.item-info-box1 {
  width: 902px;
  margin: 0 auto;
}
.item-img1 {
  width: 100%;
  height: 800px;
  background-color: #000;
}
.item-info1 {
  display: flex;
}
.info-text1 {
  float: left;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.item-info2 {
  font-size: 28px;
  font-weight: bold;
  display: flex;
}
.info-text2 {
  float: left;
  margin-top: 0px;
  margin-bottom: 10px;
  color: var(--secondary-def);
}
.info-text3 {
  float: left;
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 20px;
}
.item-info3 {
  display: flex;
  font-size: 20px;
}
.info-text4 {
  color: var(--gray400);
  text-decoration: line-through;
  margin-top: 0px;
  margin-bottom: 10px;
}
.item-info4 {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  margin-left: 20px;
}

.info-text5 {
  margin-right: 80px;
}
.info-text6 {
  margin-left: 20px;
}
.info-text7 {
  margin-left: -14px;
}
.btn-box1 {
  display: flex;
  float: right;
  margin-bottom: 50px;
}
.btn-style1 {
  margin-left: 20px;
  padding: 18px 18px;
}
.btn-style2 {
  margin-left: 20px;
  font-size: 20px;
  padding: 18px 100px;
}
</style>
