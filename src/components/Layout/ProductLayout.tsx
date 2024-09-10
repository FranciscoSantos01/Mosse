import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { SideBar } from '../SideBar'

interface Props{
    children:ReactNode
}



const ProductLayout = ({children}:Props) => {
  return (
        <>
        <SideBar />
        <main style={{scrollbarWidth:'none'}} className="h-full overflow-scroll w-fit lg:w-[80%]  p-4 md:ml-72 ">
        {children}
        </main>
        </>
  )
}

export default ProductLayout