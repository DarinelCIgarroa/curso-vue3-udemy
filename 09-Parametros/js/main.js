const app = Vue.createApp({
    data() {
        return {
            title: "Peticiones multiples",
            postId: "",
            post: [],
            user: []
        }
    },
    methods: {
        async getpost() {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`);
            this.post = data;

            const { userId } = data;

            const { data: dataUser } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            this.user = dataUser
        }
    }
})