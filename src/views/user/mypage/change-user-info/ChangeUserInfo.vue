<template>
    <Sidebar></Sidebar>
    <div id="main-wrapper">
        <TopNav
        navType="tabs"
        :tabList="['나의 기록', '개인 정보 변경']"
        :currentTab="currentTab"></TopNav>
        <div class="box1">
            <div class="round1">
                <svg width="160" height="160" viewBox="-15 -15 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64 64C58.1334 64 53.1111 61.9112 48.9334 57.7334C44.7556 53.5556 42.6667 48.5334 42.6667 42.6667C42.6667 36.8 44.7556 31.7778 48.9334 27.6C53.1111 23.4223 58.1334 21.3334 64 21.3334C69.8667 21.3334 74.8889 23.4223 79.0667 27.6C83.2445 31.7778 85.3334 36.8 85.3334 42.6667C85.3334 48.5334 83.2445 53.5556 79.0667 57.7334C74.8889 61.9112 69.8667 64 64 64ZM32 106.667C29.0667 106.667 26.5547 105.621 24.464 103.531C22.3734 101.44 21.3298 98.9298 21.3334 96V91.7334C21.3334 88.7112 22.112 85.9325 23.6694 83.3974C25.2267 80.8623 27.2925 78.9298 29.8667 77.6C35.3778 74.8445 40.9778 72.7769 46.6667 71.3974C52.3556 70.0178 58.1334 69.3298 64 69.3334C69.8667 69.3334 75.6445 70.0232 81.3334 71.4027C87.0222 72.7823 92.6222 74.848 98.1334 77.6C100.711 78.9334 102.779 80.8676 104.336 83.4027C105.893 85.9378 106.67 88.7147 106.667 91.7334V96C106.667 98.9334 105.621 101.445 103.531 103.536C101.44 105.627 98.9298 106.67 96 106.667H32Z" fill="#8B938A"/>
                </svg>
            </div>
            <p class="username1">유저이름</p>
        </div>
        <div class="box2">
            <div class="box2-border">
                <p class="box2-text1">회원 정보</p>
            </div>
            <div class="box2-1">
                <p class="box2-1-text1">사진</p>
                <div class="round2">
                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="90" height="90" rx="45" fill="#C1C9BF"/>
                    <path d="M45 45C41.7 45 38.875 43.825 36.525 41.475C34.175 39.125 33 36.3 33 33C33 29.7 34.175 26.875 36.525 24.525C38.875 22.175 41.7 21 45 21C48.3 21 51.125 22.175 53.475 24.525C55.825 26.875 57 29.7 57 33C57 36.3 55.825 39.125 53.475 41.475C51.125 43.825 48.3 45 45 45ZM27 69C25.35 69 23.937 68.412 22.761 67.236C21.585 66.06 20.998 64.648 21 63V60.6C21 58.9 21.438 57.337 22.314 55.911C23.19 54.485 24.352 53.398 25.8 52.65C28.9 51.1 32.05 49.937 35.25 49.161C38.45 48.385 41.7 47.998 45 48C48.3 48 51.55 48.388 54.75 49.164C57.95 49.94 61.1 51.102 64.2 52.65C65.65 53.4 66.813 54.488 67.689 55.914C68.565 57.34 69.002 58.902 69 60.6V63C69 64.65 68.412 66.063 67.236 67.239C66.06 68.415 64.648 69.002 63 69H27Z" fill="#8B938A"/>
                    </svg>
                </div>
                <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-left: auto; margin-right: 40px; margin-top: 25px;">사진 변경</Btn>
            </div>
            <div class="box2-2">
                <p class="box2-2-text1">아이디</p>
                <p class="box2-2-text2">dbqls1703</p>
            </div>
            <div class="box2-3">
                <p class="box2-3-text1">비밀번호</p>
                <p class="box2-3-text2">***********</p>
                <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-left: auto; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;">비밀번호 변경</Btn>
            </div>
            <div class="box2-3">
                <p class="box2-4-text1">이름(실명)</p>
                <p class="box2-3-text2">지*빈</p>
                <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-left: auto; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;">이름 수정</Btn>
            </div>
            <div class="box2-3">
                <p class="box2-5-text1">닉네임</p>
                <p class="box2-3-text2">유저이름</p>
                <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-left: auto; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;">닉네임 변경</Btn>
            </div>
            <div class="box2-3">
                <p class="box2-6-text1">이메일</p>
                <p class="box2-3-text2">1234555@naver.com</p>
                <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-left: auto; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;">이메일 변경</Btn>
            </div>
            <div class="box2-3">
                <p class="box2-7-text1">휴대전화</p>
                <p class="box2-3-text2">010-****-1234</p>
                <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-left: auto; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;">휴대전화 변경</Btn>
            </div>
            <Modal v-if="modalOpen" @close-modal="modalOpen = false"></Modal>
            <p class="red-text1" @click="modalOpen=true">회원 탈퇴</p>
        </div>
        <Footer></Footer>
    </div>
    
</template>

<script setup>
import Sidebar from '../../../common/main/sidebar/Sidebar.vue';
import Btn from '../../../common/components/Btn.vue';
import Footer from '../../../common/main/footer/Footer.vue';
import Modal from '../../../common/components/Modal1.vue';
import TopNav from '../../../common/components/TopNav.vue';

modalOpen: false;        
</script>

<style scoped>
.box1 {
    width: 1670px;
    height: 295px;
    background-color: var(--ngray50);
    display: flex;
}

.round1 {
    width: 160px;
    height: 160px;
    background-color: #C1C9BF;
    border-radius: 50%;
    margin-left: 20%;
    margin-top: 60px;
}

.username1 {
    font-size: 48px;
    font-weight: bold;
    margin-left: 50px;
    margin-top: 70px;
    color: var(--ngray800);
}

.box2 {
    width: 60%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
}

.box2-border {
    border-bottom: 2px solid #161d17;
    width: 100%;
    margin-top: 30px;
    display: flex;
}
.box2-text1 {
    font-size: 28px;
    font-weight: bold;
    color: var(--ngray900);
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: 3px;
}

.box2-1 {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #DDE5DB;
}

.box2-2 {
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
    border-bottom: 1px solid #DDE5DB;
}

.box2-3 {
    display: flex;
    margin-top: 20px;
    margin-bottom: 0px;
    border-bottom: 1px solid #DDE5DB;
}

.box2-1-text1 {
    margin-right: auto;
    margin-right: 150px;
    margin-top: 35px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray600);
}

.box2-2-text1 {
    margin-right: auto;
    margin-right: 135px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray600);
}

.box2-4-text1 {
    margin-right: auto;
    margin-right: 110px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray600);
}

.box2-5-text1 {
    margin-right: auto;
    margin-right: 135px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray600);
}

.box2-6-text1 {
    margin-right: auto;
    margin-right: 135px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray600);
}

.box2-7-text1 {
    margin-right: auto;
    margin-right: 120px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray600);
}

.box2-2-text2 {
    margin-right: auto;
    margin-right: 150px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray900);
    font-weight: bold;
}

.box2-3-text1 {
    margin-right: auto;
    margin-right: 120px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray600);
}

.box2-3-text2 {
    margin-right: auto;
    margin-right: 150px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 15px;
    font-size: 18px;
    color: var(--gray900);
    font-weight: bold;
}

.round2 {
    width: 90px;
    height: 90px;
    background-color: #C1C9BF;
    border-radius: 50%;
    margin-bottom: 20px;
}

.red-text1 {
    color: var(--secondary-l1);
    margin-left: auto;
    margin-right: 10px;
}
</style>