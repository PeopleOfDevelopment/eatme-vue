<template>
  <div class="dimmed">
    <div class="modal select-location">
      <div ref="locationWrap"></div>
    </div>
  </div>
</template>

<script setup>
import Btn from '../../common/components/Btn.vue';
import { ref } from 'vue';

const props = defineProps(['searchLocation']);
const emits = defineEmits(['searchLocation']);

const locationWrap = ref(null);

new daum.Postcode({
  oncomplete: (data) => {
    const addr = ref('');
    const extraAddr = ref('');

    if (data.userSeletedType === 'R') {
      addr = data.roadAddress;
    } else {
      addr = data.jibunAddress;
    }

    if (data.userSelectedType === 'R') {
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraAddr += data.bname;
      }
      // 건물명, 공동주택일 경우 추가
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraAddr +=
          extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
      }
      // 참고항목 추가
      if (extraAddr !== '') {
        extraAddr = ' (' + extraAddr + ')';
      }
    } else {
    }
  },
}).embed(locationWrap.value);
</script>

<style scoped>
.dimmed {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 65px;
  padding-inline: 75px;
  z-index: 99;
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
