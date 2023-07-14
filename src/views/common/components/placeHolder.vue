<template>
    <div>
        <input class="inputInfor" type="text" :placeholder="placeholder">
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                required: true, 
            }
        }
    };
</script>

<style>
.inputInfor {
    width: 100%;
    padding: 18px;
    margin: 7px;
    font-size: 18px;
    border-radius: 4px;
    border: solid 1px #C1C9BF;
    font-weight: bold;
    font-family: Pretendard;
}

input::placeholder {
    color: #A5ADA4;
}
</style>