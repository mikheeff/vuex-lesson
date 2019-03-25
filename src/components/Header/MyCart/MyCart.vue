<template>
    <div
        v-outer-click="close"
        @click.stop="toggle"
        class="header-action-item">
        <div class="icon-container">
            <img src="../../../assets/shopping-01-512.png" class="icon">
            <span
                v-if="goods && goods.length"
                class="action-item-counter">{{ goods.length }}</span>
        </div>
        <div class="header-action-item-info">
            <span class="header-action-item-title">My Cart</span>
            <span class="header-action-item-subtitle">${{ totalPrice }}</span>
        </div>
        <div
            v-if="isOpen"
            class="cart-preview">
            <div class="cart-preview-list">
                <CartItem
                        v-for="good in goods"
                        :key="good.id"
                        :good="good"/>
            </div>
            <div class="cart-controls">
                <button class="button">
                    View Cart
                </button>
                <button class="button">
                    Checkout
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {OuterClick} from '../../../common/derictives/outerClick';
    import {IGood} from '../../../common/interfaces/IGood';
    import CartItem from './CartItem/CartItem.vue'

    export default Vue.extend({
        directives: {OuterClick},
        components: {CartItem},
        data() {
            return {
                isOpen: false
            };
        },
        props: {
            goods: {} as (() => IGood[])
        },
        computed: {
            totalPrice(): number {
                const initValue = 0;
                return this.goods ? this.goods
                    .reduce((acc: number, curGood: IGood) => acc + curGood.price, initValue) : 0;
            }
        },
        methods: {
            toggle() {
                (this.isOpen ? this.close : this.open)();
            },
            close() {
                this.isOpen = false;
            },
            open() {
                this.isOpen = true;
            }
        }
    });

</script>

<style lang="scss" scoped>
    .header-action-item {
        position: relative;
    }

    .cart-preview {
        cursor: default;
        top: 117%;
        right: -9%;
        z-index: 5;
        position: absolute;
        min-width: 400px;
        border-top: 2px solid #F8694A;
        background-color: white;
        padding-right: 12px;
        padding-left: 12px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.175);

        .cart-preview-list {
            padding-top: 12px;
            padding-bottom: 12px;
        }
    }

    .cart-controls {
        display: flex;
        justify-content: center;
        padding-bottom: 12px;
    }

</style>