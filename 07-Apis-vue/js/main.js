const app = Vue.createApp({
    data() {
        return {
            title: "Peticiones en Vue",
            images: []
        }
    },
    created() {
        this.getPost();
    },
    methods: {
        async getPost() {
            const response =  await fetch('https://jsonplaceholder.typicode.com/photos/10')
            const data = await response.json();
            this.images = data;
        }
    }
})