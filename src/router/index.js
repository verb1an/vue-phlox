import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/AppHomePage'
import CatalogPage from '@/pages/AppCatalogPage'
import ProductPage from '@/pages/AppProductPage'
import AboutPage from '@/pages/AppAboutPage'
import BlogPage from '@/pages/AppBlogPage'
import ContactPage from '@/pages/AppContactPage'
import CartPage from '@/pages/AppCartPage'

// import AppErrorPage from '@/pages/AppErrorPage'

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'Home',
        meta: {
            title: "Home"
        }
    },
    {
        path: '/shop/',
        component: CatalogPage,
        name: 'Shop',
        meta: {
            title: "Shop"
        }
    },
    {
        path: '/shop/:category/',
        component: CatalogPage,
        name: 'Category',
        meta: {
            title: "Shop"
        }
    },
    {
        path: '/shop/product/:article',
        component: ProductPage,
        name: 'Product',
        meta: {
            title: "Product"
        }
    },
    {
        path: '/about-us/',
        component: AboutPage,
        name: 'About',
        meta: {
            title: "About Us"
        }
    },
    {
        path: '/blog/',
        component: BlogPage,
        name: 'Blog',
        meta: {
            title: "Blog"
        }
    },
    {
        path: '/contact-us/',
        component: ContactPage,
        name: 'Contact',
        meta: {
            title: "Contact Us"
        }
    },
    {
        path: '/cart/',
        component: CartPage,
        name: 'Cart',
        meta: {
            title: "Cart"
        }
    },
    // ! Need final
    // {
    //     path: '*',
    //     component: AppErrorPage,
    //     name: '404 page',
    //     meta: {
    //         title: "404"
    //     }
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const metaData = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    if (metaData) {
        document.title = metaData.meta.title + " - Phlox Digital Shop";
    }
    next();
})

export default router;
