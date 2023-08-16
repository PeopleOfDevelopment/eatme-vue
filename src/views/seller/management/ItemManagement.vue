<template>
    <Sidebar isSeller="true"></Sidebar>
    <div id="main-wrapper">
        <Topnav navType="tabs" :tabList="['전체 상품', '픽업 관리', '배송 관리']"
        :currentTab="currentTab" :changeTab="changeTab"></Topnav>
       <div class="menu-box">
           <div class="menu-top-box">
               <p style="margin-left: 50px;">상품코드</p>
               <p style="margin-left: 85px;">사진</p>
               <p style="margin-left: 210px;">제품명</p>
               <p style="margin-left: 195px;">용량</p>
               <p style="margin-left: 65px;">수량</p>
               <p style="margin-left: 70px;">유통기한</p>
               <p style="margin-left: 100px;">원가</p>
               <p style="margin-left: 90px;">할인율</p>
               <p style="margin-left: 85px;">판매가</p>
               <p style="margin-left: 90px;">상태</p>
           </div>
           <div class="menu-list">
               <div class="menu-info" v-for="(item, idx) in goods">
                   <p style="flex-basis: 90px;">{{ item.code }}</p>
                   <div class="menu-img"></div>
                   <p style="flex-basis: 296px;">{{ item.title }}</p>
                   <p style="flex-basis: 60px;">{{ item.capacity }}</p>
                   <p style="flex-basis: 10px;">{{ item.quantity }}</p>
                   <p style="flex-basis: 90px;">{{ item.day }}</p>
                   <p style="flex-basis: 70px;">{{ item.price }}원</p>
                   <p style="flex-basis: 70px;">{{ item.discount }}%</p>
                   <p style="flex-basis: 70px;">{{ item.discountprice }}원</p>
                   <p style="flex-basis: 60px;">{{ item.ispickup }}</p>
               </div>
           </div>
       </div>
    </div>
</template>
   
<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';
import { ref, watchEffect } from 'vue';
import Topnav from '../../common/components/TopNav.vue';
   
const goods = ref([
    {
        id: 0,
        title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉",
        price: 8900,
        discountprice: 6675,
        discount: 25,
        day: "2023-05-29",
        code: "154203215",
        capacity: "55g X 5",
        quantity: 1,
        ispickup: '-'
    },
    {
        id: 1,
        title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉",
        price: 8900,
        discountprice: 6675,
        discount: 25,
        day: "2023-05-29",
        code: "154203215",
        capacity: "55g X 5",
        quantity: 1,
        ispickup: '픽업 예정'
    },
    {
        id: 2,
        title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉",
        price: 8900,
        discountprice: 6675,
        discount: 25,
        day: "2023-05-29",
        code: "154203215",
        capacity: "55g X 5",
        quantity: 1,
        ispickup: '배송 예정'
    },
    {
        id: 3,
        title: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉",
        price: 8900,
        discountprice: 6675,
        discount: 25,
        day: "2023-05-29",
        code: "154203215",
        capacity: "55g X 5",
        quantity: 1,
        ispickup: '배송 예정'
    },
]);
   
const selectAll = ref(true);
   
watchEffect(() => {
    const allSelected = goods.value.every((item) => item.checked);
    selectAll.value = allSelected;
});

const currentTab = ref(0);

const changeTab = (index) => {
  currentTab.value = index;
};
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