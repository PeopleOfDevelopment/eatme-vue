<template>
    <div class="all">
        <p class="p-text1">구매내역</p>
        <div class="p-menus1" v-for="(a, i) in goods" :key="i">
            <div class="p-img1"></div>
            <div class="p-menus2">
            <p class="m-name1">{{ goods[i].martName }}</p>
            <p class="g-name1">{{ goods[i].title }}</p>
            <p class="d-text1">{{ goods[i].discount }}%</p>
            <p class="t-text1">{{ goods[i].price }}원</p>
            </div>
            <div class="p-menus3">
            <p class="d-text2">{{ goods[i].day }}</p>
            <Btn class="t-btn1" btntype="outline-green" style="width: 136px">리뷰 작성</Btn>
            </div>
        </div>
    </div>
</template>

<script>
import data from './goods.ts';
import Btn from '../../common/components/Btn2.vue';

    export default {
        components: {
            Btn,
        },
        data() {
            return {
                goods: data,
            }
        }
    }
</script>

<style>
.all {
    font-family: Pretendard;
    width: 1620px;
    float: right;
}

.p-text1 {
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    padding-left: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.p-menus1 {
    background-color: white;
    width: 92%;
    height: 196px;
    margin: 0 auto;
    border-top: solid 1px #DDE5DB;
    word-break: break-all;
}

.p-menus2 {
    width: 30%;
    float: left;
}

.p-menus3 {
    width: 50%;
    float: right;
    margin-top: 20px;
}

.p-img1 {
    background-color: black;
    width: 166px;
    height: 150px;
    margin: 20px;
    float: left;
}

.m-name1 {
    font-size: 20px;
    text-align: left;
    color: #8B938A;
    margin-bottom: 0px;
}

.g-name1 {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 0px;
}

.d-text1 {
    font-weight: bold;
    color: #FE5737;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 0px;
}

.t-text1 {
    font-weight: bold;
    text-align: left;
    margin-top: 10px;
    margin: 0 auto;
}

.d-text2 {
    text-align: right;
    margin-right: 20%;
}
</style>