<template lang="pug">
.container
  .personal-data
    h1.nombre {{ name }}
    p Soy desarrollador web programo bac-kend en el
      span.lenguajes lenguaje PHP y Front-End en VueJS
      | Puedes contactarme a este número 9612365046.
      //- p comentarios en Pug
      // p comentarios en HTML5
    img(
      src="https://static1.diariosur.es/www/multimedia/201909/30/media/cortadas/imagensensible-kYzD-U90285421336FWD-624x385@Diario%20Sur.jpg",
      width="300",
      height="200"
    )
    h3 Lenguajes que domino:
    ul
      li(v-for="(lenguaje, index) in lenguajes", :key="index") 
        a {{ lenguaje }}
    
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "Darinel Cigarroa De Los Santos",
      lenguajes: ["PHP", "VueJS", "JS", "Laravel"],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary: #b91646;
$secondary: #dfd8ca;
$succses: #105652;
ul {
  list-style: none;
  display: inline-block;
  li {
    background-color: $primary;
    margin: 2px;
    padding: 5px;
    text-align: center;
    &:hover {
        background-color: green;
      }
    a {
      color: $secondary;
      &:hover {
        color: black;
      }
    }
  }
}

img {
  margin: 5px;
}
.personal-data {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: $secondary;
  margin-top: 10px;
  width: auto;
  height: auto;
  padding: 30px;
}
.personal-data .nombre {
  font-size: 25px;
}
.personal-data h4 {
  color: $primary;
}
.personal-data .lenguajes {
  color: $succses;
}
.footer {
  font-size: 20px;
}
#copy {
  font-weight: 600;
}
</style>
