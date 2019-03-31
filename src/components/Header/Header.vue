<template>
    <div class="header">
        <div class="container">
            <div class="header-content">
                <img src="../../assets/logo.png">
                <div class="control-panel">
                    <MyAccount/>
                    <MyCart
                            @removeFromCart="emitRemoveItemFromCart"
                            :goods="goods"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import MyAccount from './MyAccount/MyAccount.vue';
    import MyCart from './MyCart/MyCart.vue'
    import {IGood} from '../../common/interfaces/IGood';

    export default Vue.extend({
        props: {
            goods: {} as (() => IGood[])
        },
        components: {MyAccount, MyCart},
        methods: {
            emitRemoveItemFromCart(id: string) {
                this.$emit('removeFromCart', id);
            }
        }
    });

</script>

<style lang="scss" scoped>

    .header-content {
        padding-top: 24px;
        padding-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .control-panel {
        display: flex;
    }

</style>