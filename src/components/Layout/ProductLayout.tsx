import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { SideBar } from '../SideBar'
import { ProductNavigation, type Category } from '../../utils/data'


interface Props{
    children:ReactNode
}
interface ContextProduct{
    active?:string,
    setActive:React.Dispatch<React.SetStateAction<string>>,
    href:string
}

export const Context = createContext<ContextProduct>({})

function ProductContext({children}:{children:ReactNode}){
    const[active,setActive]=useState("Analizador De Química Clínica")
    const[href,setHref]=useState<string>("")
    
   console.log(href)
    useEffect(()=>{
        setHref(window.location.pathname.slice(1))
    },[href])
    return(
        <Context.Provider value={{active,setActive,href}}>
            {children}
        </Context.Provider>
    )
}


const ProductLayout = ({children}:Props) => {
  return (
      <ProductContext>
        <SideBar />
        <main className="h-full p-4 sm:ml-72 ">
        {children}
        </main>
      </ProductContext>
  )
}

export default ProductLayout