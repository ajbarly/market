import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { createOrder } from '../data/services';

export const server = {
    accept: 'form',
    order: defineAction({
        // accept: 'form',
        input: z.object({
            product: z.string(),
            storeId: z.string(),
            name: z.string(),
            phone: z.number(),
            isWhatsApp: z.boolean(),
            address: z.string(),
            quantity: z.number(),
        }),
        handler: async (input) => {
            await createOrder(input);
        }
    })
}