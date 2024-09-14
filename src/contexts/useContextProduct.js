import { useContext } from "react"
import { ChosenProduct } from "./chosenProductContext"

export default function useContextProduct(){

    const context = useContext(ChosenProduct);
    
    if(!context) {
        throw new Error('this component must be used within a CountProvider');
    }
        
    return context
}