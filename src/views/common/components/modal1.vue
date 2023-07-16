<template>
    <button @click="modalOpen = true">모달창테스트</button>
    <div class="black-bg" v-if="modalOpen == true">
    <div class="modal1">
        <p class="t1">정말 탈퇴하시겠어요?</p>
        <p class="t2">탈퇴할 시, 계정은 삭제되며 복구되지 않습니다.</p>
        <Buttons color="#D13125" text="탈퇴" fontColor="#fff" borderColor="solid 1px #D13125"
            style="padding: 10px 40px 10px 40px; margin-right: 100px;"></Buttons>
        <Buttons color="#DDE5DB" text="취소" fontColor="#717971" borderColor="solid 1px #DDE5DB"
        style="padding: 10px 40px 10px 40px;" @click="modalOpen = false"></Buttons>
    </div>
    </div>
</template>

<script>
import Buttons from './Btn.vue';

    export default {
        components: {
            Buttons,
        },
        data() {
            return {
                modalOpen: false,
            }
        }
    }
</script>

<style scoped>
.black-bg{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
}

.modal1 {
    width: 1000px;
    height: 392px;
    background-color: white;
    border: solid 1px #DDE5DB;
    border-radius: 10px;
    margin: auto;
    font-family: Pretendard;
}

.t1 {
    color: #161D17;
    padding-top: 40px;
    font-weight: bold;
    font-size: 34px;
}

.t2 {
    color: #2B322C;
    padding-bottom: 24px;
    font-size: 20px;
}
</style>