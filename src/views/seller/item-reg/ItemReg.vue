<template>
  <Sidebar pageType="seller"></Sidebar>
  <div id="main-wrapper">
    <div class="top-box">
      <div class="top-box-items">
        <span
          class="material-symbols-rounded back-btn"
          @click="goPage('barcodereg-list')">
          chevron_left
        </span>
        <p class="top-box-text1">제품 정보 입력</p>
        <Btn btntype="solid" class="top-box-btn1" @click="insert()">확인</Btn>
      </div>
    </div>
    <div class="img-box1">
      <label for="photo">사진 변경</label>
      <input
        type="file"
        name="file"
        accept="image/*"
        required
        multiple
        ref="realUpload"
        id="photo"
        @change="handleImageUpload" />
      <div class="image-preview" v-if="latestUpload">
        <img
          :src="latestUpload?.preview"
          :data-file="latestUpload?.name"
          class="img-real1" />
      </div>
    </div>
    <div class="form-box1">
      <div class="form1">
        <p class="form-text1">제품명</p>
      </div>
      <div class="form-input-box1">
        <input type="text" class="form-input1" v-model="itemNm" />
        <span class="material-symbols-rounded">cancel</span>
      </div>
    </div>
    <!-- <div class="form-box-set1">
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
        </div> -->
    <!-- <div class="form-box1">
            <div class="form1">
                <p class="form-text1">유통기한</p>
            </div>
            <div class="form-input-box4">
                <input type="text" class="form-input4" dir="rtl" v-model="itemDate">
            </div>
        </div>
        <p style="font-size: 20px; color: #c5c7c3;
        float: right; margin-right: 70px; margin-top: -30px;"
        >까지</p> -->
    <div class="form-box1">
      <div class="form1">
        <p class="form-text1">원가</p>
      </div>
      <div class="form-input-box4">
        <input type="text" class="form-input4" dir="rtl" v-model="itemPrice" />
      </div>
    </div>
    <p
      style="
        font-size: 20px;
        color: #c5c7c3;
        float: right;
        margin-right: 70px;
        margin-top: -30px;
      ">
      원
    </p>
    <!-- <div class="form-box1">
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
        </div> -->
    <div class="total-box">
      <p class="total-text1">판매가</p>
      <p class="total-price1">{{ itemPrice }}원</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import { ApiUtils } from '../../common/utils/ApiUtils';
import { ref, onMounted, watch, computed } from 'vue';
import { router } from '@/router';

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

const listData = ref([]);

const itemRegGoods = ref([]);
const itemRegGoods2 = ref([]);

//const itemNm = ref('');
const itemNm = ref('');
const itemCp = ref('');
const itemCpx = ref('');
const itemAmt = ref('');
const itemDate = ref('');
const itemPrice = ref();
//테스트용
const itemCd = ref('Code');
const corpCd = ref('');
const itemBarcode = ref('654321');
const useYn = ref(true);

const totalPrice = computed(() => {
  const totalPrice = itemPrice.value * (1 - selectDiscountRat.value / 100);
  return isNaN(totalPrice) ? 0 : totalPrice.toFixed(0);
});

const apiUtils = new ApiUtils();

const insert = async () => {
  const seq: number = (await apiUtils.post('/api/itemReg/getSeq')) + 1;
  const imageInfo = {
    itemCd: seq,
    corpCd: sessionStorage.getItem('corpCd'),
    userId: sessionStorage.getItem('userId'),
    imgId: '',
    imgNm: '',
    imgLoc: '',
  };
  let formData = new FormData();
  formData.append('imageData', document.getElementById('photo')?.files[0]);
  formData.append('imageInfo', JSON.stringify(imageInfo));

  const itemData = [
    {
      itemCd: seq,
      corpCd: sessionStorage.getItem('corpCd'),
      itemBarcode: itemBarcode.value,
      itemNm: itemNm.value,
      itemPrc: itemPrice.value,
      useYn: useYn.value,
    },
  ];
  try {
    const result = await apiUtils.post('/api/itemReg/insert', itemData);
    await apiUtils.post('/api/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    itemRegGoods2.value = result.data;
    console.log('등록 성공: ', result.data);
    alert('등록 되었습니다.');
    router.push('/barcodereg-list');
  } catch (error) {
    console.error('등록 실패: ', error);
  }
};

const realUpload = ref(null);
const uploadFiles = ref([]);

const handleImageUpload = () => {
  const files = realUpload.value.files;

  if (files) {
    for (const file of files) {
      if (file.type.match('image/.*')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          uploadFiles.value = [
            { name: file.name, preview: event.target.result },
          ];
        };
        reader.readAsDataURL(file);
      }
    }
  }
};

const latestUpload = ref(null);
watch(uploadFiles, (newVal) => {
  latestUpload.value = newVal[newVal.length - 1];
});

const clickedItem = ref(window.location.pathname.substring(1) || 'home');

const goPage = (page) => {
  if (page === 'home') router.push('/');
  else router.push('/' + page);
  clickedItem.value = page;
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
.back-btn {
  font-size: 28px;
  padding: 18px 10px 18px 0;
  cursor: pointer;
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
  overflow: hidden;
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
  display: flex;
  align-items: center;
}
.form-input1 {
  border: none;
  width: 95%;
  font-size: 20px;
  font-weight: 600;
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
  width: 1005px;
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

.img-box1 label {
  position: absolute;
  top: 85%;
  left: 70%;
  width: 100px;
  height: 30px;
  padding: 8px 8px 8px 8px;
  background-color: black;
  color: white;
  opacity: 0.5;
  border-radius: 30px;
  font-size: 20px;
  z-index: 99;
}

.img-box1 input[type='file'] {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
}
</style>
