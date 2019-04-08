<template>
    <div class="gallery-item">
        <div
                class="banner-image is-good-item"
                :style="{backgroundImage: `url(${good.imgUrl})`}">
        </div>
        <div class="gallery-item-body">
            <span class="gallery-item-price">${{ good.price }}</span>
            <span class="gallery-item-name">{{ good.title }}</span>
            <div class="gallery-item-button-panel">
                <button
                        :class="{'is-active': isLiked(good)}"
                        @click="manageLike(good)"
                        class="button is-icon is-like"/>
                <button
                        @click="manageCart(good)"
                        class="button is-icon is-cart">
                    {{ isInCart(good) ? 'In Cart' : 'Add to Cart' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {IGood} from '../../../common/interfaces/IGood';
    import {mapGetters, mapMutations} from 'vuex';
    import {
        ADD_PRODUCT_TO_CART,
        ADD_PRODUCT_TO_LIKED, REMOVE_PRODUCT_FROM_CART,
        REMOVE_PRODUCT_FROM_LIKED
    } from '../../Header/store/mutation-types';
    import {IS_PRODUCT_IN_THE_CART, IS_PRODUCT_LIKED} from '../../Header/store/getter-types';

    export default Vue.extend({
        props: {
            good: Object as () => IGood
        },
        computed: {
            ...mapGetters({
                isLiked: IS_PRODUCT_LIKED,
                isInCart: IS_PRODUCT_IN_THE_CART
            })
        },
        methods: {
            ...mapMutations({
                addProductToLiked: ADD_PRODUCT_TO_LIKED,
                removeProductFromLiked: REMOVE_PRODUCT_FROM_LIKED,
                removeFromCart: REMOVE_PRODUCT_FROM_CART,
                addToCart: ADD_PRODUCT_TO_CART
            }),
            manageLike(good: IGood) {
                if (this.isLiked(good)) {
                    this.removeProductFromLiked(good);
                } else {
                    this.addProductToLiked(good);
                }
            },
            manageCart(good: IGood) {
                if (this.isInCart(good)) {
                    this.removeFromCart(good);
                } else {
                    this.addToCart(good);
                }
            }
        }
    });

</script>

<style lang="scss" scoped>
    .gallery-item {
        display: flex;
        flex-direction: column;
        transition: 0.3s all;
        &:hover {
            box-shadow: 0px 6px 10px -6px rgba(0, 0, 0, 0.175);
            transform: translateY(-4px);

            .gallery-item-button-panel {
                transition: 0.5s;
                opacity: 1;
            }
        }

        &-body {
            display: flex;
            padding: 12px;
            flex-direction: column;
        }

        &-price {
            font-size: 24px;
            font-weight: 700;
        }

        &-name {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 24px;
        }

        &-button-panel {
            opacity: 0;
        }
    }

    .banner-image {
        &.is-good-item {
            padding-top: percentage(4/3);
        }
    }
</style>