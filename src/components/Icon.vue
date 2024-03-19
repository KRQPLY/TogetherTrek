<template>
  <component :is="iconComponent" class="white" />
</template>

<script setup>
import { computed } from "vue";
import LogoOne from "@/components/icons/LogoOne.vue";
import LogoTwo from "@/components/icons/LogoTwo.vue";
import LogoThree from "@/components/icons/LogoThree.vue";

const props = defineProps({
  iconType: {
    type: Number,
    default: 1,
  },
});

const iconComponent = computed(() => {
  switch (props.iconType) {
    case 1:
      return LogoOne;
      break;
    case 2:
      return LogoTwo;
      break;
    case 3:
      return LogoThree;
      break;
    default:
      return LogoOne;
      break;
  }
});
</script>

<style lang="scss" scoped></style>
