<template>
  <h1>{{ msg }}: {{ count }}</h1>
  <button class="add" @click="add">+1</button>
  <button class="dis" @click="dis">-1</button>
</template>

<script>
export default {
  name: "Contador",
  data: () => ({
    msg: "Counter",
    count: 0,
  }),
  methods: {
    add() {
      this.count++;
    },
    dis() {
      this.count--;
    },
  },
};
</script>