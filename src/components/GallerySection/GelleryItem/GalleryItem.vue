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
                        :class="{'is-active': isLiked}"
                        @click="emitLikeProduct"
                        class="button is-icon is-like"/>
                <button
                        @click="manageCart"
                        class="button is-icon is-cart">
                    {{ isSelected ? 'In Cart' : 'Add to Cart' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {IGood} from '../../../common/interfaces/IGood';
    import {EVENT_BUS} from '../../../common/services/ShopService';

    export default Vue.extend({
        data() {
            return {
                isLiked: false
            };
        },
        props: {
            good: Object as () => IGood
        },
        computed: {
            isSelected(): boolean {
                return this.$parent.$parent.$parent.$data.goods.indexOf(this.good) > -1;
            }
        },
        methods: {
            manageCart() {
                if (this.isSelected) {
                    this.$emit('removeFromCart', this.good.id);
                } else {
                    this.$emit('addToCart', this.good);
                }
            },
            emitLikeProduct() {
                EVENT_BUS.$emit('like', this.good);
                this.isLiked = !this.isLiked;
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