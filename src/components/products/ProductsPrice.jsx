import {formatPrice} from "../../lib/format"

export default function ProductsPrice({price,className}) {
  return (
    <span className={className}>
      {formatPrice(price)}
    </span>
  )
}
