<template>
    <div>
        <div class="box2">
            <div class="box2-border">
                <p class="box2-text1">회원 정보</p>
            </div>
            <div class="box2-2">
                <p class="box2-2-text1">아이디</p>
                <p class="box2-2-text2">{{ user.userId }}</p>
            </div>
            <div class="box2-3">
                <p class="box2-3-text1">비밀번호</p>
                <p class="box2-3-text2" v-if="!isEditingUserPw">{{ user.userPw }}</p>
                <input v-else class="info-data" v-model="editedData.userPw" />
                <div style="margin-left: auto;">
                    <div v-if="!isEditingUserPw">
                        <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;"
                        @click="toggleEditing('userPw')">비밀번호 변경</Btn>
                    </div>
                    <div v-else class="btn-box">
                        <Btn btntype="ghostGray" @click="editComplete('userPw')">확인</Btn>
                        <Btn btntype="ghostGray" @click="editCancel('userPw')">취소</Btn>
                    </div>
                </div>
            </div>
            <div class="box2-3">
                <p class="box2-4-text1">이름(실명)</p>
                <p class="box2-3-text2">{{ user.userNm }}</p>
                <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-left: auto; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;">이름 수정</Btn>
            </div>
            <div class="box2-3">
                <p class="box2-5-text1">닉네임</p>
                <p class="box2-3-text2" v-if="!isEditingUserNick">{{ user.userNick }}</p>
                <input v-else class="info-data" v-model="editedData.userNick" />
                <div style="margin-left: auto;">
                    <div v-if="!isEditingUserNick">
                        <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;"
                        @click="toggleEditing('userNick')">닉네임 변경</Btn>
                    </div>
                    <div v-else class="btn-box">
                        <Btn btntype="ghostGray" @click="editComplete('userNick')">확인</Btn>
                        <Btn btntype="ghostGray" @click="editCancel('userNick')">취소</Btn>
                    </div>
                </div>
            </div>
            <div class="box2-3">
                <p class="box2-6-text1">이메일</p>
                <p class="box2-3-text2" v-if="!isEditingUserEmail">{{ user.userEmail }}</p>
                <input v-else class="info-data" v-model="editedData.userEmail" />
                <div style="margin-left: auto;">
                    <div v-if="!isEditingUserEmail">
                        <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;"
                        @click="toggleEditing('userEmail')">이메일 변경</Btn>
                    </div>
                    <div v-else class="btn-box">
                        <Btn btntype="ghostGray" @click="editComplete('userEmail')">확인</Btn>
                        <Btn btntype="ghostGray" @click="editCancel('userEmail')">취소</Btn>
                    </div>
                </div>
            </div>
            <div class="box2-3">
                <p class="box2-7-text1">휴대전화</p>
                <p class="box2-3-text2">010-****-1234</p>
                <Btn btntype="userInfo" style="width: 100px; height: 20px; margin-left: auto; margin-right: 40px; margin-top: -10px; margin-bottom: 10px;">휴대전화 변경</Btn>
            </div>
            <p class="red-text1" @click="handle_toggle">회원 탈퇴</p>

            <div class="black-bg" v-show="modalOpen">
                <div class="modal1">
                <p class="t1">정말 탈퇴하시겠어요?</p>
                    <p class="t2">탈퇴할 시, 계정은 삭제되며 복구되지 않습니다.</p>
                    <Btn btntype="danger" style="width: 120px; height: 25px; padding: 15px;
                    border-radius: 10px; float: left; margin-left: 32%; margin-top: 40px;"
                    @click="exit()">탈퇴</Btn>
                    <Btn btntype="solid" style="width: 120px; height: 25px; padding: 15px; color: #717971;
                    background-color: #DDE5DB; border-radius: 10px; float: right; margin-right: 32%;
                    margin-top: 40px;" @click="handle_toggle">취소</Btn>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import Btn from '../../../common/components/Btn.vue';
import Footer from '../../../common/main/footer/Footer.vue';
import { ref } from 'vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
import { onMounted } from 'vue';
import Mypage from '../Mypage.vue';

const modalOpen = ref(false);   

const handle_toggle = () => {
    modalOpen.value = !modalOpen.value;
}

const apiUtils = new ApiUtils();

const user = ref([]);

const userData = {
    userId: sessionStorage.getItem('userId'),
}

async function myPage() {
    const token = sessionStorage.getItem('token');

    const result = await apiUtils.post('/api/mypage/query', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    user.value = result.data
    console.log(user.value);
};

async function update() {
  try {
    const result = await apiUtils.post('/api/mypage/changeUser', user.value);
    if (result === 1) {
      alert('프로필이 업데이트되었습니다.');
      console.log('업데이트 성공');
    } else {
      console.log('업데이트 실패');
    }
  } catch (error) {
    console.error('업데이트 중 오류 발생:', error);
  }
}

const isEditingUserPw = ref(false);
const isEditingUserNick = ref(false);
const isEditingUserEmail = ref(false);
const isEditingUserAddr = ref(false);

const editedData = ref({
  userPw: user.value.userPw,
  userNick: user.value.userNick,
  userEmail: user.value.userEmail,
  userAddr: user.value.userAddr,
});

const toggleEditing = (field) => {
  if (field === 'userPw') {
    isEditingUserPw.value = !isEditingUserPw.value;
    editedData.value.userPw = user.value.userPw;
  } else if (field === 'userNick') {
    isEditingUserNick.value = !isEditingUserNick.value;
    editedData.value.userNick = user.value.userNick;
  } else if (field === 'userEmail') {
    isEditingUserEmail.value = !isEditingUserEmail.value;
    editedData.value.userEmail = user.value.userEmail;
  } else if (field === 'userAddr') {
    isEditingUserAddr.value = !isEditingUserAddr.value;
    editedData.value.userAddr = user.value.userAddr;
  }
};

const editCancel = (field) => {
  toggleEditing(field);
};

const editComplete = (field) => {
  if (field === 'userPw') {
    user.value.userPw = editedData.value.userPw;
  } else if (field === 'userNick') {
    user.value.userNick = editedData.value.userNick;
  } else if (field === 'userEmail') {
    user.value.userEmail = editedData.value.userEmail;
  } else if (field === 'userAddr') {
    user.value.userAddr = editedData.value.userAddr;
  }
  update();
  toggleEditing(field);
};

const testData = {
    userId: sessionStorage.getItem('userId'),
    userNm: '김회원'
}

async function exit() {
  const result = await apiUtils.post('/api/mypage/exit', testData);
  console.log('탈퇴완료');
};

onMounted(() => {
    myPage();
})
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
    width: 70%;
    display: flex;
    margin: 0 auto;
    margin-top: 6%;
    margin-bottom: 6%;
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
    margin-top: 20px;
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
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
}
.black-bg{
    width: 1670px;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
    position: fixed;
    left: 0;
    top: 0;
    margin-left: 249px;
}

.modal1 {
    width: 60%;
    height: 40%;
    background-color: white;
    border: solid 1px #DDE5DB;
    border-radius: 10px;
    margin: 0 auto;
    font-family: Pretendard;
    margin-top: 15%;
}

.t1 {
    color: #161D17;
    padding-top: 40px;
    font-weight: bold;
    font-size: 34px;
    margin: 0 auto;
    margin-top: 40px;
}

.t2 {
    color: #2B322C;
    padding-bottom: 24px;
    font-size: 20px;
    margin: 0 auto;
    margin-top: 40px;
}

.info-data {
  flex: 1 0 0;
  color: var(--ngray800);
  font-weight: 700;
  font-size: 18px;
  font-family: Pretendard;
  padding: 2px;
  width: 100%;
  margin-top: -10px;
  margin-bottom: 10px;
}

.btn-box {
  display: flex;
  gap: 4px;
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>