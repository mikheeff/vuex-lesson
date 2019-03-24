import {IGood, IGoodsResponse} from '@/common/interfaces/IGood';

export const POPULAR_GOODS: IGood[] = [
    {
        id: '1',
        title: 'White sandals on a block heel with a square toe RAID Wink',
        imgUrl: 'https://images.asos-media.com/products/belye-bosonozhki-na-blochnom-kabluke-s-kvadratnym-noskom-raid-wink/11767600-1-whitepu?$n_320w$&wid=317&fit=constrain',
        price: 100,
    },
    {
        id: '2',
        title: 'White leather adidas sneakers Originals lacombe',
        imgUrl: 'https://images.asos-media.com/products/belye-kozhanye-krossovki-adidas-originals-lacombe/11000841-1-white?$n_320w$&wid=317&fit=constrain',
        price: 150,
    },
    {
        id: '3',
        title: 'Narrowed cropped trousers',
        imgUrl: 'https://images.asos-media.com/products/suzhennye-knizu-ukorochennye-bryuki-asos-design/11108610-1-orange?$n_320w$&wid=317&fit=constrain',
        price: 250,
    }
];

const LATEST_GOODS: IGood[] = [
    {
        id: '6',
        title: 'Boots with 7 pairs of eyelets Dr Martens Combs',
        imgUrl: 'https://images.asos-media.com/products/botinki-s-7-parami-lyuversov-dr-martens-combs/11209787-1-beige?$n_320w$&wid=317&fit=constrain',
        price: 300,
    },
    {
        id: '14',
        title: 'Brown Zign Lace Up Boots',
        imgUrl: 'https://images.asos-media.com/products/korichnevye-botinki-na-shnurovke-zign/11685718-1-brown?$n_320w$&wid=317&fit=constrain',
        price: 199,
    },
    {
        id: '9',
        title: 'Pink cotton sweater',
        imgUrl: 'https://images.asos-media.com/products/rozovyj-hlopkovyj-dzhemper-asos-design/11468776-1-pink?$n_320w$&wid=317&fit=constrain',
        price: 159,
    }
];

const POPULAR_GOODS_RESPONSE: IGoodsResponse = {
    goods: POPULAR_GOODS,
    mainImage: 'https://content.asos-media.com/-/media/homepages/mw/2019/03/18/au-coords-1.jpg'
};

const LATEST_GOODS_RESPONSE: IGoodsResponse = {
    goods: LATEST_GOODS,
    mainImage: 'https://content.asos-media.com/-/media/homepages/ww/2019/03/18/broderie2.jpg'
};

export default class ShopService {

    static getPopularGoods(): Promise<IGoodsResponse> {
        return Promise.resolve(POPULAR_GOODS_RESPONSE);
    }

    static getLatestGoods(): Promise<IGoodsResponse> {
        return Promise.resolve(LATEST_GOODS_RESPONSE);
    }

}