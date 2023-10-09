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
            <Btn class="t-btn2" btntype="outline" style="width: 136px;">
              리뷰 작성</Btn>
            <Btn class="t-btn1" btntype="outlineGray" style="width: 136px">
              문의하기
            </Btn>
          </div>
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

const apiUtils = new ApiUtils();

const testData = {
  ordererName: 'testOrdererName1'
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
</style>
