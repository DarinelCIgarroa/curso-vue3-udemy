const app = Vue.createApp({
    data(){
       return{
           title: "App Contador",
           count: 0
       }
    },
    methods:{
        Modcount(instruction = 'add'){
            if(instruction === 'add') this.count += 1
            else this.count -= 1
        },
    }
})