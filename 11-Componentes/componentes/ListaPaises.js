app.component('lista-paises', {
    template: `
    <h1>lista de paisajes</h1>
    <ul>
        <li v-for="pais of paises" :key="pais"> {{ pais }} </li>
    </ul>
    `,
    props:{
        paises:{
            type: Array,
            required: true
        }
    }
}
)

