<template>
    <div class="btn" :class="{ large }" 
    :style="{ backgroundColor: color, color: fontColor
            ,border: borderColor, padding: padding
            ,width: width}">
        {{ text }}
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: '연속촬영하기',
            },
            color: {
                type: String,
                default: '#00A664',
            },
            fontColor: {
                default: '#00A664',
            },
            borderColor: {
                default: 'solid 1px #00A664'
            },
            padding: {
                default: '10px'
            },
            width: {
                default: '90%'
            },
        },
    };
</script>

<style>
.btn {
    display: inline-block;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    font-family: 'Pretendard';
}

.btn.large {
    font-size: 20px;
    padding: 10px 20px;
}
</style>