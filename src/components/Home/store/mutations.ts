import {MutationTree} from 'vuex';
import {IGalleryState} from '@/components/Home/store/index';
import {
    UPDATE_LATEST_GOODS, UPDATE_LATEST_GOODS_MAIN_IMAGE,
    UPDATE_POPULAR_GOODS, UPDATE_POPULAR_GOODS_MAIN_IMAGE
} from '@/components/Home/store/mutation-types';

export const mutations: MutationTree<IGalleryState> = {
    [UPDATE_LATEST_GOODS](state, payload) {
        state.latestGoods = payload;
    },
    [UPDATE_POPULAR_GOODS](state, payload) {
        state.popularGoods = payload;
    },
    [UPDATE_LATEST_GOODS_MAIN_IMAGE](state, payload) {
        state.latestGoodsMainImage = payload
    },
    [UPDATE_POPULAR_GOODS_MAIN_IMAGE](state, payload) {
        state.popularGoodsMainImage = payload;
    },
};