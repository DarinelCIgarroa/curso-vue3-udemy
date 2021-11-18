const app = Vue.createApp({
    data(){
        return{
            title: "Hola mundo",
            num1: 0,
            num2: 0   
        }
    },
    computed:{
        suma(){
            return this.num1 + this.num2;
        },
        resta(){
            return this.num1 - this.num2;
        },
        multiplicacion(){
            return this.num1 * this.num2;
        },
        division(){
            const resultDivision =  this.num1 / this.num2;

            return resultDivision === Infinity || resultDivision === -Infinity ? 'Error - No calculable' : resultDivision; 
        }

    }
});