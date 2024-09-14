export default function reduceChosenProductProvider(state, action){
    switch(action.type) {
        case 'ADD_PRODUCT':
            if(state.items.find(prevItem => prevItem.id === action.payload.id)) {
        
                const newItems = state.items.map(element => {
                    // if item equal to our new prod update the quantity
                    if(element.id === action.payload.id){
                        console.log(element.quantity)
                        return {
                            ...element,
                            quantity: element.quantity + 1,
                        } 
                    }
                    return element;
                })
                
                return {
                    ...state,
                    items: newItems
                }
            }

            return {
                ...state,
                items: [
                    ...state.items, 
                    {
                        ...action.payload, // prod
                        quantity:  1
                    }
                ]
            }

          
        case 'DELETE_PRODUCT':
            console.log('delete prod action')
            return {
                ...state,
                items: state.items.filter(element => element.id !== action.payload)
            }
          
          case 'UPDATE_PRODUCT': {
            // code block
            const ProductQuantityChosen = state.items.map(element => {
                if(element.id === action.payload.prodId){
                    return {
                    ...element,
                    quantity: action.payload.quantity > 1 ? action.payload.quantity : 1
                    }
                }
        
                return element;
                })
        
            return {
                ...state,
                items: ProductQuantityChosen
            }
          }
              
              
        default:
          throw new Error(`${action.type} is not avaible`)
      }
}