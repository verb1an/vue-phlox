export const appCategory = {
    namespaced: true,
    state: {
        categories: [
            {
                id: 1,
                title: "computers",
                sub: [2,4,5]
            },
            {
                id: 2,
                title: "accessories for pc",
                sub: [],
                subbed: true
            },
            {
                id: 3,
                title: "laptops",
                sub: []
            },
            {
                id: 4,
                title: "monitors",
                sub: [],
                subbed: true
            },
            {
                id: 5,
                title: "graphics card",
                sub: [],
                subbed: true
            },
            {
                id: 6,
                title: "headphones",
                sub: []
            },
            {
                id: 7,
                title: "smartphones",
                sub: []
            },
            {
                id: 8,
                title: "gaming chairs",
                sub: []
            },
        ]
    },
    getters: {
        GET_ALL_CATEGORY: (state) => {
            return state.categories
        },
        GET_CATEGORY: (state) => (id) => {
            return state.categories.find( cat => cat.id === id )
        },
        GET_CATEGORY_BYTITLE: (state) => (title) => {
            return state.categories.find( cat => cat.title.replaceAll(" ", "") === title.replaceAll("-", "") )
        }
    }
}