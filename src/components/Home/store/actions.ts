import {ActionTree} from 'vuex';
import {IGalleryState} from '@/components/Home/store/index';
import {GET_LATEST_GOODS, GET_POPULAR_GOODS} from '@/components/Home/store/action-types';
import ShopService from '@/common/services/ShopService';
import {
    UPDATE_LATEST_GOODS, UPDATE_LATEST_GOODS_MAIN_IMAGE, UPDATE_POPULAR_GOODS,
    UPDATE_POPULAR_GOODS_MAIN_IMAGE
} from '@/components/Home/store/mutation-types';
import {IGoodsResponse} from '@/common/interfaces/IGood';

export const actions: ActionTree<IGalleryState, {}> = {
    [GET_POPULAR_GOODS]({commit}) {
        return ShopService.getPopularGoods()
            .then((res: IGoodsResponse) => {
                commit(UPDATE_POPULAR_GOODS, res.goods);
                commit(UPDATE_POPULAR_GOODS_MAIN_IMAGE, res.mainImage);
            });
    },
    [GET_LATEST_GOODS]({commit}) {
        return ShopService.getLatestGoods()
            .then((res: IGoodsResponse) => {
                commit(UPDATE_LATEST_GOODS, res.goods);
                commit(UPDATE_LATEST_GOODS_MAIN_IMAGE, res.mainImage);
            });
    }
};