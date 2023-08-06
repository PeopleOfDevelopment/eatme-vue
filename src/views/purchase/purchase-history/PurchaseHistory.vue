<template>
  <Sidebar></Sidebar>
  <div id="main-wrapper" class="all">
    <p class="p-text1">구매내역</p>
    <div class="p-menus1" v-for="(item, idx) in goods">
      <div class="p-img1"></div>
      <div class="p-menus2">
        <p class="m-name1">{{ item.martName }}</p>
        <p class="g-name1">{{ item.title }}</p>
        <p class="d-text1">{{ item.discount }}%</p>
        <p class="t-text1">{{ item.price }}원</p>
        <p class="o-text2">8000원</p>
      </div>
      <div class="p-menus3">
        <p class="d-text2">{{ item.day }}</p>
        <Btn class="t-btn1" btntype="outline" style="width: 136px"
        @click="query">
          리뷰 작성
        </Btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from '../../common/components/Btn.vue';
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import { ref, watchEffect } from 'vue';

const goods = ref([
    {
      id: 0,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉",
      price: 6675,
      discount: 25,
      day: "2023.05.29",
      martName: "gs25 영통한아름점",
    },
    {
      id: 1,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 4봉",
      price: 6675,
      discount: 25,
      day: "2023.05.29",
      martName: "gs25 영통한아름점",
    },
    {
      id: 2,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 3봉",
      price: 6675,
      discount: 25,
      day: "2023.05.29",
      martName: "gs25 영통한아름점",
    },
    {
      id: 3,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 2봉",
      price: 6675,
      discount: 25,
      day: "2023.05.29",
      martName: "gs25 영통한아름점",
    },
    {
      id: 4,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 2봉",
      price: 6675,
      discount: 25,
      day: "2023.05.29",
      martName: "gs25 영통한아름점",
    },
    {
      id: 5,
      title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 1봉",
      price: 6675,
      discount: 25,
      day: "2023.05.29",
      martName: "gs25 영통한아름점",
    },
]);

const selectAll = ref(true);

watchEffect(() => {
  const allSelected = goods.value.every((item) => item.checked);
  selectAll.value = allSelected;
});

</script>

<style scoped>
.all {
  font-family: Pretendard;
  margin-left: auto;
  width: 87%;
}

.p-text1 {
  font-size: 36px;
  font-weight: bold;
  text-align: left;
  padding-left: 50px;
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
}

.m-name1 {
  font-size: 20px;
  text-align: left;
  color: #8b938a;
  margin-bottom: 0px;
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
  margin-right: 50px;
  margin-top: 18px;
}
</style>
