<template>
  <div class="dimmed">
    <div class="modal select-location">
      <div class="search-location">
        <input
          class="search-location-input"
          type="text"
          placeholder="도로명, 건물명 또는 지번으로 검색" />
      </div>
      <div class="saved-location">
        <Btn btntype="chip">내 위치</Btn>
        <Btn btntype="chip">집</Btn>
        <Btn btntype="chip">회사</Btn>
      </div>
      <div class="search-result">
        <div
          class="result-list"
          v-for="(result, index) in locationList"
          :key="index">
          <div class="result-location">{{ result.location }}</div>
          <div class="result-detail">{{ result.detail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from '../../common/components/Btn.vue';
import { ref } from 'vue';

const locationList = ref([
  { location: '상명대학교 서울캠퍼스', detail: '서울 종로구 홍지문2길 20' },
  {
    location: '상명대학교 천안캠퍼스',
    detail: '충남 천안시 동남구 상명대길 31',
  },
]);
</script>

<style scoped>
.dimmed {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 65px;
  padding-inline: 75px;
}
.modal {
  background-color: var(--gray-white);
  border-radius: 8px;
  max-width: 400px;
  padding: 24px;
}
.select-location {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.search-location {
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--ngray100);
}
.search-location-input {
  flex: 1 0 0;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  padding: 4px;
  outline: none;
}
.saved-location {
  display: flex;
  width: 100%;
  gap: 6px;
}
.chip {
  font-size: 16px;
}
.search-result {
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  width: 100%;
}
.result-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.result-location {
  font-weight: 700;
  font-size: 16px;
  color: var(--ngray800);
}
.result-detail {
  font-size: 14px;
  color: var(--ngray500);
}
</style>
