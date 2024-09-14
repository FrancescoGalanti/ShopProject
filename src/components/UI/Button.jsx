
export default function Button({children,className,...props}) {
  return (
    <button {...props} className= {`text-background bg-black font-bold flex gap-2 px-4 py-3 ${className ?? ''}`}>
      {children}
    </button>
  )
}
