<template>
  <Sidebar pageType="seller"></Sidebar>
  <div id="main-wrapper">
    <div class="menu-box">
      <div class="menu-top-box">
        <p style="flex-basis: 90px">상품코드</p>
        <p style="flex-basis: 60px">사진</p>
        <p style="flex-basis: 296px">제품명</p>
        <p style="flex-basis: 50px">수량</p>
        <p style="flex-basis: 90px">유통기한</p>
        <p style="flex-basis: 70px">원가</p>
        <p style="flex-basis: 70px">할인율</p>
        <p style="flex-basis: 70px">판매가</p>
        <p style="flex-basis: 90px">판매</p>
        <p style="flex-basis: 90px">삭제</p>
      </div>
      <div class="menu-list">
        <div class="menu-info" v-for="item in filteredItems" :key="item.itemCd">
          <p style="flex-basis: 90px">{{ item.itemCd }}</p>
          <div class="menu-img">
            <img :src="item.imgSrc" class="img-real1" />
          </div>
          <p style="flex-basis: 296px">{{ item.itemNm }}</p>
          <p style="flex-basis: 50px">{{ item.saleAmt }}</p>
          <p style="flex-basis: 90px">{{ item.itemExpdate }}</p>
          <p style="flex-basis: 70px">{{ item.salePrc }}원</p>
          <p style="flex-basis: 70px">{{ item.discountRat }}%</p>
          <p style="flex-basis: 70px">
            {{ (item.salePrc * (1 - item.discountRat / 100)).toFixed(0) }}원
          </p>
          <Btn
            btntype="LightSolid"
            style="flex-basis: 70px; margin-bottom: 10px"
            @click="deleteGoods(item)">
            판매 완료
          </Btn>
          <Btn
            btntype="LightSolid"
            style="
              flex-basis: 70px;
              margin-bottom: 10px;
              color: var(--system-danger);
            "
            @click="deleteGoods(item)">
            삭제
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import { ref, watch, onMounted } from 'vue';
import Topnav from '../../common/components/TopNav.vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
import { router } from '@/router';
import axios from 'axios';

const goods = ref([]);
const filteredItems = ref([]);

const apiUtils = new ApiUtils();

const testData = {
  itemCd: '',
  itemNm: '',
  corpCd: sessionStorage.getItem('corpCd'),
};

async function query() {
  const result = await apiUtils.post('/api/goodsMgm/query', testData);
  goods.value = result.data;
  console.log(goods.value);

  updateFilteredItems();
}

async function deleteGoods(item) {
  const deleteData = [
    {
      itemCd: item.itemCd,
      corpCd: item.corpCd,
    },
  ];

  try {
    const result = await apiUtils.post('/api/goodsReg/delete', deleteData);
    router.go(0);
    console.log('삭제 완료');
  } catch (error) {
    console.error('오류 발생', error);
  }
}

const currentTab = ref(0);

const changeTab = (index) => {
  currentTab.value = index;
  updateFilteredItems();
};

const updateFilteredItems = () => {
  if (currentTab.value === 0) {
    filteredItems.value = [
      ...goods.value.sellingAll,
      ...goods.value.sellingPick,
      ...goods.value.sellingDeli,
    ];
  } else if (currentTab.value === 1) {
    filteredItems.value = [...goods.value.sellingPick];
  } else if (currentTab.value === 2) {
    filteredItems.value = [...goods.value.sellingDeli];
  }
};

//이미지
const itemImgData = ref([]);

async function getItemImg(item) {
  const imgData = {
    UUID: '',
    imgNm: '',
    imgLoc: '',
    corpCd: item.corpCd || '',
    itemCd: item.itemCd || '',
    userId: 'admin',
  };

  if (!imgData.corpCd || !imgData.itemCd) {
    item.imgSrc = require('../../../assets/img/eatme.jpg');
  } else {
    try {
      const result = await axios.get('/api/file/getImg', {
        responseType: 'blob',
        params: {
          corpCd: item.corpCd,
          itemCd: item.itemCd,
        },
      });
      const reader = new FileReader();
      reader.onload = () => {
        item.imgSrc = reader.result;
      };
      const blob = new Blob([result.data], { type: 'image/jpeg' });
      reader.readAsDataURL(blob);
      // itemImgData.value = result;
    } catch (error) {
      console.error('이미지를 불러올 수 없습니다.', error);
      item.imgSrc = require('../../../assets/img/eatme.jpg');
    }
  }
}

onMounted(async () => {
  await query();

  if (goods.value.sellingAll && goods.value.sellingAll.length > 0) {
    goods.value.sellingAll.forEach(async (item) => {
      if (item && item.corpCd && item.itemCd) {
        await getItemImg(item);
      }
    });
  } else {
    console.log('데이터 없음');
  }
});
</script>

<style scoped>
.menu-box {
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
}
.menu-top-box {
  display: flex;
  border-top: solid 1px #c1c9bf;
  border-bottom: solid 1px #c1c9bf;
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

.menu-info {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid 1px #c1c9bf;
}

.menu-info p {
  margin-top: 18px;
}

.menu-img {
  width: 60px;
  height: 60px;
  overflow: hidden;
}

.img-real1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.list-btn1 {
  width: 56px;
  height: 40px;
  padding: 0px;
  padding-top: 12px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
