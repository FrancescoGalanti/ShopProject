import { createContext, useEffect, useReducer } from "react";
import  reduceChosenProductProvider  from "./reduceChosenProductProvider";

// Context API: NON è un GLOBAL STATE!
// Context API non ha SCHEDULING
// Nesting multiplo per ogni parte di context API

// 1. Initail context state
const initialChosenProductContext = {
    items : [],
    lorem: false
};

// 2. Context object
// usato per:
// 1. creare il componente JSX provider
// 2. consumare i dati del context con l'hook useContext()
export const ChosenProduct = createContext(null);



// 3. Creazione del components JSX (provider)
export default function ChosenProductProvider ({children}) {
    const [state, dispatch] = useReducer(reduceChosenProductProvider, initialChosenProductContext, () => {
        return localStorage.getItem('chosenProduct') ? {
            ...initialChosenProductContext,
            items: JSON.parse(localStorage.getItem('chosenProduct'))
        } : initialChosenProductContext.items
    })

    // local storage items
    useEffect(() => {
        localStorage.setItem("chosenProduct", JSON.stringify(state.items))

    },[state.items])


    return (
        <ChosenProduct.Provider value={{state,dispatch}}>
            {children}
        </ChosenProduct.Provider>
    )
}