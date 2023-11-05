<template>
    <div id="main-wrapper">
        <div class="top-box">
            <div class="top-box-items">
                <span class="material-symbols-rounded" @click="goBack()">arrow_back_ios</span>
                <p class="top-box-text1">상품 정보 수정</p>
                <Btn btntype="solid" class="top-box-btn1" @click="editComplete('editData')">수정</Btn>
            </div>
        </div>
        <div class="img-box1">
            <img :src="itemImgData" class="img-real1"/>
        </div>
        <div class="form-box1">
            <div class="form1">
                <p class="form-text1">제품명</p>
            </div>
            <div class="form-input-box1">
                <input type="text" class="form-input1" v-model="itemNm">
                <span class="material-symbols-rounded">cancel</span>
            </div>
        </div>
        <div class="form-box-set1">
            <div class="form-box3">
                <div class="form3">
                    <p class="form-text3">수량</p>
                </div>
                <div class="form-input-box3">
                    <input type="text" class="form-input3" dir="rtl" v-model="itemAmt">
                </div>
            </div>
            <p style="font-size: 20px; color: #c5c7c3;
        float: right; margin-right: 70px; margin-top: 60px;"
        >개</p>
        </div>
        <div class="form-box1">
            <div class="form1">
                <p class="form-text1">유통기한</p>
            </div>
            <div class="form-input-box4">
                <input type="text" class="form-input4" dir="rtl" v-model="itemDate">
            </div>
        </div>
        <p style="font-size: 20px; color: #c5c7c3;
        float: right; margin-right: 70px; margin-top: -30px;"
        >까지</p>
        <div class="form-box1">
            <div class="form1">
                <p class="form-text1">원가</p>
            </div>
            <div class="form-input-box4">
                <input type="text" class="form-input4" dir="rtl" v-model="itemPrice">
            </div>
        </div>
        <p style="font-size: 20px; color: #c5c7c3;
        float: right; margin-right: 70px; margin-top: -30px;"
        >원</p>
        <div class="form-box1">
            <div class="form1">
                <p class="form-text1">할인율</p>
            </div>
            <div class="box1-btns1">
                <button class="btnbox active" @click="change_btn">{{discount1}}%</button>
                <button class="btnbox" @click="change_btn">{{discount2}}%</button>
                <button class="btnbox" @click="change_btn">{{discount3}}%</button>
                <button class="btnbox" @click="change_btn">{{discount4}}%</button>
                <button class="btnbox" @click="change_btn">{{discount5}}%</button>
                <button class="btnbox" @click="change_btn">{{discount6}}%</button>
            </div>
        </div>
        <div class="total-box">
            <p class="total-text1">판매가</p>
            <p class="total-price1">{{ (itemPrice * (1 - (selectDiscountRat/100))).toFixed(0) }}원</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Btn from '../../common/components/Btn.vue';
import { ref, onMounted, reactive, getCurrentInstance } from 'vue';
import { defineProps } from 'vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
import axios from 'axios';

const props = defineProps({
    data: {
        type: Object,
        default: () => ({
            itemCd: '',
            corpCd: '',
            discountRat: 0,
            salePrc: 0,
            saleAmt: 0,
            itemBarcode: '',
        }),
    },

    toggleIsShow1: Function,
});

const discount1 = ref(10);
const discount2 = ref(25);
const discount3 = ref(30);
const discount4 = ref(50);
const discount5 = ref(70);
const discount6 = ref(90);

const selectDiscountRat = ref(props.data.discountRat);

const change_btn = (e) => {
    var btns = document.querySelectorAll(".btnbox");
        btns.forEach(function(btn, i) {
        if(e.currentTarget == btn) {
            btn.classList.add("active");
            selectDiscountRat.value = parseInt(e.currentTarget.textContent);
        } else {
            btn.classList.remove("active");
        }
    });
};

const itemNm = ref(props.data.itemNm);
const itemAmt = ref(props.data.saleAmt);
const itemDate = ref(props.data.itemExpdate);
const itemPrice = ref(props.data.salePrc);
const itemCd = ref(props.data.itemCd);
const corpCd = ref(props.data.corpCd);
const itemBarcode = ref(props.data.itemBarcode);

const editData = reactive([{
    itemCd: itemCd.value,
    corpCd: corpCd.value,
    discountRat: selectDiscountRat.value,
    salePrc: itemPrice.value,
    saleAmt: itemAmt.value,
    itemBarcode: itemBarcode.value,
}]);

const editedData = reactive([{
    itemCd: editData.itemCd,
    corpCd: editData.corpCd,
    discountRat: editData.discountRat,
    salePrc: editData.salePrc,
    saleAmt: editData.saleAmt,
    itemBarcode: editData.itemBarcode,
}]);


const apiUtils = new ApiUtils();

async function update() {
  try {
    const result = await apiUtils.post('/api/goodsReg/update', editedData);
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

const toggleEditing = (field) => {
  if (field === 'editData') {
    editedData.corpCd = editData.corpCd;
    editedData.itemCd = editData.itemCd;
    editedData.discountRat = editData.discountRat;
    editedData.salePrc = editData.salePrc;
    editedData.saleAmt = editData.saleAmt;
    editedData.itemBarcode = editData.itemBarcode;
  }
};

const editComplete = (field) => {
  if (field === 'editData') {
    editData.corpCd = editedData.corpCd;
    editData.itemCd = editedData.itemCd
    editData.discountRat = editedData.discountRat;
    editData.salePrc = editedData.salePrc;
    editData.saleAmt = editedData.saleAmt;
    editData.itemBarcode = editedData.itemBarcode;
  }
  update();
  toggleEditing(field);
};

const goBack = () => {
    props.toggleIsShow1();
}

//이미지
const testData = {
  UUID: '',
  imgNm: '',
  imgLoc: '',
  corpCd: props.data.corpCd || '',
  itemCd: props.data.itemCd || '',
  userId: 'admin',
};

const itemImgData = ref('');

async function getItemImg() {
  if (!testData.corpCd || !testData.itemCd) {
    itemImgData.value = require('../../../assets/img/eatme.jpg');
  }

  const reader = new FileReader();
  try {
    const result = await axios.get('/api/file/getImg', {
      responseType: 'blob',
      params: {
        corpCd: props.data.corpCd,
        itemCd: props.data.itemCd,
      },
    });
    reader.onload = () => {
      itemImgData.value = reader.result;
    };
    const blob = new Blob([result.data], { type: 'image/jpeg' });
    reader.readAsDataURL(blob);
    // itemImgData.value = result;
  } catch (error) {
    console.error('이미지를 불러올 수 없습니다.', error);
    itemImgData.value = require('../../../assets/img/eatme.jpg');
  }
}

onMounted(() => {
    console.log(props.data);
    getItemImg();
})

</script>

<style scoped>
.top-box {
    border-bottom: solid 1px #DDE5DB;
}

.top-box-items {
    display: flex;
    margin-left: 100px;
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
.top-box-btn1 {
    margin-left: auto;
    padding: 10px 50px;
    margin-right: 80px;
}
.img-box1 {
    position: relative;
    width: 491px;
    height: 470px;
    background-color: #bdbdbd;
    float: left;
    margin-left: 100px;
}
.img-real1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.change-btn1 {
    position: absolute;
    top: 85%;
    left: 70%;
    width: 100px;
    height: 30px;
    padding-bottom: 8px;
}
.form-box1 {
    width: 1005px;
    display: flex;
    flex-direction: column;
}
.form1 {
    display: flex;
}
.form-text1{
    float: left;
    font-size: 16px;
    color: var(--gray500);
    margin-left: 50px;
    margin-bottom: 0px;
    margin-top: 15px;
    margin-bottom: 10px;
}
.form-input-box1{
    display: flex;
    margin-left: 50px;
    border-bottom: solid 1px var(--gray200);
    width: 95%;
    height: 48px;
}
.form-input1{
    border: none;
    width: 95%;
    font-size: 20px;
    font-weight: 600;
    font-family: Pretendard;
}
.material-symbols-rounded {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.form-box-set1{
    display: flex;
}
.form-box2 {
    width: 386.5px;
    display: flex;
    flex-direction: column;
}
.form2 {
    display: flex;
}
.form-text2{
    float: left;
    font-size: 16px;
    color: var(--gray500);
    margin-left: 50px;
    margin-bottom: 0px;
    margin-top: 20px;
}
.form-input-box2{
    display: flex;
    margin-left: 50px;
    border-bottom: solid 1px var(--gray200);
    width: 95%;
    height: 48px;
}
.form-input2-1{
    border: none;
    width: 41px;
    font-size: 20px;
}
.form-input-box2-1{
    display: flex;
    margin-left: 25px;
    border-bottom: solid 1px var(--gray200);
    width: 41px;
    height: 48px;
    margin-top: 38.5px;
}
.form-input2{
    border: none;
    width: 100%;
    font-size: 20px;
}
.form-box3 {
    width: 1005px;
    display: flex;
    flex-direction: column;
}
.form3 {
    display: flex;
}
.form-text3{
    float: left;
    font-size: 16px;
    color: var(--gray500);
    margin-left: 50px;
    margin-bottom: 0px;
    margin-top: 20px;
}
.form-input-box3{
    display: flex;
    margin-left: 50px;
    border-bottom: solid 1px var(--gray200);
    width: 94%;
    height: 48px;
}
.form-input3{
    border: none;
    width: 100%;
    font-size: 20px;
}
.form-input-box4{
    display: flex;
    margin-left: 50px;
    border-bottom: solid 1px var(--gray200);
    width: 92%;
    height: 48px;
}
.form-input4{
    border: none;
    width: 100%;
    font-size: 20px;
}
.box1-btns1 {
    display: flex;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 0px;
}

.btnbox {
    width: 84px;
    height: 44px;
    margin-left: 30px;
    color: var(--gray900);
    background-color: #dde5db;
    padding: 8px 18px;
    border-radius: 24px;
    font-weight: 500;
    border: 0px;
    font-size: 20px;
    font-family: Pretendard;
}

.btnbox:hover, .btnbox.active {
    background-color: var(--secondary-def);
    color: #fff;
}
.total-box {
    width: 1029px;
    height: 92px;
    border-top: solid 1px #00a664;
    position: absolute;
    bottom: 0px;
    margin-left: 31%;
}
.total-text1{
    font-size: 28px;
    float: left;
    margin-left: 20px;
    font-weight: bold;
    color: var(--ngray500);
    margin-top: 25px;
}
.total-price1{
    font-size: 34px;
    font-weight: bold;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
}
</style>