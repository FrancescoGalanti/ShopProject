import {DEMO_PRODUCTS} from "../../lib/constants.js"
import ProductsListItem from "./ProductsListItem.jsx"

export default function ProductsList() {
  return (
    <section className="container">
      <h2 className="pt-10 pb-6 lowercase">Our Products</h2>

      <ul className="grid grid-cols-3  gap-4">
        {DEMO_PRODUCTS.map(prod => (
                // <li key={`product-card-${prod.id}`}>{prod.name}</li>
                <ProductsListItem  prod={prod} key={`product-card-${prod.id}`} />
            ))}
        </ul>
    </section>
  )
}
