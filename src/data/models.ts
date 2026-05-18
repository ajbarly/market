import type { Models } from "node-appwrite";
import { getStoreImageUrl, getRentalImageUrl, getStoreImageUrl } from "./services";

export interface Store {
    id: string,
    name: string;
    details: string,
    cover: string;

}

export interface Product {
    id: string,
    name: string;
    details: string,
    hasVideo: boolean;
    image: string;

}

export interface RentalService {
    id: string,
    name: string;
    details: string,
    cover: string;

}

export interface ForRent {
    id: string,
    name: string;
    details: string,
    hasVideo: boolean;
    image: string;

}

export function setProduct(result: Models.Row): Product {
    const hasVideo: boolean = result.has_video ?? false;
    const image: string = hasVideo ? getStoreImageUrl(result.video_thumbnail) : (getStoreImageUrl(result.images[0]) ?? '');
    return {
        id: result.$id,
        name: result.name,
        details: result.details,
        hasVideo: hasVideo,
        image: image,
    };
}

export function setForRent(result: Models.Row): ForRent {
    const hasVideo: boolean = result.has_video ?? false;
    const image: string = hasVideo ? getRentalImageUrl(result.video_thumbnail) : (getRentalImageUrl(result.images[0]) ?? '');
    return {
        id: result.$id,
        name: result.name,
        details: result.details,
        hasVideo: hasVideo,
        image: image,
    };
}

export function setStore(result: Models.Row): Store {
    const name: string = result.name_ar + ' - ' + result.name_en;
    return {
        id: result.$id,
        name: name,
        details: result.details,
        cover: getStoreImageUrl(result.cover_id),
    };
}

export function setRentalService(result: Models.Row): RentalService {
    const name: string = result.name_ar + ' - ' + result.name_en;

    return {
        id: result.$id,
        name: ßname,
        details: result.details,
        cover: getRentalImageUrl(result.cover_id),
    };
}