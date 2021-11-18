const app = Vue.createApp({
    data(){
        return{
            title: "Vue con axios",
            users: []
        }
    },
    created(){
        this.getPhotos();
    },
    methods:{
        async getPhotos(){
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.users = data;
        }
    }
});