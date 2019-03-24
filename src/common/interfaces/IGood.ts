
export interface IGood {
    id: string;
    title: string;
    price: number;
    imgUrl: string;
}

export interface IGoodsResponse {
    goods: IGood[];
    mainImage: string;
}