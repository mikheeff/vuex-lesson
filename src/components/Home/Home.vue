<template>
    <div class="home">
        <div class="home-section">
            <div class="container">
                <GallerySection
                        @removeFromCart="emitRemoveFromCart"
                        @addToCart="emitAddToCart"
                        v-if="popularRes"
                        :title="'DEALS OF THE DAY'"
                        :goods="popularRes.goods"
                        :main-image="popularRes.mainImage"/>
            </div>
        </div>>
        <div class="home-section">
            <div class="container">
                <GallerySection
                        @removeFromCart="emitRemoveFromCart"
                        @addToCart="emitAddToCart"
                        v-if="latestRes"
                        :title="'LATEST PRODUCTS'"
                        :goods="latestRes.goods"
                        :main-image="latestRes.mainImage"/>
            </div>
        </div>
        <div class="first-section">
            <div class="container">
                <div class="banner">
                    <div class="columns">
                        <div class="column">
                            <div class="banner-content">
                                <div class="banner-image is-hot-deal">
                                    <div class="banner-caption">
                                        <h1 class="banner-header">HOT DEAL</h1>
                                        <span class="banner-subtitle">Up to 50% OFF</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <div class="banner-content is-new-collection">
                                <div class="banner-image is-shoes">
                                    <div class="banner-caption">
                                        <h2>NEW COLLECTION</h2>
                                    </div>
                                </div>
                                <div class="banner-image is-bag">
                                    <div class="banner-caption">
                                        <h2>NEW COLLECTION</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ShopService from '../../common/services/ShopService';
    import GallerySection from '../GallerySection/GallerySection.vue'
    import {IGood, IGoodsResponse} from '../../common/interfaces/IGood';

    interface IHomeData {
        popularRes: IGoodsResponse|null;
        latestRes: IGoodsResponse|null;
    }

    export default Vue.extend({
        components: {GallerySection},
        data(): IHomeData {
            return {
                popularRes: null,
                latestRes: null
            }
        },
        methods: {
            emitAddToCart(good: IGood) {
                this.$emit('addToCart', good);
            },
            emitRemoveFromCart(id: string) {
                this.$emit('removeFromCart', id);
            }
        },
        created() {
            ShopService.getPopularGoods()
                .then(res => this.popularRes = res);
            ShopService.getLatestGoods()
                .then(res => this.latestRes = res);
        }
    });

</script>

<style lang="scss" scoped>

    .fist-section {
        background-color: #F6F7F8;
    }

    .home {
        padding-top: 32px;
        padding-bottom: 64px;
    }

    .banner {
        padding-top: 32px;
        padding-bottom: 32px;

        &-content {
            position: relative;
            height: 100%;

            &.is-new-collection {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }

    .banner-image {

        &.is-hot-deal {
            background-image: url('../assets/banner03.jpg');
        }

        &.is-shoes {
            background-image: url('../assets/banner11.jpg');
        }

        &.is-bag {
            background-image: url('../assets/banner12.jpg');
        }
    }

</style>