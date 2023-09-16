<template>
  <div class="join">
    <p class="eatme-text1">EAT ME</p>
    <p class="join-text1">회원가입</p>
    <p class="join-text2">이미 EAT ME의 회원이신가요?</p>
    <p class="join-text3" onclick="location.href='login'" style="cursor: pointer;">로그인</p>
    <div class="ph1">
      <div class="id1">
        <placeHolder
          :placeholder="input1"
          style="width: 91%; float: left"></placeHolder>
      </div>
      <Btns
        btntype="ghost"
        style="
          width: 70px;
          padding: 18px 10px 18px 10px;
          margin-top: 7px;
          margin-left: 2px;
          float: right;
        ">
        중복확인
      </Btns>
    </div>

    <div class="ph1">
      <div class="pw1">
        <placeHolder
          :placeholder="input2"
          style="width: 91%; float: left"
          maxlength="10"></placeHolder>
      </div>
      <Btns
        btntype="ghost"
        style="
          width: 70px;
          padding: 18px 10px 18px 10px;
          margin-top: 7px;
          margin-left: 2px;
          float: right;
        ">
        중복확인
      </Btns>
    </div>

    <placeHolder
      :placeholder="input3"
      type="password"
      v-model="password" @input="pw_check"></placeHolder>
    <p class="join-text4" :class="passwordCorrectClass">
      {{ passwordCorrect }}
    </p>

    <placeHolder
      :placeholder="input4"
      type="password"
      v-model="password2"></placeHolder>
    <placeHolder :placeholder="input5"></placeHolder>
    <placeHolder :placeholder="input6"></placeHolder>

    <div class="c-text1">
      <input type="checkbox" style="margin-right: 5px" />
      <p style="margin-right: 5px; color: #d13125">(필수)</p>
      <p style="margin-right: 5px; color: #757874">이용약관 동의</p>
      <Btns btntype="outline-gray-small">내용보기</Btns>
    </div>
    <div class="c-text1">
      <input type="checkbox" style="margin-right: 5px" />
      <p style="margin-right: 5px; color: #d13125">(필수)</p>
      <p style="margin-right: 5px; color: #757874">
        개인정보 수집 및 이용 동의
      </p>
      <Btns btntype="outline-gray-small">내용보기</Btns>
    </div>
    <div class="c-text1">
      <input type="checkbox" style="margin-right: 5px" />
      <p style="margin-right: 5px; color: #757874">(선택)</p>
      <p style="margin-right: 5px; color: #757874">
        이벤트 및 프로모션 메일 수신 동의
      </p>
      <Btns btntype="outline-gray-small">내용보기</Btns>
    </div>
    <Btns
      btntype="solid"
      style="margin-top: 10px; margin-left: 10px; width: 92%"
      @click="join(testData)">
      회원가입
    </Btns>
  </div>
</template>

<script setup lang="ts">
import placeHolder from '../common/components/PlaceHolder.vue';
import Btns from '../common/components/Btn.vue';
import { ref, computed } from 'vue';
import { ApiUtils } from '../common/utils/ApiUtils';

const input1 = '아이디';
const input2 = '닉네임(6자 이내)';
const input3 = '비밀번호';
const input4 = '비밀번호 확인';
const input5 = '이메일';
const input6 = '전화번호';

const password = ref('');
const password2 = ref('');
const passwordCorrect = ref('※문자, 숫자를 조합하여 8자리 이상 길이로 구성해주세요.');
const passwordCorrectClass = ref('');

const check_join = () => {
  if (password.value.length < 8) {
    alert('입력한 글자가 8글자 이상이어야 합니다.');
    return false;
  }

  if (password.value != password2.value) {
    alert('비밀번호를 다시 한 번 확인해주세요.');
    return false;
  } else {
    alert('비밀번호일치확인용');
    return true;
  }
}

const pw_check = () => {
  const pwValidation = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (pwValidation.test(password.value)) { 
    passwordCorrect.value = '올바른 비밀번호입니다.';
    passwordCorrectClass.value = 'correct-password';
  } else {
    passwordCorrect.value = '올바르지 않은 형식입니다.';
    passwordCorrectClass.value = 'non-password';
  }
};

const apiUtils = new ApiUtils;

interface UserInfo {
  userNm: string
  userId: string
  userPw: string
  userEmail: string
  userNick: string
  userPhoneNumber: string
}

const testData: UserInfo = {
  userNm: '테스트이름2',
  userId: 'testID2',
  userPw: 'testPW2',
  userEmail: 'testemail@gmail.com',
  userNick: 'testNick2',
  userPhoneNumber: '01011111111',
}

async function join(param: UserInfo) {
  const result = await apiUtils.post('/api/join/insert', testData)
  if(result === 1) {
    console.log('회원가입 성공')
  }else {
    console.log('회원가입 실패')
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
  color: #00a664;
}

.join-text1 {
  font-size: 32px;
  font-weight: bold;
  margin-top: 30px;
  color: #2b322c;
}

.join-text2 {
  font-size: 20px;
  float: left;
  margin-left: 15%;
  color: #2e312e;
}

.join-text3 {
  font-size: 20px;
  float: right;
  margin-right: 15%;
  color: #00a664;
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
  color: #aaaca8;
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

.non-password {
  color : #d13125;
}

.correct-password {
  color : #00a664;
}
</style>
