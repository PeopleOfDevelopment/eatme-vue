<template>
    <Sidebar pageType="seller"></Sidebar>
    <div id="main-wrapper" v-if="!isShow && !isShow2 && !isShow3">
        <div style="height: 850px; overflow-y: scroll;">
            <p class="title-text1">제품 등록</p>
            <div v-if="goodCount === 0">
                <span class="material-symbols-rounded" 
                style="font-size: 225px; color: var(--ngray200);
                margin-top: 350px; margin-right: 190px;">box_add</span>
                <p class="barcode-scan-text1">등록된 제품이 없습니다.</p>
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
                        <p style="flex-basis: 100px;">상품코드</p>
                        <p style="flex-basis: 550px">제품명</p>
                        <p style="flex-basis: 90px;">원가</p>
                        <p style="flex-basis: 80px;">추가</p>
                    </div>
                    <div class="menu-list">
                        <div class="menu-info" v-for="(item, idx) in goods" v-show="shouldDisplay(item)">
                            <p style="flex-basis: 100px;">{{ item.itemCd }}</p>
                            <p style="flex-basis: 550px;">{{ item.itemNm }}</p>
                            <p style="flex-basis: 90px;">{{ item.itemPrc }}원</p>
                            <Btn btntype="LightSolid" class="list-btn1"
                            @click="isShowing3(item)" style="flex-basis: 70px; margin-bottom: 10px;">추가</Btn>
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
                        <p style="flex-basis: 100px;">상품코드</p>
                        <p style="flex-basis: 500px;">제품명</p>
                        <p style="flex-basis: 90px;">원가</p>
                        <p style="flex-basis: 80px;">수정</p>
                        <p style="flex-basis: 80px">삭제</p>
                    </div>
                    <div class="menu-list">
                        <div class="menu-info" v-for="(item, idx) in goods">
                            <p style="flex-basis: 100px;">{{ item.itemCd }}</p>
                            <p style="flex-basis: 500px;">{{ item.itemNm }}</p>
                            <p style="flex-basis: 90px;">{{ item.itemPrc }}원</p>
                            <Btn btntype="LightSolid" class="list-btn1"
                            @click="isShowing2(item)" style="flex-basis: 70px; margin-bottom: 10px;">수정</Btn>
                            <Btn btntype="LightSolid" class="list-btn3" 
                            @click="deleteItem(item)" style="flex-basis: 70px; margin-bottom: 10px;">삭제</Btn>
                        </div>
                    </div>
                </div>
            </div>

            <div class="scan-text-box1">
                <p class="barcode-scan-text3" @click="goPage('itemreg')" style="cursor: pointer;">제품 등록하기</p>
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
                            <p style="flex-basis: 30%;">제품명</p>
                            <p style="flex-basis: 5%;">수량</p>
                            <p style="flex-basis: 5%;">원가</p>
                            <p style="flex-basis: 5%;">할인율</p>
                            <p style="flex-basis: 5%;">판매가</p>
                            <!-- <p style="flex-basis: 5%;">수정</p> -->
                            <p style="flex-basis: 5%;">삭제</p>
                        </div>
                        <div class="menu-list">
                            <div class="menu-info" v-for="item in select_goods" :key="item.itemCd">
                                <p style="flex-basis: 10%;">{{ item[0].itemCd }}</p>
                                <p style="flex-basis: 30%;">{{ item[0].itemNm }}</p>
                                <p style="flex-basis: 5%;">{{ item[0].itemAmt }}</p>
                                <p style="flex-basis: 5%;">{{ item[0].itemPrc }}원</p>
                                <p style="flex-basis: 5%;">{{ item[0].selectDiscountRat }}%</p>
                                <p style="flex-basis: 5%;">{{ (item[0].itemPrc * (1 - (item[0].selectDiscountRat/100))).toFixed(0) }}원</p>
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
    <div id="main-wrraper" v-if="isShow2">
        <ItemUpdate 
        :data="updateData2" 
        :toggleIsShow2="toggleIsShow2"
        @updateData="handleUpdateData"></ItemUpdate>
    </div>
    <div id="main-wrraper" v-if="isShow3">
        <GoodsSelect :data="insertData" :emitFunction="emitFunction" :toggleIsShow3="toggleIsShow3"></GoodsSelect>
    </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import ItemUpdate from '../item-reg/ItemUpdate.vue';
import GoodsUpdate from '../goods-reg/GoodsUpdate.vue';
import ItemReg from '../item-reg/ItemReg.vue';
import GoodsSelect from '../goods-reg/SelectGoods.vue';
import { ref, computed, watch, onMounted } from 'vue';
import { router } from '@/router';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
import axios from 'axios';

const goods = ref([]);
const goods2 = ref([]);
const select_goods = ref([]);

//데이터 조회
const apiUtils = new ApiUtils();

const testData = {
  itemCd: '',
  itemNm : '',
  corpCd : sessionStorage.getItem('corpCd'),
}

async function query2() {
  const result = await apiUtils.post('/api/goodsReg/query', testData);
  goods2.value = result.data
};

async function insertItem() {
    const insertData = select_goods.value.map(item => ({
        corpCd: item[0].corpCd,
        itemCd: item[0].itemCd,
        discountRat: item[0].selectDiscountRat || 0,
        salePrc: item[0].itemPrc || 0,
        saleAmt: item[0].itemAmt || 0,
        itemExpdate: item[0].itemExpdate,
        itemBarcode: ''
    }));

    try {
        const result = await apiUtils.post('/api/goodsReg/insert', insertData);
        alert('등록완료');
        router.go(0);
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

const emitFunction = (eventName, eventData) => {
    select_goods.value.push(eventData);
}

const toggleIsShow1 = () => {
    isShow.value = !isShow.value;
    console.log(select_goods);
}

const toggleIsShow2 = () => {
    isShow2.value = !isShow2.value;
    console.log(select_goods);
}

const toggleIsShow3 = () => {
    isShow3.value = !isShow3.value;
    console.log(select_goods);
}

const isShow = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const updateData = ref([]);
const updateData2 = ref([]);
const insertData = ref([]);

const handleGoBack = () => {
    isShow.value = true;
}

const isShowing = (item) => {
    isShow.value = !isShow.value;
    updateData.value = item;
}

const isShowing2 = (item) => {
    isShow2.value = !isShow2.value;
    updateData2.value = item;
}

const isShowing3 = (item) => {
    isShow3.value = !isShow3.value;
    insertData.value = item;
}

const handleUpdateData = (updatedData) => {
    updateData2.value = updatedData;
}

async function update() {
  try {
    const result = await apiUtils.post('/api/itemReg/update', goods.value);
    if (result === 1) {
      alert('수정되었습니다.');
      location.reload();
      console.log('성공');
    } else {
      console.log('실패');
    }
  } catch (error) {
    console.error('오류 발생:', error);
  }
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

//이미지
// const itemImgData = ref([]);

// async function getItemImg(select_goods) {
//   const imgData = {
//     UUID: '',
//     imgNm: '',
//     imgLoc: '',
//     corpCd: select_goods.corpCd || '',
//     itemCd: select_goods.itemCd || '',
//     userId: 'admin',
//   };

//   if (!imgData.corpCd || !imgData.itemCd) {
//     select_goods.imgSrc = require('../../../assets/img/eatme.jpg');
//   } else {
//     try {
//       const result = await axios.get('/api/file/getImg', {
//         responseType: 'blob',
//         params: {
//           corpCd: select_goods.corpCd,
//           itemCd: select_goods.itemCd,
//         },
//       });
//       const reader = new FileReader();
//       reader.onload = () => {
//         select_goods.imgSrc = reader.result;
//       };
//       const blob = new Blob([result.data], { type: 'image/jpeg' });
//       reader.readAsDataURL(blob);
//       // itemImgData.value = result;
//     } catch (error) {
//       console.error('이미지를 불러올 수 없습니다.', error);
//       select_goods.imgSrc = require('../../../assets/img/eatme.jpg');
//     }
//   }
// }

onMounted(async() => {
    const result = await apiUtils.post('/api/itemReg/query', testData);
    goods.value = result.data

    query2();
})

const goodCount = computed(() => goods.value.length);
const selectCount = computed(() => select_goods.value.length);
const totalPrice = computed(() => {
    const priceData = select_goods.value.map(item => (item[0].itemPrc * (1 - (item[0].selectDiscountRat/100))));
    return parseInt(priceData.reduce((accmulator, currentValue) => accmulator + currentValue, 0));
});

const showingPopup = ref(false);

const showPopup = () => {
    showingPopup.value = true;
};

const hidePopup = () => {
    showingPopup.value = false;
}

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

.menu-img {
    width: 60px;
    height: 60px;
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
}

.img-real1 {
    width: 100%;
    height: 100%;
    object-fit: fill;
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
    font-size: 20px;
    font-weight: 700;
    text-decoration: underline;
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