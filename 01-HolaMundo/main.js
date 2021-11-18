const app = Vue.createApp({
    data(){
        return{
            user:{
                name: "Darinel Cigarroa De Los Santos",
                age: 18,
                message: "Eres el mejor programador del mundo",
                movies:[
                    'Batman',
                    'El rey león',
                    'El día en que la tierra se detuvo'
                ],
                image: 'https://th.bing.com/th/id/R.7bf073ed384c60899eb70fe7f2e9664c?rik=UviSRFzIZqadSA&pid=ImgRaw&r=0',
                classValue: 'name'
            }
        }
    }
});
