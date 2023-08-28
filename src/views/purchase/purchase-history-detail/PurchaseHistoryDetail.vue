<template>
    <Sidebar></Sidebar>
    <div id="main-wrapper">
        <p class="text1">주문서</p>
        <div class="goods-box">
            <div class="text-box1">
                <p class="goods-text1">주문상품</p>
                <span class="material-symbols-rounded"
                style="margin-left: auto; height: 30px; margin-top: 40px; cursor: pointer;"
                :class="{ active: isClicked1 === 'Clicked1' }" @click="toggleBtn1('Clicked1')">expand_more</span>
            </div>
            <div v-if="isClicked1 === 'Clicked1', showDiv1" class="content active">
                <div class="goods-menu" v-for="(item, idx) in goods">
                <div class="img1"></div>
                <div class="menu-name">{{ item.name }}</div>
            </div>
            </div>
        </div>
        <div class="goods-box">
            <div class="text-box1" style="margin-top: 40px;">
                <p class="goods-text1">주문자 정보</p>
                <span class="material-symbols-rounded"
                style="margin-left: auto; height: 30px; margin-top: 40px; cursor: pointer;"
                :class="{ active: isClicked2 === 'Clicked1' }" @click="toggleBtn2('Clicked2')">expand_more</span>
            </div>
            <div v-if="isClicked2 === 'Clicked2', showDiv2" class="content active">
                <div class="person-text-box1">
                    <p class="person-text1">주문자</p>
                    <p class="person-text2">주문자 이름</p>
                </div>
                <div class="person-text-box1">
                    <p class="person-text1">휴대폰</p>
                <p class="person-text2">010-xxxx-xxxx</p>
                </div>
                <div class="person-text-box1">
                    <p class="person-text1">이메일</p>
                    <p class="person-text2">adsedff134@naver.com</p>
                </div>
            </div>
        </div>
        <div class="goods-box">
            <div class="text-box1" style="margin-top: 40px;">
                <p class="goods-text1">수령 방법</p>
                <span class="material-symbols-rounded"
                style="margin-left: auto; height: 30px; margin-top: 40px; cursor: pointer;"
                :class="{ active: isClicked3 === 'Clicked3' }" @click="toggleBtn3('Clicked3')">expand_more</span>
            </div>
            <div v-if="isClicked3 === 'Clicked3', showDiv3" class="content active">
                <div class="btn-box1">
                    <button class="btnbox" :class="{ active: activeButton === 'button1' }" @click="toggleButton('button1')">직접 수령</button>
                    <button class="btnbox" :class="{ active: activeButton === 'button2' }" @click="toggleButton('button2')">배달</button>
                </div>
                <div v-if="activeButton === 'button1'" class="content active">
                    <div style="display: flex;">
                        <p class="hidden3-1-text1">픽업 시간 입력</p>
                    </div>
                    <div class="time-select-box">
                        <input type="time" class="time-select">
                    </div>
                </div>
                <div v-else-if="activeButton === 'button2'" class="content active">
                    <div style="display: flex;">
                        <p class="hidden3-1-text1">배달 장소 입력</p>
                    </div>
                    <div class="time-select-box">
                        <input type="text" class="time-select">
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-box">
            <div class="text-box1" style="margin-top: 40px;">
                <p class="goods-text1">결제 수단</p>
                <span class="material-symbols-rounded"
                style="margin-left: auto; height: 30px; margin-top: 40px; cursor: pointer;" 
                :class="{ active: isClicked4 === 'Clicked4' }" @click="toggleBtn4('Clicked4')">expand_more</span>
            </div>
            <div v-if="isClicked4 === 'Clicked4', showDiv4" class="content active">
                <div class="payment-select">
                    <p class="select-text1">결제 수단 선택</p>
                    <div class="btn-box2">
                    <button class="btnbox2" style="border-radius: 4px 0px 0px 4px; border-right: 0px;"
                    :class="{ active: activeButton2 === 'button3' }" @click="toggleButton2('button3')">신용카드</button>
                    <button class="btnbox2" :class="{ active: activeButton2 === 'button4' }" @click="toggleButton2('button4')"
                    style="border-radius: 0px 4px 4px 0px;">간편결제</button>
                </div>
                <div v-if="activeButton2 === 'button3'" class="content2 active">
                    <div class="card-select-box">
                        <select class="card-select">
                        <option value="">카드를 선택해주세요</option>
                        <option value="1">현대카드</option>
                        <option value="2">우리카드</option>
                        <option value="3">국민카드</option>
                        </select>
                    </div>
                    <div class="card-select-box2">
                        <select class="card-select2">
                        <option value="">할부를 선택해주세요</option>
                        <option value="3">3개월</option>
                        <option value="6">6개월</option>
                        <option value="9">9개월</option>
                        </select>
                    </div>
                </div>
                <div v-if="activeButton2 === 'button4'" class="content2 active">
                    <div class="simple-box">
                        <p class="simple-text1">결제 방식 선택</p>
                        <div class="table-box1">
                            <table class="simple-select-box">
                                <thead>
                                    <tr>
                                        <td>
                                            <label>
                                            <input type="radio" value="kakao" name="contact"/>
                                            <span style="margin-left: 10px;">카카오페이</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label style="padding-left: 20px; padding-right: 20px;">
                                            <input type="radio" value="toss" name="contact"/>
                                            <span style="margin-left: 10px;">토스</span>
                                            </label>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label>
                                            <input type="radio" value="naver" name="contact"/>
                                            <span style="margin-left: 10px;">네이버페이</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label >
                                            <input type="radio" value="samsung" name="contact"/>
                                            <span style="margin-left: 10px;">삼성페이</span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="goods-box">
            <div class="text-box1" style="margin-top: 40px;">
                <p class="goods-text1">개인 정보 수집/제공</p>
                <span class="material-symbols-rounded"
                style="margin-left: auto; height: 30px; margin-top: 40px; cursor: pointer;" 
                :class="{ active: isClicked5 === 'Clicked5' }" @click="toggleBtn5('Clicked5')">expand_more</span>
            </div>
            <div style="margin-top: 30px;" v-if="isClicked5 === 'Clicked5', showDiv5" class="content active">
                <div class="agree-text-box">
                    <p class="agree-text1">개인정보 수집/이용 및 처리 동의</p>
                    <p class="agree-text2">보기</p>
                </div>
                <div class="agree-text-box">
                    <p class="agree-text1">결제 대행 서비스 약관 동의</p>
                    <p class="agree-text2">보기</p>
                </div>
                <div class="agree-text-box">
                    <input type="checkbox">
                    <p class="agree-text3">위 내용을 확인하였으며 결제에 동의합니다.</p>
                </div>
            </div>
        </div>
        <Btn btntype="solid" class="total-btn1">6,675원 결제하기</Btn>
    </div>
</template>

<script setup>
import Btn from '../../common/components/Btn.vue';
import Sidebar from '../../common/main/sidebar/Sidebar.vue';
import { ref } from 'vue';

const activeButton = ref(null);
const activeButton2 = ref(null);

const isClicked1 = ref(null);
const isClicked2 = ref(null);
const isClicked3 = ref(null);
const isClicked4 = ref(null);
const isClicked5 = ref(null);

const showDiv1 = ref(true);
const showDiv2 = ref(true);
const showDiv3 = ref(true);
const showDiv4 = ref(true);
const showDiv5 = ref(true);

const goods = ref([
    { name: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉" },
    { name: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉" },
    { name: "[피그인더가든]그린믹스 콜라겐 샐러드키트 5봉" },
]);

const toggleBtn1 = (button) => {
    if (isClicked1.value === button) {
        isClicked1.value = null;
        showDiv1.value = true;
    } else {
        isClicked1.value = button;
        showDiv1.value = false;
    }
};

const toggleBtn2 = (button) => {
    if (isClicked2.value === button) {
        isClicked2.value = null;
        showDiv2.value = true;
    } else {
        isClicked2.value = button;
        showDiv2.value = false;
    }
};

const toggleBtn3 = (button) => {
    if (isClicked3.value === button) {
        isClicked3.value = null;
        showDiv3.value = true;
    } else {
        isClicked3.value = button;
        showDiv3.value = false;
    }
};

const toggleBtn4 = (button) => {
    if (isClicked4.value === button) {
        isClicked4.value = null;
        showDiv4.value = true;
    } else {
        isClicked4.value = button;
        showDiv4.value = false;
    }
};

const toggleBtn5 = (button) => {
    if (isClicked5.value === button) {
        isClicked5.value = null;
        showDiv5.value = true;
    } else {
        isClicked5.value = button;
        showDiv5.value = false;
    }
};

const toggleButton = (button) => {
    if (activeButton.value === button) {
        activeButton.value = null;
    } else {
        activeButton.value = button;
    }
};

const toggleButton2 = (button) => {
    if (activeButton2.value === button) {
        activeButton2.value = null;
    } else {
        activeButton2.value = button;
    }
};
</script>

<style scoped>
.text1 {
    font-weight: bold;
    font-size: 34px;
    float: left;
    margin-left: 80px;
    margin-top: 50px;
}

.goods-box {
    width: 1500px;
    margin: 0 auto;
}

.text-box1 {
    font-weight: bold;
    font-size: 28px;
    border-bottom: solid 2px #2B322C;
    margin-top: 150px;
    display: flex;
}

.goods-text1 {
    margin-bottom: 20px;
    text-align: left;
}

.goods-menu {
    margin: auto;
    border-bottom: solid 1px #dde5db;
    display: flex;
    margin-top: 10px;
}

.img1 {
    width: 104px;
    height: 133px;
    background-color: #000;
    margin-bottom: 10px;
}

.menu-name {
    font-size : 20px;
    margin-left: 50px;
    margin-top: 50px;
}

.person-text-box1 {
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
}

.agree-text-box {
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
}

.person-text1 {
    font-size: 20px;
    margin-right: 100px;
}

.agree-text1 {
    font-size: 20px;
    margin-right: 100px;
}

.person-text2 {
    font-size: 20px;
}

.agree-text2 {
    font-size: 20px;
    margin-left: auto;
    margin-right: 10px;
    color: var(--gray300);
}

.agree-text3 {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
}

.btn-box1 {
    margin-top: 20px;
    display: flex;
}

.btn-box2 {
    margin-top: 30px;
    display: flex;
    margin-left: 180px;
}

.btnbox {
    width: 47%;
    margin-left: 30px;
    background-color: var(--secondary-l5);
    color: var(--primary-d2);
    font-family: Pretendard;
    font-size: 18px;
    border: solid 1px var(--primary-d2);
    padding: 15px 18px;
    border-radius: 4px;
}

.btnbox2 {
    width: 140px;
    background-color: var(--secondary-l5);
    color: var(--gray200);
    font-family: Pretendard;
    font-size: 18px;
    border: solid 1px var(--gray200);
    padding: 15px 18px;
}

.btnbox:hover, .btnbox.active {
    background-color: var(--primary-d2);
    color: #fff;
    border: 0px;
}

.btnbox2:hover, .btnbox2.active {
    background-color: var(--primary-d2);
    color: #fff;
    border: 0px;
}

.hidden3-1-text1{
    font-size: 20px;
    margin-left: 30px;
    margin-top: 40px;
    margin-right: auto;
}

.time-select {
    margin-right: auto;
    border: none;
    width: 100%;
    color: #A5ADA4;
    font-weight: bold;
}

.time-select-box{
    display: flex;
    border-radius: 4px;
    border: solid 1px #C1C9BF;
    margin-left: 34px;
    width: 94%;
    padding: 10px;
}

.select-text1 {
    float: left;
    font-size: 20px;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 0px;
}

.card-select-box {
    display: flex;
    border-radius: 4px;
    border: solid 1px #C1C9BF;
    margin-left: 180px;
    margin-top: 30px;
    width: 26.5%;
    padding: 20px 10px;
}

.card-select{
    margin-right: auto;
    border: none;
    width: 100%;
    color: #414941;
    font-weight: bold;
    font-size: 18px;

}

.card-select-box2 {
    display: flex;
    border-radius: 4px;
    border: solid 1px #C1C9BF;
    background-color: var(--gray50);
    margin-left: 180px;
    margin-top: 10px;
    width: 26.5%;
    padding: 20px 10px;
}

.card-select2{
    margin-right: auto;
    border: none;
    width: 100%;
    color: var(--ngray300);
    font-weight: bold;
    font-size: 18px;
    background-color: var(--gray50);

}

.total-btn1 {
    width: 40%;
    margin: 0 auto;
    padding: 15px 18px;
    margin-top: 80px;
    margin-bottom: 80px;
    background-color: var(--primary-d2);
}
.content {
    display: none;
}

.content.active {
    display: block;
}

.content2 {
    display: none;
}

.content2.active {
    display: block;
}

.simple-box {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.simple-text1 {
    font-size: 20px;
    font-weight: bold;
    margin-right: auto;
    margin-left: 180px;
}

.simple-select-box {
    border-collapse: collapse;
    border-spacing: 0;
    width: 420px;
    margin-left: 180px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #000;
    border-radius: 10px;
}

.simple-box td {
    border: solid 1px #000;
    padding: 50px 0px 50px 0px;
}

.simple-box tr {
    font-size: 20px;
}

label {
    font-size: 20px;
}

[type="radio"], span {
    vertical-align: middle;
}

[type="radio"] {
    appearance: none;
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;
    transition: border 0.5s ease-in-out;
}

[type="radio"]:checked {
    border: 0.4em solid #00a664;
}
</style>