
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import PlusIcon from "../UI/icons/PlusIcon";
import ProductsPrice from "./ProductsPrice";
import { useProductCart } from "../store/useProductCart";

export default function ProductsListItem({prod}) {
const addProduct = useProductCart(state => state.addProduct)
  return (
    <li className="group">
        <figure className="overflow-hidden">
            <img className=" w-full grayscale group-hover:grayscale-0 transition-all group-hover:scale-110 pb-4" src={prod.image} alt={`This is an Image of ${prod.name}`} />
        </figure>
        <Heading>{prod.name}</Heading>
        <ProductsPrice className="block font-bold" price={prod.price}/>
        <Button onClick={() => addProduct(prod)} className="mt-4">
            <PlusIcon /> 
            Add To Cart 
        </Button >
    </li>
  )
}
