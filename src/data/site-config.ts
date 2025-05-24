export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'whatsapp' | 'facebook';
};

export type Hero = {
    backgroundImage?: Image;
};

export type Market = {
    title?: string;
    text?: string;
    coverUrl: string;
    formUrl: string;
};

export type Store = {
    title?: string;
    text?: string;
    cover?: Image;
    avatar: string;
};

export type Product = {
    title?: string;
    text?: string;
    preview?: Image;
};

export type Error = {
    title?: string;
    text?: string;
    notFoundCode?: string;
    internalCode?: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    market?: Market;
    store?: Store;
    product?: Product;
    error?: Error;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.png',
        alt: 'Ajbarly web logo'
    },
    title: 'أجبرلي ويب',
    description: 'اكتشف عالمًا جديدًا من الفرص التجارية مع تطبيق \"أجبرلي\"، حيث يتقاطع الابتكار مع احتياجاتك. هنا، تتاح لك مساحة غير محدودة للتواصل مع جمهورك المستهدف...',
    image: {
        src: '/market_preview.jpg',
        alt: 'Ajbarly web preview'
    },
    secondaryNavLinks: [
        {
            text: 'حول أجبرلي',
            href: 'https://ajbarly.com/about'
        },
        {
            text: 'سياسة الخصوصية',
            href: 'https://ajbarly.com/privacy'
        },
        {
            text: 'مركز المساعدة',
            href: 'https://ajbarly.com/faq'
        },

    ],
    socialLinks: [
        {
            text: 'Get support',
            href: 'https://wa.me/message/W3VO62RVUNQIB1',
            icon: 'whatsapp'
        },
        {
            text: 'Follow us on Facebook',
            href: 'https://www.facebook.com/Ajbarly',
            icon: 'facebook'
        }
    ],
    hero: {
        backgroundImage: {
            src: '/hero.svg'
        }
    },
    market: {
        title: 'السوق',
        text: "اكتشف عالمًا جديدًا من الفرص التجارية مع تطبيق \"أجبرلي\"، حيث يتقاطع الابتكار مع احتياجاتك. هنا، تتاح لك مساحة غير محدودة للتواصل مع جمهورك المستهدف، وتوسيع نطاق أعمالك بطريقة لم تعهدها من قبل. هل أنت مستعد لمعرفة المزيد عن هذا السوق المتطور وكيف يمكن أن يكون جزءًا من نجاحك؟",
        coverUrl: "/anouncement.jpg",
        formUrl: 'https://ajbarly.com/market'
    },

    store: {
        title: 'المتجر غير متاح',
        text: 'عذرًا، يبدو أن المتجر الذي تحاول الوصول إليه غير موجود أو تم حذفه. يرجى العودة إلى التطبيق والبحث عن ما تريده هناك.',
        cover: {
            src: "/broken_store.jpg",
            alt: 'Store cover not available'
        },
        avatar: "/broken_avatar.png",
    },

    product: {
        title: 'المنتج غير متاح',
        text: "عذرًا، يبدو أن المنتج الذي تبحث عنه غير متوفر حاليًا أو تم حذفه من المتجر. يرجى التحقق لاحقًا أو التواصل معنا إذا كنت ترى أنه يوجد خطأ ما.",
        preview: {
            src: "/broken_product.jpg",
            alt: 'Porduct preview not available'
        },
    },

    error: {
        title: "خطأ غير متوقع",
        text: "يُرجى المحاولة مرة أخرى لاحقًا",

    }
};

export default siteConfig;
