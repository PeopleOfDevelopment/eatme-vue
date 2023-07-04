<template>
    <div class="sideBar">
        <p class="eatMe">EAT ME</p>
        <div class="user">
            <div class="circle1">
                
            </div>
            <p style="float:left; margin-left: 10px;">로그인</p>
        </div>
        <div class="search">
            <input type="text" placeholder="제품 혹은 매장 검색">
        </div>
        <div class="menus">
            <p style="color: #00A664;">홈</p>
            <p>찜목록</p>
            <p>구매내역</p>
        </div>
        <Buttons color="#fff" text="장바구니"></Buttons>
        <Buttons color="#fff" text="판매관리" borderColor="solid 1px #A5ADA4"></Buttons>
    </div>
</template>

<script>
import Buttons from '../../components/Btn.vue';
    export default {
        components: {
            Buttons,
        }
    }
</script>

<style>
.sideBar {
    position: fixed;
    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    margin: 0px;
    background-color: white;
    border-right-style: solid;
    border-right-color: #DDE5DB;
    border-right-width: 1px;
}

.eatMe {
    font-family: Pretendard;
    font-weight: bold;
    font-size: 20px;
    margin-right: 140px;
    margin-top: 24px;
    margin-bottom: 24px;
    color: #00A664;
}

.user {
    float:left;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 24px;
    font-family: Pretendard;
    font-size: 16px;
    border-top: solid 1px #DDE5DB;
    border-bottom: solid 1px #DDE5DB;
}

.circle1 {
    float: left;
    width: 30px;
    height: 30px;
    border-radius: 22px;
    margin-top: 10px;
    background: #C1C9BF;
}

.search {
    position: relative;
    width: 100%;
}

input {
    width: 90%;
    font-size: 16px;
    font-family: Pretendard;
    background: #EBF3E9;
    border: #EBF3E9;
    padding: 8px;
    border-radius: 4px;
}

.menus {
    font-family: Pretendard;
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.menus p {
    text-align: left;
    font-weight: bold;
    color: #717971;
}
</style>