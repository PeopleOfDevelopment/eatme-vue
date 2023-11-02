<template>
  <div id="reg-box">
    <div class="reg-title-box">
      <h3>판매회원 가입</h3>
      <p class="sub-title">
        <span class="strong-text">가맹점 정보</span>
        를 입력해주세요.
      </p>
    </div>
    <div class="reg-input-box">
      <input
        class="reg-input"
        v-model="corpCd"
        placeholder="가맹점 코드" />
      <input
        class="reg-input"
        v-model="corpNm"
        placeholder="가맹점 이름" />
      <input
        class="reg-input"
        v-model="corpAddr"
        placeholder="가맹점 주소" />
      <input
        class="reg-input"
        v-model="corpDesc"
        placeholder="가맹점 소개 내용" />
      <input
        class="reg-input"
        v-model="ceoNm"
        placeholder="가맹점 대표 이름" />
      <input
        class="reg-input"
        v-model="corpPhoneNumber"
        placeholder="가맹점 전화번호" />
      <input
        :class="{ red: showStyle }"
        class="reg-input"
        v-model="regNumber"
        @focus="outFocus"
        @blur="checkValid"
        placeholder="-없이 숫자 10자리 입력"
        maxlength="10" />
      <span class="error-msg">{{ errorMessage }}</span>
      <p class="form-notice">
        사업자 정보 확인에 문제가 있는 경우, 사업자등록증 사본 파일과 연락
        가능한 이메일을 EAT ME 고객센터에 보내주세요.
      </p>
      <p class="form-notice strong">
        사업자등록번호를 도용하여 가입 시, 형사 처벌을 받을 수 있습니다.
      </p>
    </div>
    <Btn type="solid" @click="check()">인증하기</Btn>
  </div>
</template>
<script setup>
import Btn from '../../common/components/Btn.vue';
import { ref, onMounted } from 'vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
import { router } from '@/router';

const errorMessage = ref(null);
const errorList = [
  '사업자등록번호 숫자 10자를 정확히 입력해주세요',
  '사업자등록번호가 유효하지 않습니다.',
];

const corpCd = ref('');
const corpNm = ref('');
const regNumber = ref('');
const corpAddr = ref('');
const corpDesc = ref('');
const ceoNm = ref('');
const corpPhoneNumber = ref('');

const valid = ref(false);
const showStyle = ref(false);

const outFocus = () => {
  showStyle.value = false;
};

const checkBusinessRegNumber = (numberMap) => {
  const keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  let check = 0;
  keyArr.forEach((i, j) => {
    check += i * numberMap[j];
  });
  console.log(check);
  check += parseInt((keyArr[8] * numberMap[8]) / 10, 10);
  console.log(check);
  if (10 - (check % 10) === Math.floor(numberMap[9])) {
    return true;
  } else {
    errorMessage.value = errorList[1];
    return false;
  }
};

const checkValid = () => {
  const numberMap = regNumber.value.split('').map((num) => parseInt(num, 10));
  if (numberMap.length === 10) {
    valid.value = checkBusinessRegNumber(numberMap);
    valid.value = true;
  } else {
    errorMessage.value = errorList[0];
    valid.value = false;
  }
  showStyle.value = !valid.value;
  console.log(showStyle.value);
};

const apiUtils = new ApiUtils();

const corp = ref('');

const corpData = {
    userId: sessionStorage.getItem('userId'),
}

async function getCorpData() {
    const token = sessionStorage.getItem('token');

    const result = await apiUtils.post('/api/login/getCorpCd', corpData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    corp.value = result
    await getCorpData2();
};

const sellerProfile = ref([]);

async function getCorpData2() {
  const testData = {
    corpCd: corp.value,
  };

  const result = await apiUtils.post('/api/sellerProfile/query', testData);
  sellerProfile.value = result.data;
  console.log(result)
}

onMounted(() => {
  const token = sessionStorage.getItem('token');
    if(!token) {
        alert('로그인 후 이용할 수 있습니다.')
        router.push('/login') //토큰이 없으면 로그인 페이지로
    }
    
  getCorpData();
})

const joinData = ref([]);

const check = async () => {
  
  const corpData = {
    corpCd: corpCd.value,
    corpNm: corpNm.value,
    corpRegNo: regNumber.value,
    userId: sessionStorage.getItem('userId'),
    corpAddr: corpAddr.value,
    corpDesc: corpDesc.value,
    ceoNm: ceoNm.value,
    corpPhoneNumber: corpPhoneNumber.value
  };

  try {
    const result = await apiUtils.post('/api/sellerReg/insert', corpData)
    joinData.value = result.data;
    console.log('가맹점 등록 성공: ', result.data);
    alert('등록되었습니다.');
    router.push('/goodmanage');
  } catch (error) {
    console.error('등록 실패: ', error);
  }
};
</script>

<style scoped>
.strong-text {
  color: var(--primary-def);
}
#reg-box {
  max-width: 500px;
  margin-inline: auto;
  padding: 100px 16px 60px;
  display: flex;
  flex-direction: column;
}
.sub-title {
  font-size: 20px;
  font-weight: 700;
}
.reg-title-box,
.reg-input-box {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
}
.reg-input {
  font-size: 16px;
  outline: none;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid var(--ngray200);
  flex: 1 0 0;
  margin-bottom: 20px;
}
.red {
  border: 1px solid var(--system-danger);
}
.error-msg {
  color: var(--system-danger);
  font-size: 14px;
  padding: 2px 4px;
  margin-bottom: 4px;
}
.form-notice {
  font-size: 14px;
  color: var(--ngray400);
  margin: 0;
  padding: 10px 4px;
}
.strong {
  color: var(--ngray500);
  font-weight: 700;
}
</style>
