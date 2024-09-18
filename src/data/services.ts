import { Client, Databases, Storage, AppwriteException, type Models } from 'appwrite';

export const client = new Client();
export const database = new Databases(client);
export const appwriteException = AppwriteException;
const storage = new Storage(client);
const CDN = "https://cdn.ajbarly.app/v1";
const PROJECT = "660c9d460016dae7d075";
const storeBucket = "63624f6c1410a29c4a1e";
const productBucket = "6363caee8ce6acba81f4";
const databaseId: string = '63415eb80bd55301d02d';
const storeCollectionId: string = '63415ed621624e6143f4';
const productCollectionId: string = '636275b09a7821f7f491';

client
    .setEndpoint(CDN)
    .setProject(PROJECT);

export async function getDocument(isStore: boolean, id: string): Promise<Models.Document> {
    return await database.getDocument(databaseId, isStore ? storeCollectionId : productCollectionId, id);
}

const result = storage.getFilePreview(
    'photos',           // bucket ID
    'sunset.png',       // file ID
    240,               // width, will be resized using this value.
    0,                  // height, ignored when 0
);

// console.log(result.href);


export function getStoreImageUrl(id: string): string {
    return `${CDN}/storage/buckets/${storeBucket}/files/${id}/view?project=${PROJECT}`;
}

export function getProductImageUrl(id: string): string {
    return `${CDN}/storage/buckets/${productBucket}/files/${id}/view?project=${PROJECT}`;
}

export function getName(name: string): string {
    const parts = name.split('*');
    return parts[1];
}