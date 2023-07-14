<template>
  <div id="top-nav" v-if="navType == 'location'" class="nav-location">
    <Btn btntype="textGray" class="user-location">{{ userLocation }}</Btn>
    <Btn btntype="textGray" class="location-filter">{{ locationFilter }}</Btn>
  </div>
  <div id="top-nav" v-else-if="state == 'tabs'" class="nav-tabs">
    <Btn v-for="tab in tabs" btntype="textGray">{{ tab }}</Btn>
  </div>
  <div id="top-nav" v-else-if="state == 'title'" class="nav-title"></div>
  <div v-else></div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Btn from './Btn2.vue';

const userLocation = ref('상명대학교');
const locationFilter = ref('500m 이내');

const props = defineProps({
  navType: {
    type: String,
    default: 'location',
  },
});
</script>

<style scoped>
#top-nav {
  padding: 8px 75px 12px;
  display: flex;
  border-bottom: 1px solid var(--ngray100);
  background-color: var(--gray-white);
  align-items: center;
}
.nav-location {
  justify-content: space-between;
  gap: 16px;
}
.user-location {
  flex: 1 0 0;
  font-size: 20px;
  padding: 10px;
  display: flex;
  color: var(--ngray800);
}
.location-filter {
  padding: 0;
  color: var(--ngray500);
}
</style>
