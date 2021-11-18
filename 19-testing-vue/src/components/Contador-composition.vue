<template>
  <h1>{{ msg }}: {{ count }}</h1>
  <button class="add" @click="add">+1</button>
  <button class="dis" @click="dis">-1</button>
</template>

<script>
export default {
  name: "Contador-composition",
  setup(){
      const msg = "Counter";
      const count = ref(0);
      const add = () => {
          count.value++;
      }
      const dis = () => {
          count.value--;
      }
      return {
          count,
          add,
          dis,
          msg
      }
  }
};
</script>