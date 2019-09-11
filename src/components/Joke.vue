<template>
    <div class="Joke container">
        <div class="row justify-content-end align-items-center">
            <div class="col-6">
                <h1 class="vueGreen"><img alt="Vue logo"
                        src="https://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg?itok=_J3M4O-S">ery
                    Chuck Jokes</h1>
                <p>Laughs: {{currentLaughs}}</p>
            </div>
        </div>
        <div class="row justify-content-start align-items-center mt-5">
            <div class="card vueGreen col-6">
                <div class="card-body">
                    <p class="card-text">{{joke.value}}</p>
                    <p class="card-text">{{msg}}</p>
                    <button @click="newJoke" class="btn btn-success">Get New Joke</button>
                    <button @click="laugh" class="btn btn-success">Haha</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Joke",
        props: ["msg"],
        mounted() {
            this.newJoke()
        },
        data() {
            return {
                currentLaughs: 0
            }
        },
        computed: {
            joke() {
                return this.$store.state.joke
            },
            laughs() {
                return this.$store.state.laughCount
            }
        },
        methods: {
            newJoke() {
                this.$store.dispatch('getJoke')
            },
            laugh() {
                this.currentLaughs += 1
            }
        },
        components: {}
    }
</script>
<style>
</style>