<template>
  <button @click="actionCounter">{{ action }}</button>
</template>

<script>
export default {
  props: { action: String },
  name: "ButtonConunter",
  setup(_, { emit }) {
    const actionCounter = () => {
      emit("action");
    };
    return {
      actionCounter,
    };
  },
};
</script>

<style scoped>
button {
  margin: 2px;
}
</style>
