<template>
  <h2 :style="decoration">Contador: {{ contador }}</h2>
</template>

<script>
import { inject } from "@vue/runtime-core";

export default {
  name: "Contador",
  setup() {
    const contador = inject('contador');
    const decoration = inject('decoration')
    return {
      contador,
      decoration
    };
  },
};
</script>

<style scoped>
</style>