<template>
    <div class="header">
        <div class="header-content">
            <img src="../../assets/logo.png">
            <div class="control-panel">
                <div class="control-panel-item is-account">
                    <div class="icon-container">
                        <img src="../../assets/23228.png" class="icon">
                    </div>
                    <span class="my-account">MY ACCOUNT</span>
                </div>
                <div class="control-panel-item">
                    <div class="icon-container">
                        <img src="../../assets/shopping-01-512.png" class="icon">
                    </div>
                    <span>MY CART</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({

    });

</script>

<style lang="scss" scoped>

    .header {
        padding: 24px 36px;
    }
    
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .control-panel {
        display: flex;

        &-item {
            display: flex;
            align-items: center;
            cursor: pointer;

            &.is-account {
                margin-right: 36px;

            }
        }
    }

    .icon-container {
        padding: 12px;
        border: 1px solid #DADADA;
        display: flex;
        margin-right: 12px;

        .icon {
            height: 24px;
            width: 24px;
        }
    }

    .my-account {
        position: relative;
        &::after {
            content: '';
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid black;
            position: absolute;
            top: 50%;
            right: -16px;
            transform: translateY(-50%);
        }
    }
</style>