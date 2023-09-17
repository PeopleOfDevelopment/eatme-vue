<template>
  <div class="sub-title-container">
    <span class="sub-title">{{ title || '내 주변 마감 할인' }}</span>
    <Btn btntype="textThin">
      <span class="showmore">{{ button || '전체보기' }}</span>
      <span class="material-symbols-rounded">
        {{ buttonIcon || 'chevron_right' }}
      </span>
    </Btn>
  </div>
</template>

<script setup>
import Btn from './Btn.vue';
const props = defineProps({
  title: String,
  button: String,
  buttonIcon: String,
});
</script>

<style scoped>
.sub-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.sub-title {
  font-size: 28px;
  font-weight: 700;
  padding: 10px;
  color: var(--ngray800);
}
.showmore {
  font-size: 20px;
}
</style>
