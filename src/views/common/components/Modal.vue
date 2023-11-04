<template>
  <div class="dimmed">
    <div class="modal">
      <div class="title-wrapper">
        <Btn btntype="textGray" :class="{ transparent: !isNoticeSelected }">
          <span
            @click="isNoticeSelected = false"
            class="material-symbols-rounded">
            chevron_left
          </span>
        </Btn>
        <div class="title">공지사항</div>
        <Btn btntype="textGray">
          <span class="material-symbols-rounded" @click="$emit('close')">
            close
          </span>
        </Btn>
      </div>
      <div v-if="!isNoticeEdited" class="contents-wrapper">
        <!--공지 목록-->
        <div v-if="!isNoticeSelected" class="list-container">
          <div
            v-for="(notice, index) in noticeList"
            key="index"
            class="notice-list"
            @click="showContents(index)">
            <div class="notice-title">{{ notice.noticeTit }}</div>
            <div class="notice-date">
              {{ notice.noticeFrdt }}
              <span v-if="isAdmin">~ {{ notice.noticeTodt }}</span>
            </div>
          </div>
        </div>
        <!--공지 상세-->
        <div v-else class="notice-contents">
          <div class="title-container">
            <div class="notice-title">{{ selectedNotice.noticeTit }}</div>
            <div class="notice-date">
              {{ selectedNotice.noticeFrdt }}
              <span v-if="isAdmin">~ {{ selectedNotice.noticeTodt }}</span>
            </div>
          </div>
          <div
            class="selected-contents"
            v-html="selectedNotice.noticeTxt"></div>
          <div v-if="isAdmin" class="admin-btn-wrap">
            <Btn btntype="ghostGray">수정</Btn>
            <Btn btntype="ghostGray">삭제</Btn>
          </div>
        </div>
        <div v-if="!isNoticeSelected && isAdmin" class="admin-btn-wrap">
          <Btn btntype="ghostGray" @click="showEditor">공지 작성</Btn>
        </div>
      </div>
      <div v-else class="contents-wrapper">
        <div class="editor-wrap">
          <input
            type="text"
            v-model="editTitle"
            placeholder="제목을 입력해주세요" />
          <div class="editor">
            <div ref="editor"></div>
          </div>
          <div class="edit-date">
            <div class="edit-date-box">
              <label for="editFrdt">공지 시작일</label>
              <input
                type="date"
                id="editFrdt"
                v-model="editFrdt"
                :min="todayFormat" />
            </div>
            <div class="edit-date-box">
              <label for="editTodt">공지 종료일</label>
              <input
                type="date"
                id="editTodt"
                v-model="editTodt"
                :min="editFrdt" />
            </div>
          </div>
        </div>
        <div class="admin-btn-wrap">
          <Btn btntype="ghostGray" @click="insertNotice">저장</Btn>
          <Btn btntype="ghostGray" @click="isNoticeEdited = false">취소</Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from './Btn.vue';
import { ref, onMounted } from 'vue';
import { ApiUtils } from '@/views/common/utils/ApiUtils';
const apiUtils = new ApiUtils();

let today = new Date();
let tY = today.getFullYear();
let tM = String(today.getMonth() + 1).padStart(2, '0');
let tD = String(today.getDate()).padStart(2, '0');
let todayFormat = `${tY}-${tM}-${tD}`;
let tDnext = String(today.getDate() + 1).padStart(2, '0');

const isAdmin = ref(false);
const isNoticeSelected = ref(false);
const noticeList = ref([]);
const selectedNotice = ref([]);
const isNoticeEdited = ref(false);

const editTitle = ref('');
const editFrdt = ref(`${tY}-${tM}-${tD}`);
const editTodt = ref(`${tY}-${tM}-${tDnext}`);

const showContents = (index) => {
  isNoticeSelected.value = true;
  selectedNotice.value = noticeList.value[index];
};

/* 공지 데이터 불러오기 */
const noticeParam = {
  noticeTp: '전체',
  noticeFrdt: todayFormat,
  noticeTodt: todayFormat,
};
async function getNoticeList() {
  const result = await apiUtils.post('/api/admin/notice/query', noticeParam);
  noticeList.value = result.data.reverse();
}

/* 에디터 */
import Quill from 'quill';
const editor = ref(null);
let quill;

const showEditor = () => {
  isNoticeEdited.value = true;
  initializeEditor();
  if (editor.value === null) {
    setTimeout(initializeEditor, 100);
  }
};
const initializeEditor = () => {
  quill = new Quill(editor.value, {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        [{ color: [] }, { background: [] }],
        ['link', 'image'],
      ],
    },
    placeholder: '내용을 입력해주세요',
    theme: 'snow',
  });
};

/* 공지 추가 */
async function insertNotice() {
  const noticeNew = {
    noticeNo: noticeList.value.length + 1,
    noticeTit: editTitle.value,
    noticeTxt: quill.root.innerHTML,
    noticeTodt: editFrdt.value,
    noticeFrdt: editTodt.value,
    noticeTp: '전체',
  };
  try {
    const result = await apiUtils.post('/api/admin/notice/insert', noticeNew);
    joinData.value = result.data;
    console.log('공지 등록 완료');
    alert('공지가 등록되었습니다.');
    isNoticeEdited.value = false;
  } catch (error) {
    console.error('공지 등록 실패');
  }
}

onMounted(async () => {
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('userId');
  if (token && userId === 'admin') {
    isAdmin.value = true;
  } else {
    isAdmin.value = false;
  }
  getNoticeList();
});
</script>

<style scoped>
.dimmed {
  background-color: rgba(0, 0, 0, 0.5);
  width: calc(100% - 248px);
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: white;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  color: var(--ngray800);
  display: flex;
  flex-direction: column;
  min-height: 50vh;
}
.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
}
.contents-wrapper {
  padding: 18px 20px;
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.notice-list {
  padding-block: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--ngray200);
  cursor: pointer;
  gap: 40px;
}
.notice-contents {
  color: var(--ngray600);
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.notice-contents .notice-title {
  font-weight: 700;
  font-size: 18px;
}
.notice-date {
  color: var(--ngray400);
}
.selected-contents {
  line-height: 28px;
  text-align: left;
  flex: 1 0 0;
}
.list-container {
  flex: 1 0 0;
}
.admin-btn-wrap {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}
.admin-btn-wrap .btn {
  font-size: 14px;
  padding-block: 6px;
  font-weight: 500;
}
.editor-wrap {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.editor {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
}
.edit-date {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.edit-date-box {
  display: flex;
  gap: 10px;
  align-items: center;
}
.editor-wrap input {
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  font-family: pretendard;
  outline: none;
}
.edit-date input {
  padding: 4px 8px;
}
@media screen and (max-width: 768px) {
  .dimmed {
    width: 100%;
  }
}
.transparent {
  opacity: 0;
  cursor: default;
}
</style>
