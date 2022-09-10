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
            title: "Home - Phlox Digital Shop"
        }
    },
    {
        path: '/shop',
        component: CatalogPage,
        name: 'Shop',
        meta: {
            title: "Shop - Phlox Digital Shop"
        }
    },
    {
        path: '/about-us',
        component: AboutPage,
        name: 'About',
        meta: {
            title: "About Us - Phlox Digital Shop"
        }
    },
    {
        path: '/blog',
        component: BlogPage,
        name: 'Blog',
        meta: {
            title: "Blog - Phlox Digital Shop"
        }
    },
    {
        path: '/contact-us',
        component: ContactPage,
        name: 'Contact',
        meta: {
            title: "Contact Us - Phlox Digital Shop"
        }
    },
    {
        path: '/cart',
        component: CartPage,
        name: 'Cart',
        meta: {
            title: "Cart - Phlox Digital Shop"
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const metaData = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    // console.log(title);
    if (metaData) {
        document.title = metaData.meta.title;
    }
    next();
})

export default router;
