<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <Contador />
    <ButtonCounter @action="aumentar" action="+1" />
    <ButtonCounter @action="disminuir" action="-1" />
    <hr />
    <h2>Formulario</h2>
    <form @submit.prevent="FormData">
      <label for="name">Nombre:</label>
      <p>
        <input
          v-model="user.name"
          type="text"
          placeholder="Ingresa tu nombre"
        />
      </p>
      <label for="edad">Edad:</label>
      <p>
        <input v-model="user.age" type="number" placeholder="Ingresa tu edad" />
      </p>
      <input type="submit" value="enviar" />
    </form>
    <hr>
    <h1>Reactive</h1>
    <h3>Nombre: {{ people.name }} </h3>
    <h3>Apellidos: {{ people.lastname}}</h3>
    <h3>Edad: {{ people.age }}</h3>
  </div>
</template>

<script>
import ButtonCounter from "./counter/ButtonCounter.vue";
import { ref, computed, reactive } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";
import Contador from "./counter/Contador.vue";
// import useCounter from "../hooks/useCounter.js";

export default {
  name: "HelloWorld",
  components: {
    ButtonCounter,
    Contador,
  },
  props: {
    msg: String,
  },
  setup(props) {

    const people = reactive({
      name: "Darinel",
      lastname: "Cigarroa De Los Santos",
      age: 24
    });

    const title = ref(props.msg);
    const user = ref({
      name: "",
      age: "",
    });
    const contador = ref(0);
    provide("contador", contador);

    const aumentar = () => {
      contador.value++;
    };
    const disminuir = () => {
      contador.value--;
    };
    const decoration = computed(() => {
      return contador.value < 0 ? "color: red;" : "color: green;";
    });
    provide("decoration", decoration);

    const FormData = () => {
      alert(
        "Los datos son: " +
          " Nombre: " +
          user.value.name +
          " Edad: " +
          user.value.age
      );
      user.value.name = "";
      user.value.age = "";
    };
    // const { contador, aumentar, disminuir, decoration } = useCounter();

    return {
      title,
      user,
      FormData,
      contador,
      aumentar,
      disminuir,
      decoration,
      people
    };
  },
};
</script>
