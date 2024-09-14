import ProductsPrice from "../products/ProductsPrice";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import CartIcons from "../UI/icons/CartIcons";
import CloseIcon from "../UI/icons/CloseIcon";
import { useState } from "react";
import { useProductCart } from "../store/useProductCart";


export default function HeaderCart() {
const items = useProductCart(state => state.items);
const deleteProduct = useProductCart(state => state.deleteProduct)
const updateProduct = useProductCart(state => state.updateProduct)

const [isVisible, setIsVisible] = useState(false)

const total = items.reduce((total, item) => total + item.price * item.quantity, 0);

function showDropdown(){
  setIsVisible(prev => !prev);

}
  return (
    <div className="bg-black relative">
        <Button onClick={showDropdown}>
          
          <CartIcons />
          ({items.length})
        </Button>
        {isVisible && 
        <div className="absolute top-full right-0 bg-tertiary min-w-80 p-4 text-black shadow-xl">
          {
            items.length > 0 ? 
            (    
              <>
                <ul>
                  {items.map(prod => (

                    <li className="flex gap-3 items-center mb-4 last:mb-0 border-b border-b-black/50 pb-4" key={`cart-prod-${prod.id}`}>
                      <img className="size-12" src={prod.image} alt="" />
                      <div className="grow">
                        <Heading className="text-base">{prod.name}</Heading>
                        <ProductsPrice  price={prod.price} />
                      </div>
                      <div className="flex gap-3 items-center">
                        {prod.quantity > 1 && 
                        <button onClick={() => updateProduct(prod.id, prod.quantity - 1)}>-

                        </button>}
                          <span>{prod.quantity}</span>
                        <button onClick={() => updateProduct(prod.id, prod.quantity + 1)}>+</button>
                        
                      </div>
                      <div className="grid place-content-center">
                        <button onClick={() => deleteProduct(prod.id)}><CloseIcon className="size-5" /></button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-end items-center font-bold gap-2 pt-4">
                  Total: <ProductsPrice  price={total} />
                </div>
              </>     
            )
             :  <p className="text-center">You cart is empty</p>
          }
         
        </div>}
    </div>
  )
}
