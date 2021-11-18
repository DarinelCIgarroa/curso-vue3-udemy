<template>
  <div id="btn-contador">
    <button>{{ texto }}</button>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: "Aumentar",
    },
  },
};
</script>

<style></style>
