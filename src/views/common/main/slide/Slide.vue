<template>
  <div class="slide-section">
    <transition name="slide">
      <div class="slides">
        <div
          v-for="(item, index) in state.items"
          :key="index"
          class="slide-item"
          :style="{
            transform: `translateX(${slideTranslateX(index)}%)`,
          }">
          <img alt="메인 배너" :src="require(`@/assets/img/${item}.jpg`)" />
        </div>
      </div>
    </transition>
    <div class="slide-button-container">
      <Btn btntype="slideNav" @click="prevSlide" class="prev-button">
        <span class="material-symbols-rounded">chevron_left</span>
      </Btn>
      <Btn btntype="slideNav" @click="nextSlide" class="next-button">
        <span class="material-symbols-rounded">chevron_right</span>
      </Btn>
    </div>
    <div class="slide-pagenation-container">
      <Btn btntype="slideNav" class="slide-pagenation">
        <span>{{ state.currentIndex + 1 }}</span>
        /
        <span>{{ state.items.length }}</span>
      </Btn>
    </div>
  </div>
</template>

<script setup>
import Btn from '../../components/Btn.vue';
import { reactive } from 'vue';

const state = reactive({
  currentIndex: 0,
  items: ['banner01', 'banner02', 'banner03'],
});

const prevSlide = () => {
  state.currentIndex =
    (state.currentIndex + state.items.length - 1) % state.items.length;
  console.log('prevSlide: ' + state.currentIndex);
};
const nextSlide = () => {
  state.currentIndex = (state.currentIndex + 1) % state.items.length;
  console.log('nextSlide: ' + state.currentIndex);
};
const slideTranslateX = (index) => {
  console.log('index - current: ' + (index - state.currentIndex));
  return (index - state.currentIndex) * 100;
};
</script>

<style scoped>
.slide-section {
  background-color: var(--primary-l4);
  height: 395px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slides {
  margin-inline: auto;
  display: flex;
}
.slide-button-container,
.slide-pagenation-container {
  position: absolute;
  width: calc(100% - 40px);
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-inline: 20px;
}
.slide-pagenation-container {
  bottom: 0;
}
.slide-button-container .slide-nav-button {
  border-radius: 50%;
}
.slide-item {
  transition: transform 0.3s ease-in-out;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  position: absolute;
  inset: 0px;
}
.slides img {
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
}
.slide-pagenation {
  position: absolute;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 12px;
  width: 36px;
  gap: 4px;
  bottom: 28px;
  right: 0;
  margin-right: 72px;
  cursor: inherit;
}
.slide-pagenation span {
  width: 16px;
}
</style>
