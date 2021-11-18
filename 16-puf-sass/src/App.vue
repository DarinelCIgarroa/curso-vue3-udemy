<template lang="pug">
div 
  router-link(to="/") Home |
  router-link(to="/about") About
  Footer
  router-view

</template>
<script>
import Footer from "./components/Footer.vue";

export default {
  components:{
    Footer
},
}
</script>
<style lang="scss">
$primary: #B91646;
$secondary: #DFD8CA;
$succses: #105652;

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
