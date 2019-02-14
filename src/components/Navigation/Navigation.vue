<template>
    <div class="nav-bar">
        <div class="nav-bar-content">
            <div class="categories">
                <span>CATEGORIES</span>
            </div>
            <div class="main-menu">
                <span>HOME</span>
                <span>SHOP</span>
                <span>WOMEN</span>
                <span>MEN</span>
                <span>SALES</span>
                <span>CATALOG</span>
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
    .nav-bar {
        .nav-bar-content {
            display: flex;
            background-color: #4A4E5A;
            color: white;
            padding-left: 48px;

            .main-menu {
                padding-top: 24px;
                padding-bottom: 24px;

                span {
                    margin-right: 24px;

                    &:first-child {
                        margin-left: 24px;
                    }
                }
            }

            .categories {
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                background-color: #F8694A;
                padding-right: 24px;
                padding-left: 24px;
            }
        }
    }
</style>