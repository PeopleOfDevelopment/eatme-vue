<template>
    <div class="btn"
    :style="{ backgroundColor: color, color: fontColor
            ,border: borderColor, padding: padding}"
    :class="{ large }">
        {{ i }}
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
                default: 'solid 1px #00A664',
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
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    width: 90%;
}
</style>