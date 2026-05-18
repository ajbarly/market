import { Client, TablesDB, Storage, AppwriteException, type Models, ID } from 'node-appwrite';

export const client = new Client();
const tablesDB = new TablesDB(client);
export const appwriteException = AppwriteException;
const storage = new Storage(client);
const CDN = 'https://cdn.ajbarly.app/v1';
const PROJECT = '660c9d460016dae7d075';
const storeBucket = '6363caee8ce6acba81f4';
const rentalBucket = '63531da079f5b7edef16'; // Replace with actual rental bucket ID if different
const databaseId: string = '63415eb80bd55301d02d';
const storeCollectionId: string = '63415ed621624e6143f4';
const productCollectionId: string = '636275b09a7821f7f491';
const rentalPostTableId: string = '636e31f73e0b31321782';      // /market/rental/p/[id]
const rentalServiceTableId: string = '65d10bbc3a58a59669f5'; // /market/rental/s/[id]
// ─────────────────────────────────────────────────────────────────────────────

client
    .setEndpoint(CDN).setProject(PROJECT);

export async function getRow(isStore: boolean, id: string): Promise<Models.Row> {
    return await tablesDB.getRow(databaseId, isStore ? storeCollectionId : productCollectionId, id);
}

// ─── Rental ──────────────────────────────────────────────────────────────────

/**
 * Fetch a for-rent post by ID.
 * Route: /market/rental/p/[id]
 */
export async function getRentalPost(id: string): Promise<Models.Row> {
    return await tablesDB.getRow(databaseId, rentalPostTableId, id);
}

/**
 * Fetch a rental service by ID.
 * Route: /market/rental/s/[id]
 */
export async function getRentalService(id: string): Promise<Models.Row> {
    return await tablesDB.getRow(databaseId, rentalServiceTableId, id);
}

// ─── Image helpers ────────────────────────────────────────────────────────────

export function getStoreImageUrl(id: string): string {
    return `${CDN}/storage/buckets/${storeBucket}/files/${id}/view?project=${PROJECT}`;
}



export function getRentalImageUrl(id: string): string {
    return `${CDN}/storage/buckets/${rentalBucket}/files/${id}/view?project=${PROJECT}`;
}