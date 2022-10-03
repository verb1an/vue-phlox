export const appCart = {
    namespaced: true,
    state: {
        status: true,
        cart: [
            {
                id: 1,
                article: 'ql4ieyn0',
                name: "Beats",
                img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                price_original: 1099,
                price_current: 989,
                sale: 10,
                quantity: 1,
            },
            {
                id: 2,
                article: 'ql4ieyn0',
                name: "Beats",
                img: "https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1272-935x701.jpg",
                price_original: 1099,
                price_current: 989,
                sale: 10,
                quantity: 1,
            },
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