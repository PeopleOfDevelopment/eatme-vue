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
            <p class="o-text2">8000원</p>
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
    margin-left: auto;
    margin-right: 1%;
    width: 83%;
}

.p-text1 {
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    padding-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.p-menus1 {
    background-color: white;
    height: 196px;
    margin: 0 auto;
    border-top: solid 1px #DDE5DB;
    display: flex;
}

.p-menus2 {
    width: 30%;
    margin-right: auto;
}

.p-menus3 {
    width: 50%;
    margin-left: auto;
    margin-top: 60px;
    text-align: center;
}

.p-img1 {
    background-color: black;
    width: 166px;
    height: 150px;
    margin: 20px;
    margin-right: auto;
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
    margin-right: 10px;
    margin-bottom: 0px;
    float: left;
}

.t-text1 {
    font-weight: bold;
    text-align: left;
    float: right;
    margin-top: 10px;
    margin-right: 77%;
    margin-bottom: 0px;
}

.o-text2 {
    text-align: left;
    float: left;
    margin-top: 5px;
    font-size: 14px;
    color: #8F918D;
    text-decoration: line-through;
}

.d-text2 {
    text-align: right;
    float: left;
    margin-left: 250px;
    padding-top: 15px;
    color: #757874;
}

.t-btn1 {
    float: right;
    margin-right: 50px;
    margin-top: 18px;
}
</style>