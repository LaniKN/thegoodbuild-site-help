
export const redirects = {
    home: '/',
    howItWorks: '/how-it-works',
    about: '/about',
    faq: '/faq',
    policy: '/policy',

    productPage: {
        base: '/product',
        product: (productId: string) => `/product/${productId}`,
    }
}