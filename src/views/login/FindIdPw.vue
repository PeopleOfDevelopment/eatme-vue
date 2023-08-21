<template>
    <div id="find-box">
        <p class="text1">EAT ME</p>
        <p class="text2">아이디/비밀번호 찾기</p>

        <TopNav navType="tabs" :tabList="['아이디 찾기', '비밀번호 찾기']"
        :currentTab="currentTab" :changeTab="changeTab"></TopNav>
        <div v-if="currentTab === 0">
            <p class="text3">회원정보에 등록된 이메일로 아이디를 발송해 드립니다.</p>
            <p class="text3" style="margin-bottom: 20px; margin-top: 20px;">회원가입 시 등록했던 이메일을 입력해주세요.</p>
            <div class="id-find-box">
                <p class="email-text1">이메일 주소</p>
                <input type="text" class="email-input" placeholder="이메일을 입력해주세요">
            </div>
            <Btn btntype="solid" style="width: 150px; height: 25px;
            border-radius: 20px; margin-left: 270px;">확인</Btn>
        </div>
        <div v-if="currentTab === 1">
            <p class="text3">비밀번호를 찾고자하는 아이디를 입력해주세요.</p>
            <div class="pw-find-box">
                <p class="id-text1">아이디</p>
                <input type="text" class="id-input" placeholder="아이디를 입력해주세요.">
            </div>
            <Btn btntype="solid" style="width: 150px; height: 25px;
            border-radius: 20px; margin-left: 270px;">확인</Btn>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TopNav from '../common/components/TopNav.vue';
import Btn from '../common/components/Btn.vue';

const currentTab = ref(0);

const changeTab = (index) => {
  currentTab.value = index;
};
</script>

<style scoped>
#find-box {
    margin: 0 auto;
    margin-top: 100px;
    width: 700px;
}

.text1 {
    font-size: 48px;
    font-weight: bold;
    color : var(--primary-def)
}

.text2 {
    font-size: 36px;
    margin-bottom: 20px;
}

.text3 {
    font-size: 20px;
    margin-bottom: 0px;
    margin-top: 50px;
}

.id-find-box {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #dde5db;
    padding-bottom: 70px;
    margin-top: 70px;
    margin-bottom: 70px;
}

.email-text1 {
    font-size: 20px;
}

.email-input {
    border: solid 1px #aaaca8;
    font-size: 20px;
    border-radius: 10px;
    padding: 0px 10px 0px 10px;
    font-family: Pretendard;
    color: var(--gray300);
}

.pw-find-box {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #dde5db;
    padding-bottom: 70px;
    margin-top: 70px;
    margin-bottom: 70px;
}

.id-text1 {
    font-size: 20px;
}

.id-input {
    border: solid 1px #aaaca8;
    font-size: 20px;
    border-radius: 10px;
    padding: 0px 10px 0px 10px;
    font-family: Pretendard;
    color: var(--gray300);
}
</style>