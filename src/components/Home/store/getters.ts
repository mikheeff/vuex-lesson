import {GetterTree} from 'vuex';
import {IGalleryState} from '@/components/Home/store/index';
import {
    GALLERY_LATEST_GOODS, GALLERY_LATEST_GOODS_MAIN_IMAGE, GALLERY_POPULAR_GOODS,
    GALLERY_POPULAR_GOODS_MAIN_IMAGE
} from '@/components/Home/store/getter-types';

export const getters: GetterTree<IGalleryState, {}> = {
    [GALLERY_POPULAR_GOODS]: state => state.popularGoods,
    [GALLERY_POPULAR_GOODS_MAIN_IMAGE]: state => state.popularGoodsMainImage,
    [GALLERY_LATEST_GOODS]: state => state.latestGoods,
    [GALLERY_LATEST_GOODS_MAIN_IMAGE]: state => state.latestGoodsMainImage
};