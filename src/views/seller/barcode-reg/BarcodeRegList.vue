<template>
    <Sidebar pageType="seller"></Sidebar>
    <div id="main-wrapper" v-if="!isShow && !isShow2">
        <div style="height: 850px; overflow-y: scroll;">
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
                            placeholder="상품 코드 혹은 제품명 검색"
                            v-model="search" />
                    </div>
                    <Btn btntype="ghostWhite" class="list_btn2" style="color: #000; font-weight: 300;"
                    @click="showModify">
                        데이터 편집</Btn>
                </div>
                <div class="menu-box" v-if="DataModify === false">
                    <div class="menu-top-box">
                        <p style="flex-basis: 15%;">상품코드</p>
                        <p style="flex-basis: 50%">제품명</p>
                        <p style="flex-basis: 10%;">용량</p>
                        <p style="flex-basis: 9.5%;">원가</p>
                        <p style="flex-basis: 6%;">추가</p>
                    </div>
                    <div class="menu-list">
                        <div class="menu-info" v-for="(item, idx) in goods" v-show="shouldDisplay(item)">
                            <p style="flex-basis: 15%;">{{ item.itemCd }}</p>
                            <p style="flex-basis: 50%;">{{ item.itemNm }}</p>
                            <p style="flex-basis: 10%;">{{ item.saleAmt }}</p>
                            <p style="flex-basis: 10%;">{{ item.itemPrc }}원</p>
                            <Btn btntype="LightSolid" class="list-btn1"
                            @click="moveToDestination(item)" style="flex-basis: 5%; margin-bottom: 10px;">추가</Btn>
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
                        <input style="flex-basis: 20px;"
                            type="checkbox"
                            v-model="selectAll"
                            @change="toggleSelectAll" />
                        <p style="flex-basis: 10%;">상품코드</p>
                        <p style="flex-basis: 30%;">제품명</p>
                        <p style="flex-basis: 10%;">용량</p>
                        <p style="flex-basis: 10%;">원가</p>
                        <p style="flex-basis: 5%;">수정</p>
                        <p style="flex-basis: 6%">삭제</p>
                    </div>
                    <div class="menu-list">
                        <div class="menu-info" v-for="(item, idx) in goods">
                            <input style="flex-basis: 20px;"
                                type="checkbox"
                                v-model="item.checked" />
                            <p style="flex-basis: 10%;">{{ item.itemCd }}</p>
                            <p style="flex-basis: 30%;">{{ item.itemNm }}</p>
                            <p style="flex-basis: 10%;">{{ item.saleAmt }}</p>
                            <p style="flex-basis: 10%;">{{ item.itemPrc }}원</p>
                            <Btn btntype="LightSolid" class="list-btn1"
                            @click="isShowing2(item)" style="flex-basis: 5%; margin-bottom: 10px;">수정</Btn>
                            <Btn btntype="LightSolid" class="list-btn3" 
                            @click="deleteItem(item)" style="flex-basis: 5%; margin-bottom: 10px;">삭제</Btn>
                        </div>
                    </div>
                </div>
            </div>

            <div class="scan-text-box1">
                <p class="barcode-scan-text2">스캔이 되지 않는 경우</p>
                <p class="barcode-scan-text3" @click="goPage('itemreg')">문제 해결</p>
                <p class="barcode-scan-text2">혹은</p>
                <p class="barcode-scan-text3">바코드 입력</p>
            </div>
        </div>

        <div class="popup-box">
            <span @click="showPopup" class="material-symbols-rounded"
            style="font-size: 40px; color: var(--primary-def); cursor: pointer;">expand_less</span>
            <div class="popup-top">
                <p class="popup-top-text1">추가된 상품</p>
                <div class="popup-top3">
                    <p class="top-text1">총 상품 수</p>
                    <p class="top-text2">{{ selectCount }}개</p>
                    <p class="top-text1">판매가 합계</p>
                    <p class="top-text2">{{ totalPrice }}원</p>
                </div>
            </div>
            <Transition name="slide">
                <div v-if="showingPopup" class="popup" style="overflow-y: scroll;">
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
                            <p style="flex-basis: 10%;">상품코드</p>
                            <p style="flex-basis: 70px;">사진</p>
                            <p style="flex-basis: 30%;">제품명</p>
                            <p style="flex-basis: 5%;">수량</p>
                            <p style="flex-basis: 5%;">원가</p>
                            <p style="flex-basis: 5%;">할인율</p>
                            <p style="flex-basis: 5%;">판매가</p>
                            <p style="flex-basis: 5%;">수정</p>
                            <p style="flex-basis: 5%;">삭제</p>
                        </div>
                        <div class="menu-list">
                            <div class="menu-info" v-for="item in select_goods" :key="item.id">
                                <p style="flex-basis: 10%;">{{ item.itemCd }}</p>
                                <div style="width: 55px; height: 55px; margin: 5px; background-color: #000;"></div>
                                <p style="flex-basis: 30%;">{{ item.itemNm }}</p>
                                <p style="flex-basis: 5%;">{{ item.saleAmt }}</p>
                                <p style="flex-basis: 5%;">{{ item.salePrc }}원</p>
                                <p style="flex-basis: 5%;">{{ item.discountRat }}%</p>
                                <p style="flex-basis: 5%;">{{ (item.salePrc * (1 - (item.discountRat/100))).toFixed(0) }}원</p>
                                <Btn btntype="LightSolid" class="list-btn1" style="flex-basis: 4%; margin-bottom: 10px;"
                                @click="isShowing(item)">수정</Btn>
                                <Btn btntype="LightSolid" class="list-btn3" style="flex-basis: 4%; margin-bottom: 10px;"
                                @click="removeItem(item)">삭제</Btn>
                            </div>
                        </div>
                    </div>
                    <Btn btntype="solid" class="list-btn4" @click="insertItem()">등록하기</Btn>
                </div>
            </Transition>
        </div>
    </div>
    <div id="main-wrraper" v-if="isShow">
        <GoodsUpdate :data="updateData"></GoodsUpdate>
    </div>
    <div id="main-wrraper" v-if="isShow2">
        <ItemUpdate :data="updateData2"></ItemUpdate>
    </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import ItemUpdate from '../item-reg/ItemUpdate.vue';
import GoodsUpdate from '../goods-reg/GoodsUpdate.vue';
import { ref, computed, watchEffect, onMounted } from 'vue';
import { router } from '@/router';
import { ApiUtils } from '@/views/common/utils/ApiUtils';

const goods = ref([]);
const goods2 = ref([]);
const select_goods = ref([]);

//데이터 조회
const apiUtils = new ApiUtils();

const testData = {
  itemCd: '',
  itemNm : '테스트아이템',
  corpCd : '테스트가맹점코드',
}

async function query() {
  const result = await apiUtils.post('/api/itemReg/query', testData);
  goods.value = result.data
  console.log(goods.value);
};

async function query2() {
  const result = await apiUtils.post('/api/goodsReg/query', testData);
  goods2.value = result.data
  console.log(goods2.value);
};

async function insertItem() {
    const insertData = select_goods.value.map(item => ({
        corpCd: '테스트가맹점코드',
        itemCd: item.itemCd,
        discountRat: item.discountRat || 0,
        salePrc: item.salePrc || 0,
        saleAmt: item.saleAmt || 0,
        itemExpdate: '2023-11-30',
        itemBarcode: '111111'
    }));

    try {
        const result = await apiUtils.post('/api/goodsReg/insert', insertData);
        alert('등록완료');
    } catch (error) {
        console.error('등록 오류 발생: ', error);
    }
}

async function deleteItem(item) {
    const deleteData = {
        itemCd: item.itemCd,
        corpCd: item.corpCd
    }
    
    try {
        const result = await apiUtils.post('/api/itemReg/delete', deleteData);
        goods.value = goods.value.filter(good => good.itemCd !== item.itemCd);
        console.log('삭제 완료');
    } catch (error) {
        console.error('오류 발생', error);
    }
}

const isShow = ref(false);
const isShow2 = ref(false);
const updateData = ref([]);
const updateData2 = ref([]);

const isShowing = (item) => {
    isShow.value = !isShow.value;
    updateData.value = item;
}

const isShowing2 = (item) => {
    isShow2.value = !isShow2.value;
    updateData2.value = item;
}

const search = ref('');

//검색기능
const shouldDisplay = (item) => {
    if (item && item.itemCd && item.itemNm) {
        const searchString = search.value.toLowerCase();
        return (
            item.itemCd.toLowerCase().includes(searchString) ||
            item.itemNm.toLowerCase().includes(searchString)
        );
    }
    return false;
};

onMounted(() => {
  query();
  query2();
})

const goodCount = computed(() => goods.value.length);
const selectCount = computed(() => select_goods.value.length);
const totalPrice = computed(() => {
    const priceData = select_goods.value.map(item => (item.salePrc * (1 - (item.discountRat/100))));
    return parseInt(priceData.reduce((accmulator, currentValue) => accmulator + currentValue, 0));
});

const showingPopup = ref(false);

const showPopup = () => {
    showingPopup.value = true;
};

const hidePopup = () => {
    showingPopup.value = false;
}

const moveToDestination = (item) => {
    const foundItem = goods2.value.find((good) => {
        return good.itemCd === item.itemCd && good.corpCd === item.corpCd;
    })

    if (foundItem) {
        select_goods.value.push(foundItem);
    }
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
    justify-content: space-around;
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
    height: 100px;
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

.popup-top3 {
    display: flex;
    margin-right: 100px;
}

.top-text1 {
    margin-left: 30px;
    color: var(--ngray600);
}

.top-text2 {
    margin-left: 20px;
    font-weight: bold;
}

.menu-info p {
    margin-top: 20px;
}
</style>