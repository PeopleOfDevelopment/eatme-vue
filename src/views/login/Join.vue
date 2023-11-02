<template>
  <div class="join">
    <p class="eatme-text1">EAT ME</p>
    <p class="join-text1">회원가입</p>
    <p class="join-text2">이미 EAT ME의 회원이신가요?</p>
    <p class="join-text3" onclick="location.href='login'" style="cursor: pointer;">로그인</p>
    <div class="ph-box1">
    <div class="ph1">
      <div class="id1">
        <input placeholder="아이디" style="width: 91%; float: left;" class="inputInfor" v-model="userId">
      </div>
      <Btns
        btntype="ghost"
        style="
          width: 70px;
          padding: 18px 10px 18px 10px;
          margin-top: 7px;
          margin-left: 2px;
          float: right;
        " @click="checkOverlapId()">
        중복확인
      </Btns>
    </div>
    <div class="show-text1" v-if="IsCheckId === false">
      <p>이미 존재하는 아이디입니다.</p>
    </div>
    <div class="show-text2" v-else-if="IsCheckId === true">
      <p>사용 가능한 아이디입니다.</p>
    </div>
    <div class="ph1">
      <div class="pw1">
        <input placeholder="닉네임(6자 이내)" style="width: 91%; float: left;" maxlength="10" class="inputInfor" v-model="userNick">
      </div>
      <Btns
        btntype="ghost"
        style="
          width: 70px;
          padding: 18px 10px 18px 10px;
          margin-top: 7px;
          margin-left: 2px;
          float: right;
        " @click="checkOverlapNick()">
        중복확인
      </Btns>
    </div>
    <div class="show-text1" v-if="IsCheckNick === false">
      <p>이미 존재하는 닉네임입니다.</p>
    </div>
    <div class="show-text2" v-else-if="IsCheckNick === true">
      <p>사용 가능한 닉네임입니다.</p>
    </div>
    <input placeholder="비밀번호" type="password" v-model="password" class="inputInfor" @input="pw_check">
    <p class="join-text4" :class="passwordCorrectClass">
      {{ passwordCorrect }}
    </p>

    <input placeholder="비밀번호 확인" type="password" v-model="password2" class="inputInfor">
    <input placeholder="이메일" class="inputInfor" v-model="userEmail">
    <input placeholder="전화번호" class="inputInfor" v-model="userNumber">

    <div class="c-text1">
      <input type="checkbox" style="margin-right: 5px;" />
      <p style="margin-right: 5px; color: #d13125;">(필수)</p>
      <p style="margin-right: 5px; color: #757874">이용약관 동의</p>
      <Btns btntype="outline-gray-small" style="margin-top: 0px;">내용보기</Btns>
    </div>
    <div class="c-text1">
      <input type="checkbox" style="margin-right: 5px;" />
      <p style="margin-right: 5px; color: #d13125">(필수)</p>
      <p style="margin-right: 5px; color: #757874">
        개인정보 수집 및 이용 동의
      </p>
      <Btns btntype="outline-gray-small" style="margin-top: 0px;">내용보기</Btns>
    </div>
    <div class="c-text1">
      <input type="checkbox" style="margin-right: 5px;" />
      <p style="margin-right: 5px; color: #757874">(선택)</p>
      <p style="margin-right: 5px; color: #757874">
        이벤트 및 프로모션 메일 수신 동의
      </p>
      <Btns btntype="outline-gray-small" style="margin-top: 0px;">내용보기</Btns>
    </div>
    <Btns
      btntype="solid"
      style="margin-top: 10px; margin-left: 10px; width: 92%"
      @click="check()">
      회원가입
    </Btns>
  </div>
</div>
</template>

<script setup lang="ts">
import Btns from '../common/components/Btn.vue';
import { ref, computed, onMounted } from 'vue';
import { ApiUtils } from '../common/utils/ApiUtils';
import { router } from '@/router';

const userId = ref('');
const userNick = ref('');
const userEmail = ref('');
const userNumber = ref('');
const userNm = ref('ppp')
const userAddr = ref('경기도')

const password = ref('');
const password2 = ref('');
const passwordCorrect = ref('※문자, 숫자를 조합하여 8자리 이상 길이로 구성해주세요.');
const passwordCorrectClass = ref('');

const joinData = ref([]);

const apiUtils = new ApiUtils;

const pw_check = () => {
  //유효성 검사
  const pwValidation = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (pwValidation.test(password.value)) { 
    passwordCorrect.value = '올바른 비밀번호입니다.';
    passwordCorrectClass.value = 'correct-password';
  } else {
    passwordCorrect.value = '올바르지 않은 형식입니다.';
    passwordCorrectClass.value = 'non-password';
  }
}

const check = async () => {
  if (IsCheckId.value === true && IsCheckNick.value === true) {
      //비밀번호 확인
    if (password.value.length < 8) {
      alert('입력한 글자가 8글자 이상이어야 합니다.');
    }

    if (password.value != password2.value) {
      alert('비밀번호를 다시 한 번 확인해주세요.');
    } else {
      console.log('비밀번호 일치')
    }
    
    const userData = {
      userId: userId.value,
      userPw: password.value,
      userPw2: password2.value,
      userNick: userNick.value,
      userEmail: userEmail.value,
      userPhoneNumber: userNumber.value,
      userAddr: userAddr.value,
      userNm: userNm.value
    };

    try {
      const result = await apiUtils.post('/api/join/insert', userData)
      joinData.value = result.data;
      console.log('회원가입 성공: ', result.data);
      alert('회원가입 되었습니다.');
      router.push('/login');
    } catch (error) {
      console.error('회원가입 실패: ', error);
    }
  } else {
    alert('아이디와 닉네임 중복을 확인해주세요.');
  }
};

const check1 = ref(false);
const check2 = ref(false);

const IsCheckId = ref(null);
const IsCheckNick = ref(null);

async function checkOverlapId() {
  IsCheckId.value = null;

  try {
    const checkData1 = {
      userId: userId.value
    };

    const result = await apiUtils.post('/api/join/checkOverlap', checkData1);
    check1.value = result;
    console.log(check1.value);
    
    if (check1.value === true) {
      IsCheckId.value = true;
    } else {
      IsCheckId.value = false;
    }
  } catch (error) {
    console.error('오류 발생: ', error);
  }
}

async function checkOverlapNick() {
  IsCheckNick.value = null;

  try {
    const checkData2 = {
      userNick: userNick.value
    };

    const result = await apiUtils.post('/api/join/checkOverlap', checkData2);
    check2.value = result;
    
    if (check2.value === true) {
      IsCheckNick.value = true;
    } else {
      IsCheckNick.value = false;
    }
  } catch (error) {
    console.error('오류 발생: ', error);
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
  margin-top: 20px;
  color: #2b322c;
}

.join-text2 {
  font-size: 20px;
  float: left;
  margin-left: 15%;
  color: #2e312e;
  margin-top: 20px;
  margin-bottom: 50px;
}

.join-text3 {
  font-size: 20px;
  float: right;
  margin-right: 15%;
  color: #00a664;
  margin-top: 20px;
}

.ph-box1 {
  display: flex;
  flex-direction: column;
  width: 100%;
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
  text-align: left;
  margin-left: 10px;
}

.c-text1 {
  width: 95%;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
}

.non-password {
  color : #d13125;
}

.correct-password {
  color : #00a664;
}

.inputInfor {
    width: 92%;
    padding: 18px;
    margin: 7px;
    font-size: 18px;
    border-radius: 4px;
    border: solid 1px #C1C9BF;
    font-weight: bold;
    font-family: Pretendard;
}

input::placeholder {
    color: #A5ADA4;
}

.show-text1 {
  font-size: 14px;
  color: #d13125;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: left;
  margin-left: 10px;
}

.show-text2 {
  font-size: 14px;
  color: #00a664;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: left;
  margin-left: 10px;
}
</style>
