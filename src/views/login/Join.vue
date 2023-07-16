<template>
    <div class="join">
        <p class="eatme-text1">EAT ME</p>
        <p class="join-text1">회원가입</p>
        <p class="join-text2">이미 EAT ME의 회원이신가요?</p>
        <p class="join-text3">로그인</p>
        <div class="ph1">
            <div class="id1"><placeHolder :placeholder="input1" style="width: 91%; float: left;"></placeHolder></div>
            <Btns btntype="ghost" style="width: 70px; padding: 18px 10px 18px 10px;
                margin-top: 7px; margin-left:2px; float: right;">중복확인</Btns>
        </div>

        <div class="ph1">
            <div class="pw1"><placeHolder :placeholder="input2" style="width: 91%; float: left;"></placeHolder></div>
            <Btns btntype="ghost" style="width: 70px; padding: 18px 10px 18px 10px;
                margin-top: 7px; margin-left: 2px; float: right;">중복확인</Btns>
        </div>

        <placeHolder :placeholder="input3"></placeHolder>
        <p class="join-text4">※문자, 숫자를 조합하여 8자리 이상 길이로 구성해주세요.</p>

        <placeHolder :placeholder="input4"></placeHolder>
        <placeHolder :placeholder="input5"></placeHolder>
        <placeHolder :placeholder="input6"></placeHolder>

        <div class="c-text1">
            <input type="checkbox" style="margin-right: 5px;">
            <p style="margin-right: 5px; color: #D13125">(필수)</p>
            <p style="margin-right: 5px; color: #757874">이용약관 동의</p>
            <Btns btntype="outline-gray-small">내용보기</Btns>
        </div>
        <div class="c-text1">
            <input type="checkbox" style="margin-right: 5px;">
            <p style="margin-right: 5px; color: #D13125">(필수)</p>
            <p style="margin-right: 5px; color: #757874">개인정보 수집 및 이용 동의</p>
            <Btns btntype="outline-gray-small">내용보기</Btns>
        </div>
        <div class="c-text1">
            <input type="checkbox" style="margin-right: 5px;">
            <p style="margin-right: 5px; color: #757874">(선택)</p>
            <p style="margin-right: 5px; color: #757874">이벤트 및 프로모션 메일 수신 동의</p>
            <Btns btntype="outline-gray-small">내용보기</Btns>
        </div>
        <Btns btntype="solid" style="margin-top: 10px; margin-left: 10px; width: 92%;">회원가입</Btns>
    </div>
</template>

<script>
import placeHolder from '../common/components/PlaceHolder.vue';
import Btns from '../common/components/Btn2.vue';

    export default {
        components: {
            placeHolder,
            Btns,
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

<style scoped>
.join {
    font-family: Pretendard;
    margin: 0 auto;
    width: 30%;
}

.eatme-text1 {
    font-size: 48px;
    font-weight: bold;
    margin-top: 60px;
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
    margin-left: 15%;
    color: #2E312E;
}

.join-text3 {
    font-size: 20px;
    float: right;
    margin-right: 15%;
    color: #00A664;
}

.ph1 {
    width: 100%;
    float: left;
}

.id1 {
    width: 80%;
}

.pw1 {
    width: 80%;
}

.join-text4 {
    font-size: 14px;
    color:#AAACA8;
    margin-top: 5px;
    margin-bottom: 5px;
    float: left;
    margin-left: 10px;
}

.c-text1 {
    width: 95%;
    display: flex;
    margin: 0 auto;
    margin-top: -5px;
    margin-bottom: -10px;
}
</style>