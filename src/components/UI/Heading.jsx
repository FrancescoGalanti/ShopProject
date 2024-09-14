
export default function Heading({children,className = " text-2xl"}) {
  return (
    <h3 className={`font-bold ${className ?? ''}` }>
      {children}
    </h3>
  )
}
