import { reactive } from "vue"
import { Store } from '../intefaces/store';

const store = reactive<Store>({
    nombre: "Darinel",
    apellido: "Cigarroa",
    edad: 24,
    estudiante: false,
    crecer(){
        this.edad++;
    }
})

export default store;