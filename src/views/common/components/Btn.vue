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
    case 'LightSolid':
      return 'light-solid-button';
    case 'ghost':
      return 'ghost-button';
    case 'ghostGray':
      return 'ghost-gray-button';
    case 'ghostDark':
      return 'ghost-dark-button';
    case 'ghostWhite':
      return 'ghost-white-button';
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
    case 'outline-gray-small':
      return 'outline-gray-small-button';
    case 'chip':
      return 'chip';
    case 'chipGreen':
      return 'chip-green';
    case 'chipRed':
      return 'chip-red';
    case 'userInfo':
      return 'userInfo-button';
    case 'slideNav':
      return 'slide-nav-button';
    case 'danger':
      return 'danger-button';
    case 'opacityBlack':
      return 'opacity-black-button';
    case 'Disabled':
      return 'disabled-button';
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
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.solid-button {
  background-color: var(--primary-def);
  color: var(--gray-white);
}
.light-solid-button {
  background-color: var(--ngray100);
  color: var(--primary-def);
}
.ghost-button {
  color: var(--primary-def);
  border: 1px solid var(--primary-def);
}
.ghost-gray-button {
  color: var(--ngray600);
  border: 1px solid var(--ngray300);
}
.ghost-dark-button {
  color: var(--primary-l3);
  border: 1px solid var(--primary-l3);
}
.ghost-white-button {
  color: var(--ngray100);
  border: 1px solid var(--ngray100);
}
.outline-button {
  background-color: var(--gray-white);
  color: var(--primary-def);
  border: 1px solid var(--ngray300);
}
.outline-gray-button {
  background-color: var(--gray-white);
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
  font-weight: 300;
}

.chip-green {
  padding: 8px 18px;
  border-radius: 24px;
  background-color: var(--primary-def);
  color: var(--gray-white);
  font-weight: 300;
}

.userInfo-button {
  color: var(--ngray900);
  border: 1px solid #a5ada4;
  font-weight: 400;
}
.slide-nav-button {
  background-color: rgba(25, 28, 26, 0.2);
  color: var(--gray-white);
}
.danger-button {
  background-color: var(--system-danger);
  color: var(--gray-white);
}
.opacity-black-button {
  width: 118px;
  height: 36px;
  color: #fff;
  background-color: rgba(25, 28, 26, 0.2);
  padding-bottom: 0px;
  font-weight: 200;
  border-radius: 20px;
}
.disabled-button {
  background-color: var(--ngray100);
  color: var(--gray-white);
  cursor: inherit;
}
</style>
