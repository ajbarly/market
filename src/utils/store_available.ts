export function isOpen(open: string, close: string): string {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const [openHours, openMinutes] = open.split(':').map(Number);
    const openTime = openHours * 60 + openMinutes;

    const [closeHours, closeMinutes] = close.split(':').map(Number);
    const closeTime = closeHours * 60 + closeMinutes;

    if (openTime < closeTime) {
        return currentTime >= openTime && currentTime <= closeTime ? "مفتوح" : "مغلق";
    } else {
        return currentTime >= openTime || currentTime <= closeTime ? "مفتوح" : "مغلق";
    }
}