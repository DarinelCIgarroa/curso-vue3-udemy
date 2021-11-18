<template>
  <h1>Saldo: $ {{store.saldo}}</h1>
  <button @click="store.actionBalance(500)">Aumentar 500</button>
  <button @click="store.actionBalance(-100)">Disminuir 100</button>
</template>

<script setup>
import store from "../store/sotre.js";
</script>