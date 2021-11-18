const app = Vue.createApp({
    data: () => ({
        title: "Formulario",
        datos:{
            name: "",
            age: "",
            langs:[],
            genere: "hombre"
        }
    }),
    methods:{
        enviar(){
            console.log(this.datos);
            this.datos = ""
        }
    },
});