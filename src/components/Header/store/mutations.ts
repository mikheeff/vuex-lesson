import {MutationTree} from 'vuex';
import {ICartState} from '@/components/Header/store/index';
import {
    ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_LIKED, REMOVE_PRODUCT_FROM_CART,
    REMOVE_PRODUCT_FROM_LIKED
} from '@/components/Header/store/mutation-types';

export const mutations: MutationTree<ICartState> = {
    [ADD_PRODUCT_TO_LIKED](state, good) {
        state.likedGoods = [...state.likedGoods, good];
    },
    [REMOVE_PRODUCT_FROM_LIKED](state, good) {
        state.likedGoods = state.likedGoods.filter(g => g !== good);
    },
    [ADD_PRODUCT_TO_CART](state, good) {
        state.selectedGoods = [...state.selectedGoods, good];
    },
    [REMOVE_PRODUCT_FROM_CART](state, good) {
        state.selectedGoods = state.selectedGoods.filter(g => g !== good);
    }
};