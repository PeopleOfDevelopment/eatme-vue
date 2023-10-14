<template>
  <Sidebar></Sidebar>
  <div id="main-wrapper" class="all">
    <p class="p-text1">구매내역</p>
    <div class="p-menus1" v-for="(item, idx) in goods" :key="idx">
      <div class="p-img1"></div>
      <div class="p-menus2">
        <p class="m-name1">{{ item.martName }}</p>
        <p class="g-name1">{{ item.itemNm }}</p>
        <p class="d-text1">{{ item.discountRat }}%</p>
        <p class="t-text1">{{ item.salePrc }}원</p>
        <p class="o-text2">8000원</p>
      </div>
      <div class="p-menus3">
        <p class="d-text2">{{ item.day }}</p>
          <div class="btn-box1">
            <Btn class="t-btn2" btntype="outline" style="width: 136px;" @click="handle_toggle">
              리뷰 작성</Btn>
            <Btn class="t-btn1" btntype="outlineGray" style="width: 136px" @click="handle_toggle2">
              문의하기
            </Btn>
          </div>
      </div>
    </div>

    <div class="black-bg" v-show="reviewModal">
      <div class="modal1">
        <p class="t1">리뷰 작성</p>
        <div class="starCheck">
          <p class="star-text1">별점</p>
          <div class="star-rating">
            <div class="star" v-for="index in 5" :key="index" @click="check(index)">
              <span v-if="index < score">★</span>
              <span v-if="index >= score">☆</span>
            </div>
          </div>
        </div>
        <div>
          <form>
            <textarea></textarea>
          </form>
        </div>
        <Btn btntype="outlineGray" style="width: 120px; height: 25px; padding: 10px;
             border-radius: 10px; float: left; margin-left: 65%; margin-top: 8px;"
             @click="handle_toggle">취소</Btn>
        <Btn btntype="solid" style="width: 120px; height: 25px; padding: 10px;
             border-radius: 10px; float: right; margin-right: 5%;
             margin-top: 8px;">작성</Btn>
      </div>
    </div>

    <div class="black-bg" v-show="QnaModal">
      <div class="modal1">
        <p class="t1">문의 작성</p>
        <div>
          <input type="text" class="qna-text1" placeholder="제목을 입력해주세요">
        </div>
        <div>
          <form>
            <textarea></textarea>
          </form>
        </div>
        <Btn btntype="outlineGray" style="width: 120px; height: 25px; padding: 10px;
             border-radius: 10px; float: left; margin-left: 65%; margin-top: 8px;"
             @click="handle_toggle2">취소</Btn>
        <Btn btntype="solid" style="width: 120px; height: 25px; padding: 10px;
             border-radius: 10px; float: right; margin-right: 5%;
             margin-top: 8px;">작성</Btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from '../../common/components/Btn.vue';
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import { ref, onMounted } from 'vue';
import { ApiUtils } from '../../common/utils/ApiUtils';

const goods = ref([]);
const score = ref(0);
const reviewModal = ref(false);
const QnaModal = ref(false);

const handle_toggle = () => {
    reviewModal.value = !reviewModal.value;
}

const handle_toggle2 = () => {
  QnaModal.value = !QnaModal.value;
}

const check = (index) => {
  score.value = index + 1;
}

const apiUtils = new ApiUtils();

const testData = {
  ordererName: 'testOrdererName'
}

async function query() {
  const result = await apiUtils.post('/api/purchaseHistory/query', testData);
  goods.value = result.data
  console.log(goods.value);
};

onMounted(() => {
  query();
})

</script>

<style scoped>
.all {
  font-family: Pretendard;
  margin-left: auto;
  width: 87%;
}

.p-text1 {
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  padding-left: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.p-menus1 {
  background-color: white;
  height: 196px;
  margin: 0 auto;
  border-top: solid 1px #dde5db;
  display: flex;
  margin: 5px;
}

.p-menus2 {
  width: 30%;
  margin-right: auto;
}

.p-menus3 {
  width: 50%;
  margin-left: auto;
  margin-top: 60px;
  text-align: center;
}

.p-img1 {
  background-color: black;
  width: 166px;
  height: 150px;
  margin: 20px;
  margin-right: auto;
  margin-left: 80px;
}

.m-name1 {
  font-size: 20px;
  text-align: left;
  color: #8b938a;
  margin-bottom: 0px;
  margin-top: 20px;
}

.g-name1 {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 0px;
}

.d-text1 {
  font-weight: bold;
  color: #fe5737;
  text-align: left;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
  float: left;
}

.t-text1 {
  font-weight: bold;
  text-align: left;
  float: right;
  margin-top: 10px;
  margin-right: 77%;
  margin-bottom: 0px;
}

.o-text2 {
  text-align: left;
  float: left;
  margin-top: 5px;
  font-size: 14px;
  color: #8f918d;
  text-decoration: line-through;
}

.d-text2 {
  text-align: right;
  float: left;
  margin-left: 250px;
  padding-top: 15px;
  color: #757874;
}

.t-btn1 {
  float: right;
  margin-left: 280px;
  margin-top: 10px;
}

.t-btn2 {
  float: right;
  margin-left: 280px;
  margin-top: -10px;
}

.btn-box1 {
  display: flex;
  flex-direction: column;
}

.black-bg{
    width: 1670px;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
    position: fixed;
    left: 0;
    top: 0;
    margin-left: 249px;
}

.modal1 {
    width: 60%;
    height: 75%;
    background-color: white;
    border: solid 1px #DDE5DB;
    border-radius: 10px;
    margin: 0 auto;
    font-family: Pretendard;
    margin-top: 5%;
}

.t1 {
    color: #161D17;
    padding-top: 40px;
    font-weight: bold;
    font-size: 34px;
    float: left;
    margin-left: 50px;
}

.starCheck {
  display: flex;
  margin-top: 10%;
  margin-left: 50px;
}

.star-text1 {
  font-size: 20px;
  font-weight: 500;
}

.star-rating {
  display: flex;
  margin-left: 20px;
}

.star span {
  font-size: 20px;
}

textarea {
  width: 90%;
  height: 480px;
  margin-top: 10px;
  border-radius: 10px;
  border: solid 2px var(--ngray200);
}

.qna-text1 {
  width: 88%;
  height: 30px;
  margin-top: 10px;
  border-radius: 10px;
  border: solid 2px var(--ngray200);
  font-family: Pretendard;
  font-size: 18px;
  padding: 12px;
}
</style>
