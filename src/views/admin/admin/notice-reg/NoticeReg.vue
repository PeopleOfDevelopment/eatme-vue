<template>
  <TopNav
    navType="title"
    subtitle="공지 작성"
    buttonShow="Disabled"
    buttonText="등록하기"
    @close="$emit('close')"></TopNav>
  <div id="sub-wrapper">
    <div class="reg-table">
      <div class="reg-tr">
        <label for="noticeTp" class="reg-label">공지 유형</label>
        <select id="noticeTp" class="reg-input" v-model="noticeType">
          <option value="0" selected>전체</option>
          <option value="1">판매자</option>
        </select>
      </div>
      <div class="reg-tr">
        <label for="noticeTitle" class="reg-label">제목</label>
        <input type="text" id="noticeTitle" class="reg-input" />
      </div>
      <div class="reg-tr">
        <label for="noticeText" class="reg-label">내용</label>
        <textarea id="noticeText" class="reg-input"></textarea>
      </div>
      <div class="reg-tr">
        <label for="noticeStart" class="reg-label">시작일</label>
        <input type="date" id="noticeStart" class="reg-input" />
      </div>
      <div class="reg-tr">
        <label for="noticeEnd" class="reg-label">종료일</label>
        <input type="date" id="noticeEnd" class="reg-input" />
      </div>
    </div>
  </div>
</template>
<script setup>
import TopNav from '@/views/common/components/TopNav.vue';
import { ref } from 'vue';
const noticeType = ref(['0']);
</script>

<style scoped>
.subtitle-container .material-symbols-rounded {
  font-size: 40px;
  padding: 10px;
}
.subtitle-text {
  font-size: 28px;
  font-weight: 700;
  padding: 10px;
}
.reg-table {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  padding-inline: 75px;
}
.reg-tr {
  display: flex;
}
.reg-label {
  width: 100px;
}
.reg-input {
  border: none;
  outline: none;
  border-bottom: 1px solid var(--ngray200);
  font-size: 18px;
  font-family: Pretendard, sans-serif;
}
#noticeText {
  resize: none;
  border: 1px solid var(--ngray200);
  flex: 1 0 0;
  min-height: 200px;
}
</style>

/*공지 수정 URL: '/api/admin/notice/update' 파라미터: 공지번호(noticeNo),
공지제목(noticeTit), 공지내용(noticeTxt), 공지시작일(noticeTodt),
공지종료일(noticeFrdt), 공지타입(noticeTp, 판매자공지일경우 '판매자', 전체일
경우 '전체')*/
