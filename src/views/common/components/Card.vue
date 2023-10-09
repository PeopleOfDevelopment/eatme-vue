<template>
  <div
    class="card-box"
    :class="{ market: market }"
    v-for="(item, index) in itemList"
    :key="index"
    @click="$emit('itemSelected', item)">
    <div class="card-img"></div>
    <div v-if="market" class="card-info">
      <div class="place-name">{{ item.name }}</div>
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
const props = defineProps({
  itemList: {
    type: Array,
  },
  market: {
    type: Boolean,
    default: false,
  },
});
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
