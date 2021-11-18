<template>
  <h1>Bienvenido: {{ store.nombre }}</h1>
  <h1>Edad: {{ store.edad }}</h1>
  <button @click="store.crecer">+ 1 año</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from '../store/store';

// Otra forma de definir componentes
const Practicando = defineComponent({
  setup() {
    // const nombre: Ref<String> = ref("Darinel CIgarroa De Los Santos");
    // const persona = ref<Persona>({
    //     nombre: "Darinel",
    //     apellido: "Cigarroa",
    //     edad: 24,
    //     estudiante: false,
    //     crecer(){
    //         this.edad++
    //     }
    // })

    return {
      store,
    };
  },
});

export default Practicando;
</script>
