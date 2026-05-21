/**
 * Builds Android Intent URL.
 * If app is installed → opens it.
 * If not → falls back to Play Store WITH a referrer for deferred deep linking.
 */
export function buildAndroidIntentUrl(deepLinkPath: string): string {
    const referrer = encodeURIComponent(`deep_link=${encodeURIComponent(deepLinkPath)}`);
    const playStoreUrl = `https://play.google.com/store/apps/details?id=app.ajbarly&referrer=${referrer}`;
    const encodedFallback = encodeURIComponent(playStoreUrl);

    // scheme=https means Android treats this as an https:// App Link internally
    return `intent://ajbarly.app${deepLinkPath}#Intent;scheme=https;package=app.ajbarly;S.browser_fallback_url=${encodedFallback};end`;
}

export function buildPlayStoreUrl(deepLinkPath?: string): string {
    const base = 'https://play.google.com/store/apps/details?id=app.ajbarly';
    if (!deepLinkPath) return base;
    const referrer = encodeURIComponent(`deep_link=${encodeURIComponent(deepLinkPath)}`);
    return `${base}&referrer=${referrer}`;
}

export function buildAppStoreUrl(): string {
    return 'https://apps.apple.com/app/ajbarly/id123456789'; // Replace with real ID
}