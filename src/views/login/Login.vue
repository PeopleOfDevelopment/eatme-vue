<template>
  <div class="Login">
    <div class="green-box">
      <div class="b-text1">
        <p style="font-size: 64px; float: left; margin-bottom: 0px">EAT ME</p>
        <p
          style="
            float: right;
            margin-right: 65%;
            margin-top: 80px;
            margin-bottom: 0px;
          ">
          와
        </p>
        <p style="float: left; margin-top: 15px; margin-right: 55%">
          함께하는 환경보호
        </p>
      </div>
      <div class="b-text2">
        <p style="margin-bottom: 10px">
          국내에서 발생하는 음식물쓰레기는 하루 1만 4천여 톤으로,
        </p>
        <p style="margin-top: 10px; margin-bottom: 10px">
          전체 쓰레기 발생량의 28.7%를 차지합니다.
        </p>
        <p style="margin-top: 10px">
          EAT ME를 통해 남겨지는 음식들을 구하고, 함께 환경보호에 참여해주세요.
        </p>
      </div>
    </div>
    <div class="white-box">
      <div class="l-box1">
        <p class="b-text3">EAT ME</p>
        <p class="b-text4">로그인</p>
        <p class="b-text5">계정 정보를 입력해주세요</p>

        <Ph :placeholder="id" style="width: 50%"></Ph>
        <Ph :placeholder="pw" style="width: 50%; margin-top: 20px" type="password"></Ph>
        <div class="b-text-box">
          <input type="checkbox" />
          <p class="b-text6">아이디 · 비밀번호 기억하기</p>
        </div>

        <Btn
          btntype="solid"
          style="
            width: 52%;
            margin-top: 20px;
            text-align: center;
            padding: 15px;
          ">
          로그인
        </Btn>

        <div class="line-text">또는</div>

        <div class="btn-box1">
          <div class="btn-b1"></div>
          <div class="btn-b1"></div>
          <div class="btn-b1"></div>
          <div class="btn-b1"></div>
        </div>

        <div class="b-text7">
          <p onclick="location.href='join'">회원가입</p>
          <p>|</p>
          <p>비밀번호 찾기</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from '../common/components/Btn.vue';
import Ph from '../common/components/PlaceHolder.vue';

const id = '아이디';
const pw = '비밀번호';
</script>

<style scoped>
.Login {
  display: flex;
  width: 1920px;
  height: 1080px;
  position: fixed;
}
.green-box {
  width: 50%;
  height: 100%;
  background-color: var(--primary-def);
}
.b-text1 {
  color: white;
  font-weight: bold;
  font-size: 48px;
  text-align: left;
  margin-left: 18%;
  margin-top: 25%;
}

.b-text2 {
  color: white;
  font-size: 20px;
  text-align: left;
  margin-left: 19%;
  margin-top: 50%;
}

.white-box {
  width: 50%;
  height: 100%;
  color: white;
  margin-left: auto;
  text-align: left;
}

.l-box1 {
  margin-left: 12%;
}

.b-text3 {
  color: var(--primary-def);
  font-size: 48px;
  font-weight: bold;
  margin-top: 16%;
}

.b-text4 {
  color: var(--gray800);
  font-size: 32px;
  font-weight: bold;
  margin-top: 7%;
  margin-bottom: 20px;
}

.b-text5 {
  color: var(--gray800);
  font-size: 20px;
}

.b-text6 {
  color: var(--gray800);
  margin-left: 10px;
}

.b-text-box {
  width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: -10px;
}

.line-text {
  display: flex;
  width: 55%;
  flex-basis: 100%;
  align-items: center;
  color: var(--gray400);
  font-size: 16px;
  margin-top: 50px;
}

.line-text::before {
  content: '';
  flex-grow: 1;
  margin: 0px 16px;
  background: var(--gray400);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
}

.line-text::after {
  content: '';
  flex-grow: 1;
  margin: 0px 16px;
  background: var(--gray400);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
}

.btn-box1 {
  display: flex;
  margin: auto;
}

.btn-b1 {
  width: 50px;
  height: 50px;
  background-color: var(--primary-l4);
  border-radius: 53px;
  margin-left: 53px;
  margin-top: 20px;
}

.b-text7 {
  display: flex;
  color: var(--gray400);
  margin: auto;
  margin-top: 20px;
}

.b-text7 p {
  margin-left: 90px;
}
</style>
