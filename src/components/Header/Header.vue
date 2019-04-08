<template>
    <div class="header">
        <div class="container">
            <div class="header-content">
                <img src="../../assets/logo.png">
                <div class="control-panel">
                    <MyAccount/>
                    <MyCart/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import MyAccount from './MyAccount/MyAccount.vue';
    import MyCart from './MyCart/MyCart.vue'

    export default Vue.extend({
        components: {MyAccount, MyCart}
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