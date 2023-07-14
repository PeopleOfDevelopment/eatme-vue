<template>
  <div
    class="btn"
    :class="{ large }"
    :style="{ backgroundColor: color, color: fontColor, border: borderColor }">
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
    large: {
      type: Boolean,
      default: false,
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

<style scoped>
.btn {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
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
