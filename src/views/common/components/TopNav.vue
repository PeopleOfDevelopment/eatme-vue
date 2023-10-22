<template>
  <div id="top-nav" v-if="navType === 'location'" class="nav-location">
    <div class="location-box" @click="showLocation">
      <span class="material-symbols-rounded location-icon">location_on</span>
      <Btn btntype="textGray" class="user-location">{{ userLocation }}</Btn>
    </div>
    <div class="location-box">
      <span class="material-symbols-rounded filter-icon">tune</span>
      <Btn btntype="textGray" class="location-filter">{{ locationFilter }}</Btn>
    </div>
  </div>
  <!--탭 버튼 예시
    <TopNav navType="tabs" :tabList="['상품', '매장']"
    :currentTab="currentTab" :changeTab="changeTab"></TopNav>
    currentTab 값을 이용해서 v-if로 보여질 페이지를 결정-->
  <div id="top-nav" v-else-if="navType === 'tabs'" class="nav-tabs">
    <Btn
      v-for="(tab, index) in tabList"
      :key="index"
      btntype="textGray"
      class="tab-button"
      :class="{ clicked: currentTab === index }"
      @click="changeTab(index)">
      {{ tab }}
    </Btn>
  </div>
  <!--하위 페이지 예시
    <TopNav navType="title" subtitle="하위 페이지" buttonShow="Disabled" buttonText="확인"></TopNav>-->
  <div id="top-nav" v-else-if="navType === 'title'" class="nav-title">
    <div class="subtitle-container">
      <span class="material-symbols-rounded prev-btn" @click="$emit('close')">
        chevron_left
      </span>
      <span class="subtitle-text">{{ subtitle }}</span>
    </div>
    <Btn v-if="buttonShow !== 'none'" :btntype="buttonShow">
      {{ buttonText }}
    </Btn>
  </div>
  <div v-else></div>
  <div
    class="location-wrap"
    :class="{ show: modalOpen }"
    ref="locationWrap"></div>
  <!--<SelectLocation v-if="modalOpen" />-->
</template>

<script setup>
import { ref } from 'vue';
import Btn from './Btn.vue';
import SelectLocation from '../../purchase/select-location/SelectLocation.vue';

const userLocation = ref('상명대학교');
const locationFilter = ref('500m 이내');
const modalOpen = ref(false);
const locationWrap = ref(null);

const showLocation = () => {
  toggleModal();
  new daum.Postcode({
    oncomplete: (data) => {
      let addr = data.roadAddress; //도로명주소
      userLocation.value = addr;
      toggleModal();
    },
  }).embed(locationWrap.value);
};

const props = defineProps({
  navType: {
    type: String,
    default: 'location',
  },
  tabList: {
    type: Array,
  },
  currentTab: {
    type: Number,
  },
  changeTab: Function,
  subtitle: {
    type: String,
    default: '하위 페이지 제목',
  },
  buttonShow: {
    type: String,
    default: 'none',
  },
  buttonText: {
    type: String,
    default: '등록하기',
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
  position: sticky;
  top: 0;
  z-index: 998;
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
/*탭 버튼*/
.nav-tabs {
  display: flex;
  justify-content: center;
  gap: 60px;
}
.tab-button {
  padding: 20px 0 19px;
  border-radius: 0;
  margin-bottom: 2px;
}
.clicked {
  color: var(--ngray800);
  border-bottom: 2px solid var(--primary-def);
  margin-bottom: 0;
}
/*하위 페이지 제목*/
.subtitle-container {
  color: var(--ngray800);
  flex: 1 0 0;
  display: flex;
  align-items: center;
}

.prev-btn {
  font-size: 28px;
  padding: 18px 10px 18px 0;
  cursor: pointer;
}
.subtitle-text {
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
}
.location-wrap {
  display: none;
  position: absolute;
  z-index: 999;
  margin-inline: 75px;
  border: 1px solid var(--ngray100);
  border-top: 0;
}
.show {
  display: block;
}
</style>
