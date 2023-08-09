<template>
    <Sidebar></Sidebar>
    <div id="main-wrapper">
        <div class="top-box">
            <div class="top-box-items">
                <span class="material-symbols-rounded">arrow_back_ios</span>
                <p class="top-box-text1">제품 정보 입력</p>
                <Btn btntype="solid" class="top-box-btn1">확인</Btn>
            </div>
        </div>
        <div class="img-box1">
            <div class="change-btn1">
                <Btn btntype="opacityBlack">사진 변경</Btn>
            </div>
        </div>
        <div class="form-box1">
            <div class="form1">
                <p class="form-text1">제품명</p>
            </div>
            <div class="form-input-box1">
                <input type="text" class="form-input1">
                <span class="material-symbols-rounded">cancel</span>
            </div>
        </div>
        <div class="form-box-set1">
            <div class="form-box2">
                <div class="form2">
                    <p class="form-text2">용량</p>
                </div>
                <div class="form-input-box2">
                    <input type="text" class="form-input2" dir="rtl">
                </div>
            </div>
            <p style="font-size: 20px; color: #c5c7c3;
            margin-top: 60px; margin-bottom: 0px; margin-left: 50px;"
            >g</p>
            <p style="font-size: 20px; color: #c5c7c3;
            margin-top: 60px; margin-bottom: 0px; margin-left: 30px;"
            >x</p>
            <div class="form-input-box2-1">
                <input type="text" class="form-input2-1">
            </div>
            <div class="form-box3">
                <div class="form3">
                    <p class="form-text3">수량</p>
                </div>
                <div class="form-input-box3">
                    <input type="text" class="form-input3" dir="rtl">
                </div>
            </div>
            <p style="font-size: 20px; color: #c5c7c3;
        float: right; margin-right: 70px; margin-top: 60px;"
        >개</p>
        </div>
        <div class="form-box1">
            <div class="form1">
                <p class="form-text1">유통기한</p>
            </div>
            <div class="form-input-box4">
                <input type="text" class="form-input4" dir="rtl">
            </div>
        </div>
        <p style="font-size: 20px; color: #c5c7c3;
        float: right; margin-right: 70px; margin-top: -30px;"
        >까지</p>
        <div class="form-box1">
            <div class="form1">
                <p class="form-text1">원가</p>
            </div>
            <div class="form-input-box4">
                <input type="text" class="form-input4" dir="rtl">
            </div>
        </div>
        <p style="font-size: 20px; color: #c5c7c3;
        float: right; margin-right: 70px; margin-top: -30px;"
        >원</p>
        <div class="form-box1">
            <div class="form1">
                <p class="form-text1">할인율</p>
            </div>
            <div class="box1-btns1">
                <button class="btnbox active" @click="change_btn">10%</button>
                <button class="btnbox" @click="change_btn">25%</button>
                <button class="btnbox" @click="change_btn">30%</button>
                <button class="btnbox" @click="change_btn">50%</button>
                <button class="btnbox" @click="change_btn">70%</button>
                <button class="btnbox" @click="change_btn">90%</button>
            </div>
        </div>
        <div class="total-box">
            <p class="total-text1">판매가</p>
            <p class="total-price1">6,675원</p>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import Btn from '../../common/components/Btn.vue';

const change_btn = (e) => {
    var btns = document.querySelectorAll(".btnbox");
                btns.forEach(function(btn, i) {
                    if(e.currentTarget == btn) {
                        btn.classList.add("active");
                    }
                    else {
                        btn.classList.remove("active");
                    }
                });
                console.log(e.currentTarget);
};
</script>

<style scoped>
.top-box {
    border-bottom: solid 1px #DDE5DB;
}

.top-box-items {
    display: flex;
    margin-left: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.top-box-text1 {
    font-size: 28px;
    font-weight: bold;
    margin-left: 40px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.material-symbols-rounded {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;
}
.top-box-btn1 {
    margin-left: auto;
    padding: 10px 50px;
    margin-right: 80px;
}
.img-box1 {
    position: relative;
    width: 491px;
    height: 470px;
    background-color: #bdbdbd;
    float: left;
    margin-left: 100px;
}
.change-btn1 {
    position: absolute;
    top: 85%;
    left: 67%;
}
.form-box1 {
    width: 1005px;
    display: flex;
    flex-direction: column;
}
.form1 {
    display: flex;
}
.form-text1{
    float: left;
    font-size: 16px;
    color: var(--gray500);
    margin-left: 50px;
    margin-bottom: 0px;
    margin-top: 15px;
    margin-bottom: 10px;
}
.form-input-box1{
    display: flex;
    margin-left: 50px;
    border-bottom: solid 1px var(--gray200);
    width: 95%;
    height: 48px;
}
.form-input1{
    border: none;
    width: 95%;
    font-size: 20px;
    font-weight: 600;
    font-family: Pretendard;
}
.material-symbols-rounded {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.form-box-set1{
    display: flex;
}
.form-box2 {
    width: 386.5px;
    display: flex;
    flex-direction: column;
}
.form2 {
    display: flex;
}
.form-text2{
    float: left;
    font-size: 16px;
    color: var(--gray500);
    margin-left: 50px;
    margin-bottom: 0px;
    margin-top: 20px;
}
.form-input-box2{
    display: flex;
    margin-left: 50px;
    border-bottom: solid 1px var(--gray200);
    width: 95%;
    height: 48px;
}
.form-input2-1{
    border: none;
    width: 41px;
    font-size: 20px;
}
.form-input-box2-1{
    display: flex;
    margin-left: 25px;
    border-bottom: solid 1px var(--gray200);
    width: 41px;
    height: 48px;
    margin-top: 38.5px;
}
.form-input2{
    border: none;
    width: 100%;
    font-size: 20px;
}
.form-box3 {
    width: 450.5px;
    display: flex;
    flex-direction: column;
}
.form3 {
    display: flex;
}
.form-text3{
    float: left;
    font-size: 16px;
    color: var(--gray500);
    margin-left: 25px;
    margin-bottom: 0px;
    margin-top: 20px;
}
.form-input-box3{
    display: flex;
    margin-left: 25px;
    border-bottom: solid 1px var(--gray200);
    width: 92%;
    height: 48px;
}
.form-input3{
    border: none;
    width: 100%;
    font-size: 20px;
}
.form-input-box4{
    display: flex;
    margin-left: 50px;
    border-bottom: solid 1px var(--gray200);
    width: 92%;
    height: 48px;
}
.form-input4{
    border: none;
    width: 100%;
    font-size: 20px;
}
.box1-btns1 {
    display: flex;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 0px;
}

.btnbox {
    width: 84px;
    height: 44px;
    margin-left: 30px;
    color: var(--gray900);
    background-color: #dde5db;
    padding: 8px 18px;
    border-radius: 24px;
    font-weight: 500;
    border: 0px;
    font-size: 20px;
    font-family: Pretendard;
}

.btnbox:hover, .btnbox.active {
    background-color: var(--secondary-def);
    color: #fff;
}
.total-box {
    width: 1029px;
    height: 92px;
    border-top: solid 1px #00a664;
    position: absolute;
    bottom: 0px;
    margin-left: 31%;
}
.total-text1{
    font-size: 28px;
    float: left;
    margin-left: 20px;
    font-weight: bold;
    color: var(--ngray500);
    margin-top: 25px;
}
.total-price1{
    font-size: 34px;
    font-weight: bold;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
}
</style>