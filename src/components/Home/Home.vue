<template>
    <div class="home">
        <div class="home-section">
            <div class="container">
                <GallerySection
                        v-if="popularGoods && popularGoods.length"
                        :title="'DEALS OF THE DAY'"
                        :goods="popularGoods"
                        :main-image="popGoodsImage"/>
            </div>
        </div>>
        <div class="home-section">
            <div class="container">
                <GallerySection
                        v-if="latestGoods && latestGoods.length"
                        :title="'LATEST PRODUCTS'"
                        :goods="latestGoods"
                        :main-image="lateGoodsImage"/>
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
    import GallerySection from '../GallerySection/GallerySection.vue'
    import {mapGetters} from 'vuex';
    import {GET_LATEST_GOODS, GET_POPULAR_GOODS} from './store/action-types';
    import {
        GALLERY_LATEST_GOODS,
        GALLERY_LATEST_GOODS_MAIN_IMAGE,
        GALLERY_POPULAR_GOODS,
        GALLERY_POPULAR_GOODS_MAIN_IMAGE
    } from './store/getter-types';

    export default Vue.extend({
        components: {GallerySection},
        computed: {
            ...mapGetters({
                popularGoods: GALLERY_POPULAR_GOODS,
                popGoodsImage: GALLERY_POPULAR_GOODS_MAIN_IMAGE,
                latestGoods: GALLERY_LATEST_GOODS,
                lateGoodsImage: GALLERY_LATEST_GOODS_MAIN_IMAGE

            })
        },
        created() {
            this.$store.dispatch(GET_POPULAR_GOODS);
            this.$store.dispatch(GET_LATEST_GOODS);
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