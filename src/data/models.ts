import type { Models } from "node-appwrite";
import { getName, getProductImageUrl, getStoreImageUrl } from "./services";

// export interface Product {
//     id: string,
//     storeId: string,
//     storeName: string,
//     storeLogo: string,
//     name: string;
//     state: string;
//     stock: string | null;
//     refund: boolean | null;
//     negotiable: boolean;
//     deliverable: boolean | null;
//     orderable: boolean;
//     warranty: Warranty | null;
//     details: string,
//     price: number | null;
//     discount: number;
//     views: number;
//     satisfied: number;
//     unsatisfied: number;
//     hasVideo: boolean;
//     images: string[];
//     thumbnail: string;

// }

export interface Product {
    id: string,
    name: string;
    details: string,
    hasVideo: boolean;
    images: string[];
    thumbnail: string;

}

// interface Warranty {
//     type: boolean;
//     duration: number;
//     unit: boolean;
// }

export function setProduct(result: Models.Row): Product {
    const hasVideo: boolean = result.has_video ?? false;
    return {
        id: result.$id,
        // storeId: result.store.$id,
        // storeName: getName(result.store.store_name),
        // storeLogo: getStoreImageUrl(result.store.store_avatar),
        name: result.name,
        details: result.details,
        hasVideo: hasVideo,
        images: result.images.map((img: any) => getProductImageUrl(img)),
        thumbnail: hasVideo ? getProductImageUrl(result.video_thumbnail) : '',
    };
}

    //     refund: result.refund ?? null,
    //     negotiable: result.product_negotiable,
    //     deliverable: result.product_deliverable ?? false,
    //     orderable: result.orderable ?? false,
    //     warranty: result.warranty ?? null,
    //     details: result.product_details,
    //     price: result.product_price ?? null,
    //     discount: result.product_dicount_price ?? null,
    //     views: result.views ?? 0,
    //     satisfied: result.satisfied ?? 0,
    //     unsatisfied: result.unsatisfied ?? 0,
    //     images: result.product_imgs.map((img: any) => getProductImageUrl(img)),
    //     hasVideo: result.has_video ?? false,
    //     thumbnail: getProductImageUrl(result.thumbnail),
    // };
}
