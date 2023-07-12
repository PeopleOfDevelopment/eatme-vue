<template>
    <div class="join">
        <p class="eatme-text1">EAT ME</p>
        <p class="join-text1">회원가입</p>
        <p class="join-text2">이미 EAT ME의 회원이신가요?</p>
        <p class="join-text3">로그인</p>
        <placeHolder :placeholder="input1"></placeHolder>
        <placeHolder :placeholder="input2"></placeHolder>
        <placeHolder :placeholder="input3"></placeHolder>
        <p class="join-text4">※문자, 숫자를 조합하여 8자리 이상 길이로 구성해주세요.</p>
        <placeHolder :placeholder="input4"></placeHolder>
        <placeHolder :placeholder="input5"></placeHolder>
        <placeHolder :placeholder="input6"></placeHolder>
    </div>
</template>

<script>
import placeHolder from '../common/components/placeHolder.vue';

    export default {
        components: {
            placeHolder
        },
        data() {
            return {
                input1: '아이디',
                input2: '닉네임',
                input3: '비밀번호',
                input4: '비밀번호 확인',
                input5: '이메일',
                input6: '전화번호',
            }
        }
    }
</script>

<style>
.join {
    font-family: Pretendard;
}

.eatme-text1 {
    font-size: 48px;
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 0px;
    color: #00A664;
}

.join-text1 {
    font-size: 32px;
    font-weight: bold;
    margin-top: 30px;
    color: #2B322C;
}

.join-text2 {
    font-size: 20px;
    float: left;
    margin-left: 40%;
    color: #2E312E;
}

.join-text3 {
    font-size: 20px;
    float: right;
    margin-right: 40%;
    color: #00A664;
}

.join-text4 {
    font-size: 14px;
    color:#AAACA8;
    margin-right: 15%;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>