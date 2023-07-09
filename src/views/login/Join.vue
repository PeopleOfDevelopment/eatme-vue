<template>
    <div class="eatMe">
        <p class="text1">EAT ME</p>
        <p class="text2">회원가입</p>
        <div class="box1">
            <p style="color: #2E312E">이미 EAT ME의 회원이신가요?</p>
            <p>로그인</p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.eatMe {
    margin-top: 5%;
    display: block;
    text-align: center;
    padding: 0px;
}

.text1 {
    font-size: 48px;
    margin: 16px;
}

.text2 {
    color: #2E312E;
    font-size: 32px;
    margin: 20px;
}

.box1 {
    display: block;
    text-align: center;
    font-size: 0;
}

.box1 p {
    display: inline-block;
    font-size: 20px;
    padding-right: 100px;
    font-weight: lighter;
    font-family: Pretendard;
}
</style>