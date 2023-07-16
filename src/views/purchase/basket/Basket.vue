<template>
  <div id="contents-wrapper">
    <h2 class="page-title">장바구니</h2>
    <div class="basket-wrapper">
      <div class="basket-section">
        <div class="basket-top">
          <Btn btntype="textGrayThin" @click="deleteChecked">선택 삭제</Btn>
        </div>
        <div class="cart-table">
          <div class="cart-tr cart-th">
            <input
              class="cart-checkbox"
              type="checkbox"
              v-model="selectAll"
              @change="toggleSelectAll" />
            <div class="cart-name">제품명</div>
            <div class="cart-quantity">수량</div>
            <div class="cart-price">가격</div>
          </div>
          <div
            v-for="(basket, index) in basketList"
            :key="index"
            class="cart-tr">
            <input
              class="cart-checkbox"
              type="checkbox"
              v-model="basket.checked" />
            <div class="cart-img"></div>
            <div class="cart-text">{{ basket.name }}</div>
            <div class="cart-quantity-box">
              <Btn
                @click="decrease(basket)"
                :class="{ disabled: basket.quantity == 0 }"
                btntype="textGray">
                -
              </Btn>
              <input
                class="cart-quantity"
                type="number"
                v-model="basket.quantity" />
              <Btn @click="increase(basket)" btntype="textGray">+</Btn>
            </div>
            <div class="cart-price">
              {{ basket.price * basket.quantity }} 원
            </div>
          </div>
        </div>
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
import { ref, watchEffect } from 'vue';

const basketList = ref([
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    quantity: 1,
    price: 1000,
    checked: true,
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    quantity: 2,
    price: 2000,
    checked: true,
  },
  {
    name: '[피그인더가든] 그린믹스 콜라겐 샐러드키트 5봉',
    quantity: 1,
    price: 3000,
    checked: true,
  },
]);

const decrease = (basket) => {
  if (basket.quantity > 0) basket.quantity -= 1;
};
const increase = (basket) => {
  basket.quantity += 1;
};

const selectAll = ref(true);

const toggleSelectAll = () => {
  basketList.value.forEach((basket) => {
    basket.checked = selectAll.value;
  });
};

watchEffect(() => {
  const allSelected = basketList.value.every((basket) => basket.checked);
  selectAll.value = allSelected;
});

const deleteChecked = () => {
  basketList.value = basketList.value.filter((basket) => !basket.checked);
};
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
  gap: 32px;
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
.basket-top {
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
}
.basket-top .btn {
  font-size: 14px;
}
.cart-table {
  font-size: 16px;
  color: var(--ngray800);
  display: flex;
  flex-direction: column;
}
.cart-tr {
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid var(--ngray200);
  padding: 10px;
}
.cart-th {
  background-color: var(--gray10);
  border-top: 1px solid var(--ngray200);
  font-weight: 700;
}
.cart-checkbox {
  accent-color: var(--primary-def);
  width: 18px;
  height: 18px;
  border-radius: 9px;
  width: 8%;
  min-width: 24px;
}
.cart-name {
  flex: 1 0 0;
}
.cart-img {
  width: 90px;
  height: 90px;
  background-color: var(--ngray100);
}
.cart-text {
  flex: 1 0 0;
  text-align: left;
}
.cart-quantity-box {
  width: 90px;
  display: flex;
  border: 1px solid var(--ngray200);
  border-radius: 4px;
}
.cart-th .cart-quantity {
  width: 90px;
  max-width: 90px;
}
.cart-quantity {
  flex: 1 0 0;
  border: none;
  text-align: center;
  width: 24px;
  outline: none;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.disabled {
  color: var(--ngray200);
  cursor: default;
}
.cart-price {
  width: 20%;
  min-width: 75px;
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
