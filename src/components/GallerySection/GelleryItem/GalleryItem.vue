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
                <button class="button is-icon is-like"/>
                <button class="button is-icon is-cart">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {IGood} from '../../../common/interfaces/IGood';

    export default Vue.extend({
        props: {
            good: Object as () => IGood,
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