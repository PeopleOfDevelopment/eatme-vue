<template>
  <div id="top-nav" v-if="navType === 'location'" class="nav-location">
    <div class="location-box" @click="toggleModal">
      <span class="material-symbols-rounded location-icon">location_on</span>
      <Btn btntype="textGray" class="user-location">{{ userLocation }}</Btn>
    </div>
    <div class="location-box">
      <span class="material-symbols-rounded filter-icon">tune</span>
      <Btn btntype="textGray" class="location-filter">{{ locationFilter }}</Btn>
    </div>
  </div>
  <div id="top-nav" v-else-if="navType === 'tabs'" class="nav-tabs">
    <Btn v-for="tab in tabs" :key="tab" btntype="textGray" class="tab-button">
      {{ tab }}
    </Btn>
  </div>
  <div id="top-nav" v-else-if="navType === 'title'" class="nav-title"></div>
  <div v-else></div>
  <SelectLocation v-if="modalOpen" />
</template>

<script setup>
import { ref, computed } from 'vue';
import Btn from './Btn.vue';
import SelectLocation from '../../purchase/select-location/SelectLocation.vue';

const userLocation = ref('상명대학교');
const locationFilter = ref('500m 이내');
const modalOpen = ref(false);

const props = defineProps({
  navType: {
    type: String,
    default: 'location',
  },
  tabs: {
    type: Array,
  },
});

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};
</script>

<style scoped>
#top-nav {
  padding-inline: 75px;
  display: flex;
  border-bottom: 1px solid var(--ngray100);
  background-color: var(--gray-white);
  align-items: center;
}
.nav-location {
  justify-content: space-between;
  gap: 16px;
  padding-block: 8px 12px;
}
.location-box {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.user-location {
  flex: 1 0 0;
  font-size: 20px;
  padding: 10px;
  display: flex;
  color: var(--ngray800);
}
.location-filter {
  padding-right: 0;
  color: var(--ngray500);
}
.location-icon {
  color: var(--ngray800);
}
.filter-icon {
  color: var(--ngray500);
}
.nav-tabs {
  display: flex;
  justify-content: center;
  gap: 60px;
}
.tab-button {
  padding: 20px 0 19px;
  border-radius: 0;
}
.clicked {
  color: var(--ngray800);
  border-bottom: 2px solid var(--primary-def);
}
</style>
