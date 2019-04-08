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
            <span class="header-action-item-subtitle">${{ price }}</span>
        </div>
        <div
            v-if="isOpen"
            class="cart-preview">
            <div
                    v-if="goods.length"
                    class="cart-preview-list">
                <CartItem
                        @removeFromCart="removeFromCart(good)"
                        v-for="good in goods"
                        :key="good.id"
                        :good="good"/>
            </div>
            <div
                    class="no-items"
                    v-else>
                <span class="no-items-text">No Items</span>
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
    import CartItem from './CartItem/CartItem.vue'
    import {mapGetters, mapMutations} from 'vuex';
    import {CART_ITEMS, CART_ITEMS_TOTAL_PRICE} from '../store/getter-types';
    import {REMOVE_PRODUCT_FROM_CART} from '../store/mutation-types';

    export default Vue.extend({
        directives: {OuterClick},
        components: {CartItem},
        data() {
            return {
                isOpen: false,
            };
        },
        computed: {
            ...mapGetters({
                price: CART_ITEMS_TOTAL_PRICE,
                goods: CART_ITEMS
            })
        },
        methods: {
            ...mapMutations({
               removeFromCart: REMOVE_PRODUCT_FROM_CART
            }),
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

    .no-items {
        display: flex;
        padding-top: 36px;
        padding-bottom: 36px;
        align-items: center;
        justify-content: center;

        &-text {
            font-size: 24px;
            font-weight: 500;
            text-transform: uppercase;
            border-top: 1px solid #DADADA;
            border-bottom: 1px solid #DADADA;
        }
    }

</style>