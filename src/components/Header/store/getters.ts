import {GetterTree} from 'vuex';
import {ICartState} from '@/components/Header/store/index';
import {IGood} from '@/common/interfaces/IGood';
import {
    CART_ITEMS, CART_ITEMS_TOTAL_PRICE, IS_PRODUCT_IN_THE_CART,
    IS_PRODUCT_LIKED, LIKED_GOODS_COUNT
} from '@/components/Header/store/getter-types';

export const getters: GetterTree<ICartState, {}> = {
    [IS_PRODUCT_IN_THE_CART]: state => (good: IGood) => {
        return state.selectedGoods.indexOf(good) > -1;
    },
    [IS_PRODUCT_LIKED]: state => (good: IGood) => {
        return state.likedGoods.indexOf(good) > -1;
    },
    [CART_ITEMS_TOTAL_PRICE]: state => state.selectedGoods
        .reduce((acc: number, curGood: IGood) => acc + curGood.price, 0),
    [CART_ITEMS]: state => state.selectedGoods,
    [LIKED_GOODS_COUNT]: state => state.likedGoods.length
};