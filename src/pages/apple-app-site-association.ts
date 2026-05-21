import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            applinks: {
                apps: [],
                details: [
                    {
                        appID: 'YOURTEAMID.app.ajbarly', // Apple Team ID + Bundle ID
                        paths: ['/market/product/*', '/market/store/*', '/rental/p/*', '/rental/s/*']
                    }
                ]
            }
        }),
        { headers: { 'Content-Type': 'application/json' } }
    );
};