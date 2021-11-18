import Footer from '@/components/Footer.vue';
<template lang="pug">
div.footer
    h4#copy.footer Fallow My Software &copy; {{ getDate }}
</template>

<script>
export default {
name: "Footer",
computed:{
    getDate(){
        return new Date().toDateString()
    }
}
}
</script>

<style lang="scss">
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: black;
    width: 100%;
    height: 60px;
    text-align: center;
    color: rgb(241, 227, 227);
    bottom: 0;
}
</style>