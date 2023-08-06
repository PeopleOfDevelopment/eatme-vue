<template>
  <div class="join">
    <p class="eatme-text1">EAT ME</p>
    <p class="join-text1">회원가입</p>
    <p class="join-text2">이미 EAT ME의 회원이신가요?</p>
    <p class="join-text3" onclick="location.href='login'" mouseover="target">로그인</p>
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
          maxlength="5"></placeHolder>
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
      id="password1" @input="pw_check"></placeHolder>
    <p class="join-text4" id="password_msg">
      ※문자, 숫자를 조합하여 8자리 이상 길이로 구성해주세요.
    </p>

    <placeHolder
      :placeholder="input4"
      type="password"
      id="password2"></placeHolder>
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
      @click="test">
      회원가입
    </Btns>
  </div>
</template>

<script setup>
import placeHolder from '../common/components/PlaceHolder.vue';
import Btns from '../common/components/Btn.vue';

const input1 = '아이디';
const input2 = '닉네임(6자 이내)';
const input3 = '비밀번호';
const input4 = '비밀번호 확인';
const input5 = '이메일';
const input6 = '전화번호';

const test = () => {
    var p1 = document.getElementById('password1').value;
    var p2 = document.getElementById('password2').value;

    if (p1.length < 8) {
      alert('입력한 글자가 8글자 이상이어야 합니다.');
      return false;
    }

    if (p1 != p2) {
      alert('비밀번호를 다시 한 번 확인해주세요.');
      return false;
    } else {
      alert('비밀번호일치확인용문구');
      return true;
    }
};

const pw_check = () => {
      var password = document.querySelector('#password1');
      var password_msg = document.querySelector('#password_msg');
      var pwValidation = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

      if(pwValidation.test(password.value)) {
          password_msg.innerHTML = '올바른 비밀번호입니다.';
          password_msg.style.color = '#00a664';
      } else {
        password_msg.innerHTML = '올바르지 않은 형식입니다.';
        password_msg.style.color = '#d13125'
      }
};
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
</style>
