import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/AppHomePage'
import CatalogPage from '@/pages/AppCatalogPage'
import AboutPage from '@/pages/AppAboutPage'
import BlogPage from '@/pages/AppBlogPage'
import ContactPage from '@/pages/AppContactPage'
import CartPage from '@/pages/AppCartPage'

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
            title: "Shop",
            // ! Need final this idea or think up something else or delete
            breadcrumb: [
                {name: "Home"}
            ]
        }
    },
    {
        path: '/shop/:category',
        component: CatalogPage,
        name: 'Category',
        meta: {
            title: "Category",
            breadcrumb: [
                {name: "Home", path: "Home"},
                {name: "Product", path: "Shop"}
            ]
        }
    },
    {
        path: '/shop/:category/:subcategory',
        component: CatalogPage,
        name: 'Subcategory',
        meta: {
            title: "Category",
            breadcrumb: [
                {name: "Home", path: "Home"},
                {name: "Product", path: "Shop"},
                {name: "Category", path: "Category"}
            ]
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
    }
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
