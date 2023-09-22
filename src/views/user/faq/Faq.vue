<template>
    <p class="eatme-text">EAT ME</p>
    <div class="title-box1">
        <p class="faq-title1">자주 묻는 질문</p>
        <p class="faq-title2">FAQ</p>
    </div>
    <div class="faq-box1" v-for="(item, idx) in faq_data">
        <p class="number1">{{ item.number }}</p>
        <div class="text-box1">
            <p class="question1">{{ item.question }}</p>
            <p class="answer1">{{ item.answer }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const faq_data = ref([
    {
        id: 0,
        number: '01',
        question: '질문1',
        answer: '답변1',
    },
    {
        id: 1,
        number: '02',
        question: '질문2',
        answer: '답변2',
    },
    {
        id: 2,
        number: '03',
        question: '질문3',
        answer: '답변3',
    },
    {
        id: 3,
        number: '04',
        question: '질문4',
        answer: '답변4',
    },
    {
        id: 4,
        number: '05',
        question: '질문5',
        answer: '답변5',
    },
]);
</script>

<style scoped>
.title-box1 {
    display: flex;
    margin: 0 auto;
    justify-content: center;
}
.eatme-text {
    font-size: 32px;
    font-weight: bold;
    color: var(--primary-def);
    margin-bottom: 0px;
    margin-top: 50px;
}
.faq-title1 {
    font-size: 48px;
    margin-top: 20px;
}

.faq-title2 {
    font-size: 48px;
    margin-top: 20px;
    margin-left: 20px;
    color: var(--primary-def);
}

.faq-box1 {
    display: flex;
    margin: 0 auto;
    width: 1200px;
    height: 200px;
    border-bottom: solid 1px #ccc;
}

.number1 {
    font-size: 48px;
    margin-right: 30px;
    color: var(--primary-def);
}
.text-box1 {
    font-size: 28px;
    margin-top: 30px;
}

.answer1 {
    color: var(--gray400);
}
</style>