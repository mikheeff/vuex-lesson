<template>
    <div id="app">
        <Header
                @removeFromCart="handleRemoveFromCart"
                :goods="goods"/>
        <Navigation/>
        <main class="content">
            <router-view
                    @removeFromCart="handleRemoveFromCart"
                    @addToCart="handleAddToCart"/>
        </main>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Header from './components/Header/Header.vue';
    import Navigation from './components/Navigation/Navigation.vue';
    import {IGood} from './common/interfaces/IGood';

    interface IAppData {
        goods: IGood[]
    }

    export default Vue.extend({
        data(): IAppData {
            return {
                goods: []
            }
        },
        methods: {
            handleAddToCart(good: IGood) {
                if (!(this.goods.indexOf(good) > -1)) {
                    this.goods.push(good)
                }
            },
            handleRemoveFromCart(id: string) {
                this.goods = this.goods.filter((good: IGood) => good.id !== id);
            }
        },
        components: {
            Header,
            Navigation
        }
    });
</script>

<style>

</style>
