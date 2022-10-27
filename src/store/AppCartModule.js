export const appCart = {
    namespaced: true,
    state: {
        status: true,
        cart: [
            {
                id: 1,
                article: "ql4ieyn0",
                name: "Beats",
                description:
                    "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration words some form by injected or randomized which don’t even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything",
                img: [
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                ],
                price_original: 599,
                price_current: 499,
                sale: 10,
                quantity: 1,
                rating: 4,
                reviews: 1,
                category: ["Headphone"],
            },
            {
                id: 2,
                article: "ql4ieyn0",
                name: "Beats",
                description:
                    "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration words some form by injected or randomized which don’t even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything",
                img: [
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                    "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                ],
                price_original: 999,
                price_current: 899,
                sale: 10,
                quantity: 1,
                rating: 4,
                reviews: 1,
                category: ["Headphone"],
            }
        ]
    },
    getters: {
        GET_CART(state) {
            return state.cart
        },
        GET_ITEMS_QUANTITY(state) {
            let count = 0;
            state.cart.forEach((el) => {
                count += el.quantity;
            });
            return count;
        },
        GET_TOTAL_PRICE(state) {
            let count = 0;
            state.cart.forEach((el) => {
                count += el.price_current * el.quantity;
            });
            return count;
        },
        GET_TOTAL_PRICE_WITHOUT_SALE(state) {
            let count = 0;
            state.cart.forEach((el) => {
                count += el.price_original * el.quantity;
            });
            return count;
        }
    },
    actions: {
        ADD_NEW_PRODUCT({state}, product) {
            const index = state.cart.findIndex(( el, index ) => {
                if (el.id == product.id) {
                    return String(index);
                }
            })
            if(index != -1) {
                state.cart[Number(index)].quantity += 1;
                return;
            }
            state.cart.push(product)
        },
        REMOVE_ITEM({state}, productID) {
            const itemPos = state.cart.findIndex((el, index) => {
                if(el.id == productID) return String(index);
            } )
            
            state.cart.splice(itemPos, 1);
        }
    }
}