export function getCategoryName(categoryKey: string): string {
    const categoryMap: { [key: string]: string } = {
        "DEV": "أجهزة",
        "VEH": "مركبات",
        "CLO": "ملابس",
        "COS": "مستحضرات تجميل",
        "SCH": "أدوات مدرسية",
        "HOW": "أدوات منزلية",
        "FUR": "أثاث",
        "RES": "عقارات",
        "BUSU": "مستلزمات البناء",
        "OTH": "أخرى",
    };

    return categoryMap[categoryKey] || "غير معروف";
}


// "DEV": "Devices",
// "VEH": "Vehicles",
// "CLO": "Clothes",
// "COS": "Cosmetics",
// "SCH": "Schools",
// "HOW": "Houseware",
// "FUR": "Furniture",
// "RES": "Real Estate",
// "BUSU": "Building Supplies",
// "OTH": "Other",
// "0RES1": "Real Estate Subcategory",
// "0RES2": "Houses"