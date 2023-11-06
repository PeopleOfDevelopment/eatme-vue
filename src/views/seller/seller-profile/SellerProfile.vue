<template>
  <Sidebar pageType="seller"></Sidebar>
  <div id="main-wrapper">
    <h2 class="page-title">판매자 정보</h2>
    <div class="info-table">
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">상호명</span>
          <span class="info-data">
            {{ sellerProfile.corpNm }}
          </span>
        </div>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">소개</span>
          <span v-if="!isEditingCorpDesc" class="info-data">
            {{ sellerProfile.corpDesc }}
          </span>
          <input v-else class="info-data" v-model="editedData.corpDesc" />
        </div>
        <div v-if="!isEditingCorpDesc" class="btn-box">
          <Btn btntype="ghostGray" @click="toggleEditing('corpDesc')">수정</Btn>
        </div>
        <div v-else class="btn-box">
          <Btn btntype="ghostGray" @click="editComplete('corpDesc')">확인</Btn>
          <Btn btntype="ghostGray" @click="editCancel('corpDesc')">취소</Btn>
        </div>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">대표자명</span>
          <span class="info-data">{{ sellerProfile.ceoNm }}</span>
        </div>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">대표 전화번호</span>
          <span class="info-data">{{ sellerProfile.corpPhoneNumber }}</span>
        </div>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">이메일</span>
          <span class="info-data">{{ sellerProfile.corpEmail }}</span>
        </div>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">사업자등록번호</span>
          <span class="info-data">{{ sellerProfile.corpRegNo }}</span>
        </div>
      </div>
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">사업장 주소</span>
          <span class="info-data">
            {{ sellerProfile.corpAddr }}
          </span>
        </div>
      </div>
      <!-- <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">사진</span>
          <span class="info-data profile-img"></span>
        </div>
        <Btn btntype="ghostGray">수정</Btn>
      </div> -->
      <div class="info-tr">
        <div class="info-wrap">
          <span class="info-label">매장 사진</span>
          <span class="info-data"><span class="place-img">
            <img :src="corpImgData" class="img-real1" />
          </span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/views/common/main/sidebar/Sidebar.vue';
import Btn from '@/views/common/components/Btn.vue';
import { ref, onMounted } from 'vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
import axios from 'axios';

const apiUtils = new ApiUtils();

const sellerProfile = ref([]);

const testData = {
  corpCd: sessionStorage.getItem('corpCd'),
};

async function getSellerProfile() {
  const result = await apiUtils.post('/api/sellerProfile/query', testData);
  sellerProfile.value = result.data;
  console.log(sellerProfile.value.corpCd);

  getCorpImg();
}
async function updateSellerProfile() {
  try {
    const result = await apiUtils.post(
      '/api/sellerProfile/update',
      sellerProfile.value
    );
    if (result === 1) {
      alert('프로필이 업데이트되었습니다.');
      console.log('판매자 프로필 업데이트 성공');
    } else {
      console.log('판매자 프로필 업데이트 실패');
    }
  } catch (error) {
    console.error('판매자 프로필 업데이트 중 오류 발생:', error);
  }
}

const isEditingCorpDesc = ref(false);

const editedData = ref({
  corpDesc: sellerProfile.value.corpDesc,
});

const toggleEditing = (field) => {
  if (field === 'corpDesc') {
    isEditingCorpDesc.value = !isEditingCorpDesc.value;
    editedData.value.corpDesc = sellerProfile.value.corpDesc;
  }
};
const editCancel = (field) => {
  toggleEditing(field);
};
const editComplete = (field) => {
  if (field === 'corpDesc') {
    sellerProfile.value.corpDesc = editedData.value.corpDesc;
  }
  updateSellerProfile();
  toggleEditing(field);
};

//이미지
const imgData = {
    UUID: '',
    imgNm: '',
    imgLoc: '',
    corpCd: sellerProfile.corpCd || '',
  };

const corpImgData = ref('');

async function getCorpImg() {

  if (!imgData.corpCd) {
    corpImgData.value = require('../../../assets/img/eatme.jpg');
  }

  const reader = new FileReader();
  try {
    const result = await axios.get('/api/file/getCorpImg', {
      responseType: 'blob',
      params: {
        corpCd: sellerProfile.value.corpCd,
      },
    });
    reader.onload = () => {
      corpImgData.value = reader.result;
    };
    const blob = new Blob([result.data], { type: 'image/jpeg' });
    reader.readAsDataURL(blob);
  } catch (error) {
    console.error('이미지를 불러올 수 없습니다.', error);
    corpImgData.value = require('../../../assets/img/eatme.jpg');
  }
}

onMounted(() => {
  getSellerProfile();
});
</script>

<style scoped>
#main-wrapper {
  padding: 60px 75px;
}
.page-title {
  text-align: left;
  margin-bottom: 20px;
}
.info-table {
  font-size: 18px;
  border-top: 2px solid var(--ngray600);
}
.info-tr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--ngray100);
  padding: 16px 20px;
  gap: 15px;
}
.info-wrap {
  display: flex;
  gap: 15px;
  text-align: left;
  flex: 1;
  align-items: center;
}
.info-label {
  width: 120px;
  color: var(--ngray600);
}
.info-data {
  flex: 1 0 0;
  color: var(--ngray800);
  font-weight: 700;
  font-size: 18px;
  font-family: Pretendard;
  padding: 2px;
  width: 100%;
}
.profile-img {
  max-width: 90px;
  height: 90px;
  aspect-ratio: 1/1;
  background-color: var(--ngray200);
  border-radius: 50%;
}
.place-img {
  width: 285px;
  height: 180px;
  background-color: var(--ngray200);
  display: block;
  position: relative;
}

.img-real1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.info-table .btn {
  min-width: 48px;
  padding: 6px;
  font-size: 16px;
}
.btn-box {
  display: flex;
  gap: 4px;
}
</style>
