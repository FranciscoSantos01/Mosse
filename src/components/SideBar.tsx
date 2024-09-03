import { useContext, useEffect, useState } from 'react'
import { Context } from './Layout/ProductLayout'
import { ProductNavigation, type Category } from '../utils/data'

export const SideBar = () => {
   const[href]=useState(window.location.pathname.slice(1))
   const{active,setActive}=useContext(Context)
   const[content,setContent]=useState<Category[]|string[]>([])
   console.log(href)
   useEffect(()=>{
        if(ProductNavigation[href] !== undefined){
         setContent(ProductNavigation[href])
        }
   },[href])
  return (
    <>
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" className="absolute  top-[75px] left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         {content.length === 0 && <h3>loading....</h3>}
        {content.map(item=>(
          <li key={item.id}>
          <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <span className=" ms-3 text-left rtl:text-right">{item.title}</span>
                {/* <svg className="w-3 h-3 arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg> */}
          </button>
          {item.subTitles && 
          <ul id="dropdown-example" className="py-2 space-y-2">
                {item.subTitles.map(item=>(
                  <li key={item} onClick={()=> setActive(item)}>
                  <a href="#" className={`flex items-center w-full p-2 text-base text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${active === item ? "bg-gray-100" : ""} `}>{item}</a>
                  </li>
                ))}
          </ul>
         }
      </li>
        ))}
      </ul>
   </div>
</aside>
</>
  )
}


