<template>
 <Sidebar isSeller="true"></Sidebar>
 <div id="main-wrapper">
    <div class="top-box">
        <div class="top-box-items">
            <span class="material-symbols-rounded">arrow_back_ios</span>
            <p class="top-box-text1">바코드 스캔</p>
            <Btn btntype="solid" class="top-box-btn1">등록하기</Btn>
        </div>
    </div>
    <div class="menu-box">
        <div class="menu-top-box">
            <p style="margin-left: 50px;">상품코드</p>
            <p style="margin-left: 85px;">사진</p>
            <p style="margin-left: 210px;">제품명</p>
            <p style="margin-left: 190px;">용량</p>
            <p style="margin-left: 70px;">수량</p>
            <p style="margin-left: 70px;">유통기한</p>
            <p style="margin-left: 90px;">원가</p>
            <p style="margin-left: 95px;">할인율</p>
            <p style="margin-left: 85px;">판매가</p>
            <p style="margin-left: 90px;">수정</p>
        </div>
        <div class="menu-list">
            <div class="menu-info" v-for="(item, idx) in goods">
                <p style="flex-basis: 90px;">{{ item.code }}</p>
                   <div class="menu-img"></div>
                   <p style="flex-basis: 296px;">{{ item.title }}</p>
                   <p style="flex-basis: 60px;">{{ item.capacity }}</p>
                   <p style="flex-basis: 10px;">{{ item.quantity }}</p>
                   <p style="flex-basis: 90px;">{{ item.day }}</p>
                   <p style="flex-basis: 70px;">{{ item.price }}원</p>
                   <p style="flex-basis: 70px;">{{ item.discount }}%</p>
                   <p style="flex-basis: 70px;">{{ item.discountprice }}원</p>
                <Btn btntype="LightSolid" class="list-btn1">수정</Btn>
            </div>
        </div>
    </div>
 </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import { ref, watchEffect } from 'vue';

const goods = ref([
    {
      id: 0,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉",
      price: 8900,
      discountprice: 6675,
      discount: 25,
      day: "2023-05-29",
      code: "154203215",
      capacity: "55g X 5",
      quantity: 1,
    },
    {
      id: 1,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉",
      price: 8900,
      discountprice: 6675,
      discount: 25,
      day: "2023-05-29",
      code: "154203215",
      capacity: "55g X 5",
      quantity: 1,
    },
    {
      id: 2,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉",
      price: 8900,
      discountprice: 6675,
      discount: 25,
      day: "2023-05-29",
      code: "154203215",
      capacity: "55g X 5",
      quantity: 1,
    },
]);

const selectAll = ref(true);

watchEffect(() => {
  const allSelected = goods.value.every((item) => item.checked);
  selectAll.value = allSelected;
});
</script>

<style scoped>
.top-box {
    border-bottom: solid 1px #DDE5DB;
}

.top-box-items {
    display: flex;
    margin-left: 70px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.top-box-text1 {
    font-size: 28px;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.material-symbols-rounded {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
}
.top-box-btn1 {
    margin-left: auto;
    padding: 10px 50px;
    margin-right: 80px;
}

.menu-box {
    width: 90%;
    margin: 0 auto;
}
.menu-top-box {
    display: flex;
    border-top: solid 1px #C1C9BF;
    border-bottom: solid 1px #C1C9BF;
    background-color: var(--gray10);
}

.menu-top-box p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 18px;
}

.menu-list {
    display: flex;
    flex-direction: column;
}

.menu-info {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #C1C9BF;
}

.menu-img {
    width: 60px;
    height: 60px;
    background-color: #000;
}

.list-btn1 {
    width: 56px;
    height: 40px;
    padding: 0px;
    padding-top: 12px;
    padding-left: 5px;
    padding-right: 5px;
}
</style>