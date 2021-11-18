import { ref, computed } from "@vue/reactivity"

export default function() {
    const contador = ref(0);

    const aumentar = () => {
        contador.value++;
    };
    const disminuir = () => {
        contador.value--;
    };
    const decoration = computed(() => {
        return contador.value < 0 ? "color: red;" : "color: green;";
    });

    return {
        contador,
        aumentar,
        disminuir,
        decoration
    }
}