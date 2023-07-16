<template>
  <div class="btn" :class="btnClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  btntype: {
    type: String,
    default: 'solid',
  },
});
const btnClass = computed(() => {
  switch (props.btntype) {
    case 'solid':
      return 'solid-button';
    case 'ghost':
      return 'ghost-button';
    case 'outline':
      return 'outline-button';
    case 'outlineGray':
      return 'outline-gray-button';
    case 'text':
      return 'text-button';
    case 'textThin':
      return 'text-thin-button';
    case 'textGray':
      return 'text-gray-button';
    case 'textGrayThin':
      return 'text-gray-thin-button';
    case 'outline-green':
      return 'outline-green-button';
    case 'outline-gray':
      return 'outline-gray-button';
    case 'outline-gray-small':
      return 'outline-gray-small-button';
    case 'green-background':
      return 'green-background-button';
    case 'chip':
      return 'chip';
    case 'chipGreen':
      return 'chip-green';
    case 'chipRed':
      return 'chip-red';
    default:
      return '';
  }
});
</script>

<style scoped>
.btn {
  padding: 10px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
}
.solid-button {
  background-color: var(--primary-def);
  color: var(--gray-white);
}
.ghost-button {
  background-color: var(--gray-white);
  color: var(--primary-def);
  border: 1px solid var(--primary-def);
}
.outline-button {
  color: var(--primary-def);
  border: 1px solid var(--ngray300);
}
.outline-gray-button {
  color: var(--ngray600);
  border: 1px solid var(--ngray300);
}
.text-button {
  color: var(--primary-def);
}
.text-thin-button {
  color: var(--primary-def);
  font-weight: 500;
}
.text-gray-button {
  color: var(--ngray600);
}
.text-gray-thin-button {
  color: var(--ngray600);
  font-weight: 500;
}

.outline-green-button {
  width: 90%;
  color: #00a664;
  background-color: white;
  border: solid 1px #00a664;
}

.green-background-button {
  width: 100%;
  color: white;
  background-color: #00a664;
  border: solid 1px #00a664;
  padding: 15px;
}

.outline-gray-button {
  width: 90%;
  color: #00a664;
  background-color: white;
  border: solid 1px #a5ada4;
}

.outline-gray-small-button {
  width: 60px;
  height: 12px;
  color: #c1c9bf;
  background-color: white;
  border-radius: 20px;
  border: solid 1px #c1c9bf;
  font-size: 12px;
  font-weight: 200;
  margin-top: 15px;
  text-align: center;
  padding: 5px;
}
.chip {
  padding: 8px 18px;
  border-radius: 24px;
  background-color: var(--ngray50);
  color: var(--ngray800);
}
</style>
