import {create} from 'zustand'


export const useProductCart = create(set => ({

    items : [],
    lorem: false,

    addProduct(prod) {
        set(state => {
            if(state.items.find(prevItem => prevItem.id === prod.id)) {
        
                const newItems = state.items.map(element => {
                    // if item equal to our new prod update the quantity
                    if(element.id === prod.id){
                        console.log(element.quantity)
                        return {
                            ...element,
                            quantity: element.quantity + 1,
                        } 
                    }
                    return element;
                })
                
                return {
                    items: newItems
                }
            }

            return {
                items: [
                    ...state.items, 
                    {
                       ...prod, 
                        quantity:  1
                    }
                ]
            }       
        })
    },

    deleteProduct(prodId){
        set(state => ({
            items: state.items.filter(item => item.id != prodId)
        }))
    },
    updateProduct(prodId, qty){
        set(state =>{

            // code block
            const ProductQuantityChosen = state.items.map(element => {
                if(element.id === prodId){
                    return {
                    ...element,
                    quantity: qty > 1 ? qty : 1
                    }
                }
        
                return element;
            })
        
            return {
                items: ProductQuantityChosen
            }
        })
    }
}))