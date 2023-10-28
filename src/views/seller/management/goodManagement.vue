<template>
    <Sidebar pageType="seller"></Sidebar>
    <div id="main-wrapper">
        <Topnav navType="tabs" :tabList="['전체 상품', '픽업 관리', '배송 관리']"
        :currentTab="currentTab" :changeTab="changeTab"></Topnav>
       <div class="menu-box">
           <div class="menu-top-box">
               <p style="flex-basis: 90px;">상품코드</p>
               <p style="flex-basis: 60px;">사진</p>
               <p style="flex-basis: 296px;">제품명</p>
               <p style="flex-basis: 50px;">수량</p>
               <p style="flex-basis: 90px;">유통기한</p>
               <p style="flex-basis: 70px;">원가</p>
               <p style="flex-basis: 70px;">할인율</p>
               <p style="flex-basis: 70px;">판매가</p>
               <p style="flex-basis: 60px;">상태</p>
           </div>
           <div class="menu-list">
               <div class="menu-info" v-for="item in filteredItems">
                   <p style="flex-basis: 90px;">{{ item.itemCd }}</p>
                   <div class="menu-img"></div>
                   <p style="flex-basis: 296px;">{{ item.itemNm }}</p>
                   <p style="flex-basis: 50px;">{{ item.saleAmt }}</p>
                   <p style="flex-basis: 90px;">{{ item.itemExpdate }}</p>
                   <p style="flex-basis: 70px;">{{ item.salePrc }}원</p>
                   <p style="flex-basis: 70px;">{{ item.discountRat }}%</p>
                   <p style="flex-basis: 70px;">{{ (item.salePrc * (1 - (item.discountRat/100))).toFixed(0) }}원</p>
                   <p style="flex-basis: 60px;">
                    <span v-if="item.pickYn === null && item.pickYn !== '0' && item.pickYn !== '1'">-</span>
                    <span v-else-if="item.pickYn === '0'">배송 예정</span>
                    <span v-else-if="item.pickYn === '1'">픽업 예정</span>
                    <span v-else>에러</span>
                    </p>
               </div>
           </div>
       </div>
    </div>
</template>
   
<script setup lang="ts">
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import { ref, watch, onMounted } from 'vue';
import Topnav from '../../common/components/TopNav.vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
   
const goods = ref([]);
const filteredItems = ref([]);

const apiUtils = new ApiUtils();

const testData = {
  itemCd: 'Code',
  itemNm : '테스트아이템',
  corpCd : '테스트가맹점코드',
}

async function query() {
  const result = await apiUtils.post('/api/goodsMgm/query', testData);
  goods.value = result.data
  console.log(goods.value);

  updateFilteredItems();
};

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
            ...goods.value.sellingDeli
        ];
    } else if (currentTab.value === 1) {
        filteredItems.value = [...goods.value.sellingPick];
    } 
    else if (currentTab.value === 2) {
        filteredItems.value = [...goods.value.sellingDeli];
    }
}

onMounted(() => {
    query();
})
</script>
   
<style scoped>  
.menu-box {
    width: 90%;
    margin: 0 auto;
}
.menu-top-box {
    display: flex;
    border-top: solid 1px #C1C9BF;
    border-bottom: solid 1px #C1C9BF;
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
    border-bottom: solid 1px #C1C9BF;
}

.menu-info p {
    margin-top: 18px;
}
   
.menu-img {
    width: 60px;
    height: 60px;
    background-color: #000;
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