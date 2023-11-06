<template>
  <div id="main-wrapper" v-if="isVisible">
    <div class="top-box">
      <div class="top-box-items">
        <span class="material-symbols-rounded back-btn" @click="goBack()">
          chevron_left
        </span>
        <p class="top-box-text1">상품 정보 입력</p>
        <Btn btntype="solid" class="top-box-btn1" @click="insert()">확인</Btn>
      </div>
    </div>
    <div class="goods-input-section">
      <div class="img-box1">
        <img :src="itemImgData" class="img-real1" />
      </div>
      <div class="goods-input-wrap">
        <div class="form-box1">
          <div class="form1">
            <p class="form-text1">제품명</p>
          </div>
          <div class="form-input-box1">
            <input type="text" class="form-input1" v-model="itemNm" />
            <span class="material-symbols-rounded">cancel</span>
          </div>
        </div>
        <div class="form-box-set1">
          <div class="form-box3">
            <div class="form3">
              <p class="form-text3">수량</p>
            </div>
            <div class="form-input-wrap">
              <div class="form-input-box3">
                <input
                  type="number"
                  class="form-input3 form-num"
                  dir="rtl"
                  v-model="itemAmt" />
              </div>
              <p class="input-text">개</p>
            </div>
          </div>
        </div>
        <div class="form-box1">
          <div class="form1">
            <p class="form-text1">유통기한</p>
          </div>
          <div class="form-input-wrap">
            <div class="form-input-box4">
              <input
                type="date"
                class="form-input4"
                dir="rtl"
                v-model="itemDate" />
            </div>
            <p class="input-text">까지</p>
          </div>
        </div>

        <div class="form-box1">
          <div class="form1">
            <p class="form-text1">원가</p>
          </div>
          <div class="form-input-wrap">
            <div class="form-input-box4">
              <input
                type="number"
                class="form-input4 form-num"
                dir="rtl"
                v-model="itemPrice" />
            </div>
            <p class="input-text">원</p>
          </div>
        </div>

        <div class="form-box1">
          <div class="form1">
            <p class="form-text1">할인율</p>
          </div>
          <div class="box1-btns1">
            <button class="btnbox active" @click="change_btn">
              {{ discount1 }}%
            </button>
            <button class="btnbox" @click="change_btn">{{ discount2 }}%</button>
            <button class="btnbox" @click="change_btn">{{ discount3 }}%</button>
            <button class="btnbox" @click="change_btn">{{ discount4 }}%</button>
            <button class="btnbox" @click="change_btn">{{ discount5 }}%</button>
            <button class="btnbox" @click="change_btn">{{ discount6 }}%</button>
          </div>
        </div>
      </div>
    </div>
    <div class="total-box">
      <p class="total-text1">판매가</p>
      <p class="total-price1">{{ totalPrice }}원</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from '../../common/components/Btn.vue';
import { ref, onMounted, defineEmits, defineProps, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const isVisible = ref(true);

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      itemCd: '',
      corpCd: '',
      itemPrc: 0,
      saleAmt: 0,
    }),
  },

  emitFunction: Function,
  toggleIsShow3: Function,
});

const discount1 = ref(10);
const discount2 = ref(25);
const discount3 = ref(30);
const discount4 = ref(50);
const discount5 = ref(70);
const discount6 = ref(90);

const selectDiscountRat = ref();

const change_btn = (e) => {
  var btns = document.querySelectorAll('.btnbox');
  btns.forEach(function (btn, i) {
    if (e.currentTarget == btn) {
      btn.classList.add('active');
      selectDiscountRat.value = parseInt(e.currentTarget.textContent);
    } else {
      btn.classList.remove('active');
    }
  });
};

const itemNm = ref(props.data.itemNm);
const itemAmt = ref();
const itemDate = ref('');
const itemPrice = ref(props.data.itemPrc);
const itemCd = ref(props.data.itemCd);
const corpCd = ref(props.data.corpCd);
const itemBarcode = ref('654321');
const useYn = ref(true);

const totalPrice = computed(() => {
  const totalPrice = itemPrice.value * (1 - selectDiscountRat.value / 100);
  return isNaN(totalPrice) ? 0 : totalPrice.toFixed(0);
});

const insert = async () => {
  const itemData = [
    {
      itemCd: itemCd.value,
      corpCd: corpCd.value,
      itemAmt: itemAmt.value,
      selectDiscountRat: selectDiscountRat.value,
      itemExpdate: itemDate.value,
      itemPrc: itemPrice.value,
      itemNm: itemNm.value,
    },
  ];

  console.log(itemData);

  props.emitFunction('eventName', itemData);
  isVisible.value = false;
  props.toggleIsShow3();
};

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
  getItemImg();
});

const goBack = () => {
  props.toggleIsShow3();
};
</script>

<style scoped>
.top-box {
  border-bottom: solid 1px #dde5db;
}

.top-box-items {
  display: flex;
  margin-left: 100px;
  align-items: center;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form1 {
  display: flex;
}
.form-text1 {
  float: left;
  font-size: 16px;
  color: var(--gray500);
  margin-left: 50px;
  margin-bottom: 0px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.form-input-box1 {
  display: flex;
  margin-left: 50px;
  border-bottom: solid 1px var(--gray200);
  width: 95%;
  height: 48px;
}
.form-input1 {
  border: none;
  width: 95%;
  font-size: 20px;
  font-weight: 600;
}
.goods-input-section input {
  font-family: Pretendard;
}
.material-symbols-rounded {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
.form-box-set1 {
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
.form-text2 {
  float: left;
  font-size: 16px;
  color: var(--gray500);
  margin-left: 50px;
  margin-bottom: 0px;
  margin-top: 20px;
}
.form-input-box2 {
  display: flex;
  margin-left: 50px;
  border-bottom: solid 1px var(--gray200);
  width: 95%;
  height: 48px;
}
.form-input2-1 {
  border: none;
  width: 41px;
  font-size: 20px;
}
.form-input-box2-1 {
  display: flex;
  margin-left: 25px;
  border-bottom: solid 1px var(--gray200);
  width: 41px;
  height: 48px;
  margin-top: 38.5px;
}
.form-input2 {
  border: none;
  width: 100%;
  font-size: 20px;
}
.form-box3 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form3 {
  display: flex;
}
.form-text3 {
  float: left;
  font-size: 16px;
  color: var(--gray500);
  margin-left: 50px;
  margin-bottom: 0px;
  margin-top: 20px;
}
.form-input-box3 {
  display: flex;
  margin-left: 50px;
  border-bottom: solid 1px var(--gray200);
  width: 94%;
  height: 48px;
}
.form-input3 {
  border: none;
  width: 100%;
  font-size: 20px;
}
.form-input-box4 {
  display: flex;
  margin-left: 50px;
  border-bottom: solid 1px var(--gray200);
  width: 92%;
  height: 48px;
}
.form-input4 {
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

.btnbox:hover,
.btnbox.active {
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
.total-text1 {
  font-size: 28px;
  float: left;
  margin-left: 20px;
  font-weight: bold;
  color: var(--ngray500);
  margin-top: 25px;
}
.total-price1 {
  font-size: 34px;
  font-weight: bold;
  float: right;
  margin-right: 20px;
  margin-top: 20px;
}
.back-btn {
  font-size: 28px;
  padding: 18px 10px 18px 0;
  cursor: pointer;
}
.goods-input-section {
  display: flex;
}
.goods-input-wrap {
  flex: 1 0 0;
  margin-right: 75px;
}
.input-text {
  font-size: 20px;
  color: #c5c7c3;
  float: right;
  word-break: keep-all;
  padding: 10px;
}
.form-input-wrap {
  display: flex;
  align-items: flex-end;
  gap: 12px;
}
.form-num::-webkit-outer-spin-button,
.form-num::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
