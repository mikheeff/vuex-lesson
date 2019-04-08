import {Module} from 'vuex';
import {mutations} from './mutations';
import {actions} from './actions';
import {getters} from './getters';
import {IGood} from '@/common/interfaces/IGood';

export interface IGalleryState {
    popularGoods: IGood[];
    popularGoodsMainImage: string;
    latestGoods: IGood[];
    latestGoodsMainImage: string;
}

const galleryState: Module<IGalleryState, {}> = {
    state: {
        popularGoods: [],
        popularGoodsMainImage: '',
        latestGoods: [],
        latestGoodsMainImage: ''
    },
    getters,
    actions,
    mutations
};

export default galleryState;