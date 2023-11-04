<template>
  <footer id="footer">
    <div class="notice-wrap" @click="noticeOpen = true">
      <Btn class="notice-title" btntype="textGrayThin">공지사항</Btn>
      <Btn v-if="noticeList != null" btntype="textGray">
        {{ noticeList[0].noticeTit }}
      </Btn>
    </div>
    <div class="eatme-info-wrap">
      <div class="eatme-cs">
        <Btn btntype="ghostGray">EAT ME 고객센터</Btn>
        <Btn
          btntype="ghostGray"
          @click="goPage('seller-reg')"
          v-if="
            corp && corp.toLowerCase() === '가맹점 등록이 되지 않은 계정입니다.'
          ">
          가맹 신청하기
        </Btn>
      </div>
      <div class="eatme-info">
        <Btn btntype="textGrayThin">사업자정보확인</Btn>
        <Btn btntype="textGrayThin">이용약관</Btn>
        <Btn btntype="textGrayThin">개인정보처리방침</Btn>
      </div>
    </div>
  </footer>
  <Modal v-if="noticeOpen" @close="noticeOpen = false"></Modal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Btn from '../../components/Btn.vue';
import Modal from '../../components/Modal.vue';
import { ApiUtils } from '../../utils/ApiUtils';
import { router } from '@/router';

const noticeOpen = ref(false);

const apiUtils = new ApiUtils();

const noticeList = ref();

/* 공지 데이터 불러오기 */
let today = new Date();
let tY = today.getFullYear();
let tM = String(today.getMonth() + 1).padStart(2, '0');
let tD = String(today.getDate()).padStart(2, '0');
let todayFormat = `${tY}-${tM}-${tD}`;

const noticeParam = {
  noticeTp: '전체',
  noticeFrdt: todayFormat,
  noticeTodt: todayFormat,
};
async function getNoticeList() {
  const result = await apiUtils.post('/api/admin/notice/query', noticeParam);
  noticeList.value = result.data.reverse();
}
const emit = defineEmits(['notice']);

const sendNotice = () => {
  emit('notice', noticeList);
};

const corp = ref('');

onMounted(async () => {
  const corpData = {
    userId: sessionStorage.getItem('userId'),
  };

  const token = sessionStorage.getItem('token');

  if (token) {
    try {
      const resultCorp = await apiUtils.post('/api/login/getCorpCd', corpData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      corp.value = resultCorp;
      console.log(corp.value);
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }
  }
  getNoticeList();
  sendNotice();
});

const clickedItem = ref(window.location.pathname.substring(1) || 'home');

const goPage = (page) => {
  if (page === 'home') router.push('/');
  else router.push('/' + page);
  clickedItem.value = page;
};
</script>

<style scoped>
#footer {
  padding: 0 75px 20px;
  background-color: var(--gray10);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.notice-wrap {
  display: flex;
  align-items: center;
  padding-block: 10px;
  border-bottom: 1px solid var(--ngray200);
}
.notice-title {
  font-size: 16px;
  color: var(--ngray600);
}
.notice-wrap .btn {
  font-size: 16px;
}
.eatme-info-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.eatme-cs {
  display: flex;
  gap: 18px;
}
.eatme-cs .btn {
  font-size: 14px;
  width: 140px;
  font-weight: 500;
}
.eatme-info {
  display: flex;
}
.eatme-info .btn {
  font-size: 14px;
  color: var(--ngray500);
}
</style>
