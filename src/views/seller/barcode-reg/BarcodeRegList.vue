<template>
 <Sidebar isSeller="true"></Sidebar>
 <div id="main-wrapper">
    <p class="title-text1">제품 등록</p>
    <div v-if="goodCount === 0">
        <span class="material-symbols-rounded">barcode_scanner</span>
        <p class="barcode-scan-text1">상품의 바코드를 스캔해주세요</p>
    </div>

    <div v-if="goodCount > 0">
        <div class="menu-list-topbox1">
            <div class="search">
                <span class="material-symbols-rounded2">search</span>
                <input
                    class="search_input"
                    type="text"
                    placeholder="상품 코드 혹은 제품명 검색" />
            </div>
            <Btn btntype="ghostWhite" class="list_btn2">데이터 추가</Btn>
        </div>
        <div class="menu-box">
            <div class="menu-top-box">
                <p style="margin-left: 90px;">상품코드</p>
                <p style="margin-left: 360px;">제품명</p>
                <p style="margin-left: 355px;">용량</p>
                <p style="margin-left: 210px;">원가</p>
                <p style="margin-left: 195px;">추가</p>
            </div>
            <div class="menu-list">
                <div class="menu-info" v-for="(item, idx) in goods">
                    <p style="flex-basis: 90px;">{{ item.code }}</p>
                    <p style="flex-basis: 400px;">{{ item.title }}</p>
                    <p style="flex-basis: 100px;">{{ item.capacity }}</p>
                    <p style="flex-basis: 80px;">{{ item.price }}원</p>
                    <Btn btntype="LightSolid" class="list-btn1">추가</Btn>
                </div>
            </div>
        </div>
    </div>

    <div class="scan-text-box1">
            <p class="barcode-scan-text2">스캔이 되지 않는 경우</p>
            <p class="barcode-scan-text3">문제 해결</p>
            <p class="barcode-scan-text2">혹은</p>
            <p class="barcode-scan-text3">바코드 입력</p>
        </div>
 </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import { ref, computed } from 'vue';

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

const goodCount = computed(() => goods.value.length);
</script>

<style scoped>
.menu-box {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
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

.menu-list-topbox1 {
    display: flex;
}

.menu-info {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    border-bottom: solid 1px #C1C9BF;
    font-size: 20px;
}

.list-btn1 {
    width: 56px;
    height: 35px;
    padding: 0px;
    padding-top: 12px;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 10px;
}

.list_btn2 {
    width: 100px;
    height: 20px;
    margin-left: auto;
    margin-right: 100px;
    margin-left: 900px;
    margin-top: 150px;
}

.title-text1 {
    font-size: 28px;
    font-weight: bold;
    float: left;
    margin-left: 100px;
    margin-top: 70px;
}

.material-symbols-rounded {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 225px;
  color: var(--ngray200);
  margin-top: 350px;
  margin-right: 190px;
}

.material-symbols-rounded2 {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.barcode-scan-text1 {
    font-size: 20px;
    font-weight: 500;
    color: var(--ngray300);
    margin: 0 auto;
    margin-top: 10px;
}

.scan-text-box1 {
    display: flex;
    margin-top: 350px;
    justify-content: center;
}

.barcode-scan-text2 {
    margin-right: 10px;
    font-size: 20px;
    color: var(--ngray300);
    font-weight: 500;
}

.barcode-scan-text3 {
    margin-right: 10px;
    font-size: 20px;
    font-weight: 500;
}

.search {
  border-radius: 4px;
  border: #ebf3e9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
  background-color: #ebf3e9;
  padding: 8px;
  gap: 4px;
  color: var(--ngray600);
  width: 500px;
  margin-top: 150px;
  margin-left: -100px;

}

.search_input {
  background-color: #ebf3e9;
  font-family: Pretendard;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  width: 90%;
  outline: none;
}
</style>