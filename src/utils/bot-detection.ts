// src/utils/bot-detection.ts

const BOT_PATTERNS = [
    'facebookexternalhit',
    'facebot',
    'twitterbot',
    'whatsapp',
    'telegrambot',
    'linkedinbot',
    'slackbot',
    'googlebot',
    'bingbot',
    'discordbot',
    'applebot',
    'imessagebot',
    'vkshare',
    'skypeuripreview',
    'nuzzel',
    'snapchat',
    'viber',
    'pinterestbot',
    'yandexbot',
    'duckduckbot',
    'ia_archiver',
    'curl',
    'python-requests',
    'go-http-client',
    'axios',
    'node-fetch',
    'preview',      // generic preview bots
    'crawler',
    'spider',
    'scraper'
];

/**
 * Returns true if the User-Agent belongs to a link-preview bot/crawler.
 * Real users (browsers) return false → redirect them to the app store.
 */
export function isBot(userAgent: string): boolean {
    const ua = userAgent.toLowerCase();
    return BOT_PATTERNS.some((pattern) => ua.includes(pattern));
}

/**
 * Returns the appropriate app store URL based on the User-Agent.
 * iOS  → App Store
 * Other → Google Play Store
 */
export function getAppStoreUrl(userAgent: string): string {
    const ua = userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    if (isIOS) {
        // Replace 'idXXXXXXXXX' with your actual App Store numeric ID
        return 'https://apps.apple.com/app/ajbarly/idXXXXXXXXX';
    }
    return 'https://play.google.com/store/apps/details?id=app.ajbarly';
}
