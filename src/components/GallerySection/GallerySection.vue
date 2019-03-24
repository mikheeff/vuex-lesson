<template>
    <div class="gallery-section">
        <div class="gallery-section-header">
            <h1>
                {{ title }}
            </h1>
        </div>
            <div class="columns">
                <div class="column is-3">
                    <div
                        class="banner-image is-section-logo"
                        :style="{backgroundImage: `url(${mainImage})`}">
                        <div class="banner-caption">
                            <h2>NEW COLLECTION</h2>
                            <button class="button">BUY NOW</button>
                        </div>
                    </div>
                </div>

                <div
                        v-for="good in goods"
                        class="column is-3">
                    <GalleryItem
                            :good="good"/>
                </div>
            </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {IGood} from '../../common/interfaces/IGood';
    import GalleryItem from './GelleryItem/GalleryItem.vue';

    export default Vue.extend({
        components: {
          GalleryItem
        },
        props: {
            title: {
                type: String
            },
            mainImage: {
                type: String
            },
            goods: {} as (() => IGood[])
        }
    });

</script>

<style lang="scss" scoped>
    .gallery-section {

        &-header {
            padding-top: 16px;
            border-bottom: 1px solid #DADADA;
            margin-bottom: 24px;
        }

        .banner-image {
            &.is-section-logo {
                padding-top: percentage(4/3);
            }
        }

        .banner-caption {
            text-align: left;
            top: 75%;
            font-size: 24px;
        }
    }
</style>