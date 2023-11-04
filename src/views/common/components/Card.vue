<template>
  <div
    class="card-box"
    :class="{ market: market }"
    v-for="(item, index) in itemList"
    :key="index"
    @click="$emit('itemSelected', item)">
    <img :src="item.imgSrc" class="card-img"/>
    <div v-if="market" class="card-info">
      <div class="place-name">{{ item.corpNm }}</div>
      <div class="place-info">
        <span class="score-container">
          <span class="material-symbols-rounded icon-fill">star</span>
          {{ item.score }}
        </span>
      </div>
    </div>
    <div v-else class="card-info">
      <div class="place-info">
        <span class="place-name">{{ item.corpNm }}</span>
        <span class="place-time">
          <span class="material-symbols-rounded">schedule</span>
          3일
        </span>
      </div>
      <div class="product-info">
        <div class="pruduct-name">{{ item.itemNm }}</div>
        <div class="price-info">
          <div class="discount-price">
            <span class="discount-rate">{{ item.discountRat }}%</span>
            <span>{{ (item.itemPrc * (100 - item.discountRat)) / 100 }}원</span>
          </div>
          <div class="cost">{{ item.itemPrc }}원</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ApiUtils } from '../utils/ApiUtils';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const apiUtils = new ApiUtils();
const props = defineProps({
  itemList: {
    type: Array,
  },
  market: {
    type: Boolean,
    default: false,
  },
});

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

  if(!imgData.corpCd || !imgData.itemCd) {
    item.imgSrc = require('../../../assets/img/eatme.jpg');
  } else {
    try {
        const result = await axios.get('/api/file/getImg', {
        responseType: 'blob',
        params: {
            corpCd: item.corpCd,
            itemCd: item.itemCd
        }
        }); 
        const reader = new FileReader()
        reader.onload = () => {
        item.imgSrc = reader.result; 
        } 
        const blob = new Blob([result.data], { type : 'image/jpeg' })
        reader.readAsDataURL(blob) 
        // itemImgData.value = result;
    } catch (error) {
        console.error('이미지를 불러올 수 없습니다.', error);
        item.imgSrc = require('../../../assets/img/eatme.jpg'); 
    }
  }
}

onMounted(async () => {
    if (props.itemList && props.itemList.length > 0) {
        props.itemList.forEach(async (item) => {
        if (item && item.corpCd && item.itemCd) {
            await getItemImg(item);
        }
    });
    } else {
        console.log('데이터 없음');
    }
})
</script>

<style scoped>
.card-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 285px;
  cursor: pointer;
}
.card-img {
  width: 285px;
  height: 285px;
  background-color: var(--gray100);
}
.market .card-img {
  height: 180px;
}
.market .place-name {
  font-weight: 700;
}
.market .material-symbols-rounded {
  color: var(--secondary-def);
}
.card-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
}
.place-info {
  color: var(--ngray400);
  font-size: 14px;
  display: flex;
  gap: 4px;
}
.place-name {
  flex: 1 0 0;
}
.place-time,
.score-container {
  display: flex;
  align-items: end;
}
.place-info .material-symbols-rounded {
  font-size: 16px;
}
.product-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.discount-price {
  font-weight: 700;
  display: flex;
  gap: 4px;
}
.discount-rate {
  color: var(--secondary-def);
}
.cost {
  font-size: 14px;
  text-decoration-line: line-through;
  color: var(--ngray400);
}
</style>
