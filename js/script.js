const { createApp } = Vue;

createApp({
    data() {
        return {
            active : true,
            names: ['Michela', 'Fabio', 'Roberta', 'Gino']
        }
    },
    methods: {
        invertActive(){
            this.active = !this.active;
        },

        isUserLogged(){
            return this.active;
        }
    },
}).mount('#app');


