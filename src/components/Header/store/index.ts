import {Module} from 'vuex';
import {mutations} from './mutations';
import {actions} from './actions';
import {getters} from './getters';
import {IGood} from '@/common/interfaces/IGood';

export interface ICartState {
    selectedGoods: IGood[];
    likedGoods: IGood[];
}

const cartState: Module<ICartState, {}> = {
    state: {
        selectedGoods: [],
        likedGoods: []
    },
    getters,
    actions,
    mutations
};

export default cartState;