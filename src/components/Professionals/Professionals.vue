<template>
    <div class="container">
        <div>
            <h1>Professionals</h1>
        </div>
        <div class="container">
            <div class="row col-md-12">
                <div v-if="professionals.length >0" >
                    <div v-for="professional in professionals" :key="professional.id" class="col-sm-4 clear-both float-left">
                        <ProfessionalList :professional="professional" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfessionalList from './ProfessionalList.vue';
import axios from 'axios';

export default {
    name: "Professionals",
    components: {
        ProfessionalList
    },
    data() {
        return {
            professionals: []
        }
    },
    methods: {
        async getProfessionalList () {

            const api = "https://laravel.hitcheed.com/api/v1/professionals";
            //const api = 'http://hitcheedlaravel.test/api/v1/professionals';

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache',

            }
            await axios.get(api,{crossDomain: true})
            .then((response) => {
                console.log(response.data.data);
                this.professionals = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted() 
    {
        this.getProfessionalList();
    }
}

</script>

<style scoped>
h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
}
</style>