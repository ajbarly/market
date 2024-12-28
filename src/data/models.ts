import type { Models } from "appwrite";
import { getName, getProductImageUrl, getStoreImageUrl } from "./services";

export interface Product {
    id: string,
    storeId: string,
    storeName: string,
    storeLogo: string,
    name: string;
    state: string;
    negotiable: boolean;
    deliverable: boolean;
    orderable: boolean;
    details: string,
    price: number | null;
    discount: number;
    views: number;
    images: string[];

}

export function setProduct(result: Models.Document): Product {
    return {
        id: result.$id,
        storeId: result.store.$id,
        storeName: getName(result.store.store_name),
        storeLogo: getStoreImageUrl(result.store.store_avatar),
        name: result.product_name,
        state: result.product_state,
        negotiable: result.product_negotiable,
        deliverable: result.product_deliverable ?? false,
        // orderable: result.orderable ?? false,
        orderable: true,
        details: result.product_details,
        price: result.product_price ?? null,
        discount: result.product_dicount_price ?? null,
        views: result.views ?? 0,
        images: result.product_imgs.map((img: any) => getProductImageUrl(img)),
    };
}
