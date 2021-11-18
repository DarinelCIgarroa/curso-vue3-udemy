import { reactive } from "vue";

const store = reactive ({
    saldo: 3000,
    actionBalance(value){
        this.saldo += value;
    },
    
});

export default store;