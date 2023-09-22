<template>
    <Sidebar isSeller="true"></Sidebar>
    <div id="main-wrapper">
        <p class="title-text1">제품 등록</p>
        <div v-if="goodCount === 0">
            <span class="material-symbols-rounded" 
            style="font-size: 225px; color: var(--ngray200);
             margin-top: 350px; margin-right: 190px;">barcode_scanner</span>
            <p class="barcode-scan-text1">상품의 바코드를 스캔해주세요</p>
        </div>

        <div v-if="goodCount > 0">
            <div class="menu-list-topbox1" v-if="DataModify === false">
                <div class="search">
                    <span class="material-symbols-rounded">search</span>
                    <input
                        class="search_input"
                        type="text"
                        placeholder="상품 코드 혹은 제품명 검색" />
                </div>
                <Btn btntype="ghostWhite" class="list_btn2" style="color: #000; font-weight: 300;"
                @click="showModify">
                    데이터 편집</Btn>
            </div>
            <div class="menu-box" v-if="DataModify === false">
                <div class="menu-top-box">
                    <p style="margin-left: 95px;">상품코드</p>
                    <p style="margin-left: 360px;">제품명</p>
                    <p style="margin-left: 345px;">용량</p>
                    <p style="margin-left: 210px;">원가</p>
                    <p style="margin-left: 195px;">추가</p>
                </div>
                <div class="menu-list">
                    <div class="menu-info" v-for="(item, idx) in goods">
                        <p style="flex-basis: 90px;">{{ item.code }}</p>
                        <p style="flex-basis: 400px;">{{ item.title }}</p>
                        <p style="flex-basis: 100px;">{{ item.capacity }}</p>
                        <p style="flex-basis: 80px;">{{ item.price }}원</p>
                        <Btn btntype="LightSolid" class="list-btn1"
                        @click="moveToDestination(item)">추가</Btn>
                    </div>
                </div>
            </div>

            <div class="menu-list-topbox1" v-if="DataModify === true">
                <div class="search">
                    <span class="material-symbols-rounded">search</span>
                    <input
                        class="search_input"
                        type="text"
                        placeholder="상품 코드 혹은 제품명 검색" />
                </div>
                    <Btn btntype="textGray" class="list_btn1-2" style="font-weight: 500;"
                    @click="deleteChecked">
                        삭제</Btn>
                    <Btn btntype="solid" class="list_btn2-1" style="font-weight: 500;"
                    @click="hideModify">
                        확인</Btn>
            </div>
            <div class="menu-box" v-if="DataModify === true">
                <div class="menu-top-box">
                    <input style="margin-left: 52px;"
                        type="checkbox"
                        v-model="selectAll"
                        @change="toggleSelectAll" />
                    <p style="margin-left: 115px;">상품코드</p>
                    <p style="margin-left: 310px;">제품명</p>
                    <p style="margin-left: 285px;">용량</p>
                    <p style="margin-left: 155px;">원가</p>
                    <p style="margin-left: 135px;">수정</p>
                    <p style="margin-left: 130px;">삭제</p>
                </div>
                <div class="menu-list">
                    <div class="menu-info" v-for="(item, idx) in goods">
                        <input style="flex-basis: 5px;"
                            type="checkbox"
                            v-model="item.checked" />
                        <p style="flex-basis: 90px;">{{ item.code }}</p>
                        <p style="flex-basis: 400px;">{{ item.title }}</p>
                        <p style="flex-basis: 100px;">{{ item.capacity }}</p>
                        <p style="flex-basis: 80px;">{{ item.price }}원</p>
                        <Btn btntype="LightSolid" class="list-btn1"
                        @click="goPage('itemreg')">수정</Btn>
                        <Btn btntype="LightSolid" class="list-btn3" 
                        @click="removeItem2(Item)">삭제</Btn>
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

        <div class="popup-box">
            <span @click="showPopup" class="material-symbols-rounded"
            style="font-size: 40px; color: var(--primary-def); cursor: pointer;">expand_less</span>

            <Transition name="slide">
                <div v-if="showingPopup" class="popup">
                    <span @click="hidePopup" class="material-symbols-rounded"
                    style="font-size: 40px; color: var(--primary-def); cursor: pointer;">expand_more</span>
                    <div class="popup-top">
                        <p class="popup-top-text1">추가된 상품</p>
                    </div>
                    <div class="popup-top2">
                        <p class="top-text1">총 상품 수</p>
                        <p class="top-text2">{{ selectCount }}개</p>
                        <p class="top-text1">판매가 합계</p>
                        <p class="top-text2">{{ totalPrice }}원</p>
                    </div>
                    <div class="menu-box">
                        <div class="menu-top-box">
                            <p style="margin-left: 40px;">상품코드</p>
                            <p style="margin-left: 80px;">사진</p>
                            <p style="margin-left: 250px;">제품명</p>
                            <p style="margin-left: 240px;">용량</p>
                            <p style="margin-left: 85px;">수량</p>
                            <p style="margin-left: 70px;">원가</p>
                            <p style="margin-left: 84px;">할인율</p>
                            <p style="margin-left: 75px;">판매가</p>
                            <p style="margin-left: 75px;">수정</p>
                            <p style="margin-left: 75px;">삭제</p>
                        </div>
                        <div class="menu-list">
                            <div class="menu-info" v-for="item in select_goods" :key="item.id">
                                <p style="flex-basis: 90px;">{{ item.code }}</p>
                                <div style="width: 60px; height: 60px; margin: 5px; background-color: #000;"></div>
                                <p style="flex-basis: 400px;">{{ item.title }}</p>
                                <p style="flex-basis: 100px;">{{ item.capacity }}</p>
                                <p style="flex-basis: 50px;">{{ item.quantity }}</p>
                                <p style="flex-basis: 80px;">{{ item.price }}원</p>
                                <p style="flex-basis: 80px;">{{ item.discount }}%</p>
                                <p style="flex-basis: 80px;">{{ item.discountprice }}원</p>
                                <Btn btntype="LightSolid" class="list-btn1">수정</Btn>
                                <Btn btntype="LightSolid" class="list-btn3"
                                @click="removeItem(item)">삭제</Btn>
                            </div>
                        </div>
                    </div>
                    <Btn btntype="solid" class="list-btn4">등록하기</Btn>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import { ref, computed, watchEffect } from 'vue';
import { router } from '@/router';

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
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 4봉",
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
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 3봉",
      price: 8900,
      discountprice: 6675,
      discount: 25,
      day: "2023-05-29",
      code: "154203215",
      capacity: "55g X 5",
      quantity: 1,
    },
    {
      id: 3,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 3봉",
      price: 8900,
      discountprice: 6675,
      discount: 25,
      day: "2023-05-29",
      code: "154203215",
      capacity: "55g X 5",
      quantity: 1,
    },
    {
      id: 4,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 3봉",
      price: 8900,
      discountprice: 6675,
      discount: 25,
      day: "2023-05-29",
      code: "154203215",
      capacity: "55g X 5",
      quantity: 1,
    },
]);

const select_goods = ref([]);

const goodCount = computed(() => goods.value.length);
const selectCount = computed(() => select_goods.value.length);
const totalPrice = computed(() => {
    const priceData = select_goods.value.map(item => item.discountprice);
    return priceData.reduce((accmulator, currentValue) => accmulator + currentValue, 0);
});

const showingPopup = ref(false);

const showPopup = () => {
    showingPopup.value = true;
};

const hidePopup = () => {
    showingPopup.value = false;
}

const moveToDestination = (item) => {
    select_goods.value.push({ ...item });
};

const removeItem = (item) => {
    const index = select_goods.value.indexOf(item);

    if (index !== -1) {
        select_goods.value.splice(index, 1);
    }
}

const removeItem2 = (item) => {
    const index = goods.value.indexOf(item);

    if (index !== -1) {
        goods.value.splice(index, 1);
    }
}

const DataModify = ref(false);

const showModify = () => {
    DataModify.value = true;
}

const hideModify = () => {
    DataModify.value = false;
}

const selectAll = ref(true);

const toggleSelectAll = () => {
  goods.value.forEach((good) => {
    good.checked = selectAll.value;
  });
};

watchEffect(() => {
  const allSelected = goods.value.every((good) => good.checked);
  selectAll.value = allSelected;
});

const deleteChecked = () => {
  goods.value = goods.value.filter((good) => !good.checked);
};

const clickedItem = ref(window.location.pathname.substring(1) || 'home');

const goPage = (page) => {
  if (page === 'home') router.push('/');
  else router.push('/' + page);
  clickedItem.value = page;
};
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
    padding: 5px;
    margin-top: 10px;
}

.list_btn1-2 {
    width: 100px;
    height: 20px;
    margin-left: 700px;
    margin-top: 150px;
    margin-right: auto;
}

.list_btn2 {
    width: 100px;
    height: 20px;
    margin-right: 100px;
    margin-top: 150px;
    margin-left: auto;
}

.list_btn2-1 {
    width: 100px;
    height: 20px;
    margin-right: 100px;
    margin-top: 150px;
    margin-left: auto;
}

.list-btn3 {
    width: 56px;
    height: 35px;
    padding: 5px;
    margin-top: 10px;
    color: var(--system-danger);
}

.list-btn4 {
    width: 150px;
    height: 35px;
    padding: 5px;
    margin-top: 10px;
    float: right;
    margin-right: 90px;
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
    margin-top: 100px;
    justify-content: center;
    z-index: 1;
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

.popup {
    position: absolute;
    height: 600px;
    width: 1670px;
    bottom: 0;
    right: 0;
    background-color: #fff;
    border-top: solid 1px #ccc;
    padding: 20px;
    transition: transform 0.3s ease;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    z-index: 99;
}

.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter, .slide-leave-to {
    transform: translateY(100%);
}

.popup-box {
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 1670px;
    border-top: solid 1px #ccc;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    z-index: 98;
}

.popup-top {
    display: flex;
}

.popup-top-text1 {
    font-size: 20px;
    font-weight: bold;
    margin-right: auto;
    margin-left: 100px;
}

.popup-top2 {
    display: flex;
    margin-left: 1250px;
    margin-bottom: -10px;
}

.top-text1 {
    margin-left: 30px;
    color: var(--ngray600);
}

.top-text2 {
    margin-left: 20px;
    font-weight: bold;
}
</style>