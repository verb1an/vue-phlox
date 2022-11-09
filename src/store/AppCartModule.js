export const appCart = {
    namespaced: true,
    state: {
        status: true,
        cart: []
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