<template>
    <div class="cart-item">
        <div
                :style="{backgroundImage: `url(${good.imgUrl})`}"
                class="cart-item-image"/>
        <div class="cart-item-info">
            <div class="cart-item-info-text">
                <span class="cart-item-price">
                    ${{ good.price }}
                </span>
                    <span class="cart-item-sub">
                    {{ good.title }}
                </span>
            </div>
            <div @click.stop="emitRemoveItemFromCart" class="trash-icon"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {IGood} from '../../../../common/interfaces/IGood';

    export default Vue.extend({
        props: {
            good: Object as () => IGood,
        },
        methods: {
            emitRemoveItemFromCart() {
                this.$emit('removeFromCart', this.good.id);
            }
        }
    });

</script>

<style lang="scss" scoped>

    .cart-item {
        display: flex;
        padding-top: 8px;
        padding-bottom: 8px;
        border-top: 1px solid #DADADA;

        &:last-child {
            border-bottom: 1px solid #DADADA;
        }

        &:hover {
            transition: .3s;
            box-shadow: 0px 6px 10px -6px rgba(0, 0, 0, 0.175);
            transform: translateY(-4px);
        }

        &-image {
            height: 100px;
            width: 100px;
            flex-shrink: 0;
            background: no-repeat center center;
            background-size: cover;
        }

        &-info {
            padding-right: 8px;
            padding-left: 8px;
            display: flex;
            justify-content: space-between;
            width: 100%;

            .cart-item-info-text {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                .cart-item-price {
                    font-size: 24px;
                    font-weight: 500;
                }
            }

            .trash-icon {
                align-self: center;
                cursor: pointer;
                background-size: contain !important;
                flex-shrink: 0;
                height: 24px;
                width: 24px;
                background: url('../../../../assets/trash.svg') no-repeat center center;
            }
        }

    }
</style>