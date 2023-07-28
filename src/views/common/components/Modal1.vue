<template>
    <div class="black-bg" @click="$emit('close-modal')">
    <div class="modal1">
        <p class="t1">정말 탈퇴하시겠어요?</p>
        <p class="t2">탈퇴할 시, 계정은 삭제되며 복구되지 않습니다.</p>
        <Buttons btntype="danger" style="width: 120px; height: 25px; padding: 15px;
        border-radius: 10px; float: left; margin-left: 32%; margin-top: 40px;">탈퇴</Buttons>
        <Buttons btntype="solid" style="width: 120px; height: 25px; padding: 15px; color: #717971;
        background-color: #DDE5DB; border-radius: 10px; float: right; margin-right: 32%;
        margin-top: 40px;" @click="modalOpen = false">취소</Buttons>
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
    padding: 20px;
    position: fixed;
    left: 0;
    top: 0;
}

.modal1 {
    width: 60%;
    height: 40%;
    background-color: white;
    border: solid 1px #DDE5DB;
    border-radius: 10px;
    margin: auto;
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
</style>