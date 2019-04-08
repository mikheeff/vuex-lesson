<template>
    <div id="app">
        <Header/>
        <Navigation/>
        <main class="content">
            <router-view/>
        </main>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Header from './components/Header/Header.vue';
    import Navigation from './components/Navigation/Navigation.vue';

    export default Vue.extend({
        components: {
            Header,
            Navigation
        }
    });
</script>

<style>

</style>
