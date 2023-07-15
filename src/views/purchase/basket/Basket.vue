<template>
  <div id="contents-wrapper">
    <h2 class="page-title">장바구니</h2>
    <div class="basket-wrapper">
      <div class="basket-section">
        <div class="cart-table"></div>
      </div>
      <div class="price-section">
        <div class="price-table">
          <div class="price-tr">
            <span class="price-label">상품 금액</span>
            <span class="price-value">8,900 원</span>
          </div>
          <div class="price-tr">
            <span class="price-label">상품 할인 금액</span>
            <span class="price-value">2,225 원</span>
          </div>
          <div class="total-line"></div>
          <div class="price-tr total">
            <span class="price-label">상품 할인 금액</span>
            <span class="price-value">2,225 원</span>
          </div>
        </div>
        <Btn btntype="solid">주문하기</Btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from '../../common/components/Btn2.vue';
</script>

<style scoped>
#contents-wrapper {
  padding-inline: 75px;
  padding-block: 32px;
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
.basket-wrapper {
  display: flex;
}
.basket-section {
  flex: 1 0 0;
}
.price-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 400px;
}
.price-table {
  background-color: var(--ngray50);
  color: var(--ngray500);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 4px;
}
.price-tr {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-inline: 4px;
}
.total-line {
  height: 1px;
  width: 100%;
  background-color: var(--ngray400);
}
.total {
  color: var(--ngray800);
}
</style>
