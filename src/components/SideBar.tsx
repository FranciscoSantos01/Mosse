import { useContext, useEffect, useState } from 'react'
import { ProductNavigation, type Category } from '../utils/data'
import { $active, addActive } from '../store/store'
import { useStore } from '@nanostores/react'

export const SideBar = () => {
   const[href]=useState<string>(window.location.pathname.slice(1))
   const[isOpen,setIsOpen]=useState(false)
   const active = useStore($active)
   const[content,setContent]=useState<Category[]>([])
   useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const itemFromUrl = queryParams.get('item');
  
      if (href in ProductNavigation) {
          const newActive = ProductNavigation[href as keyof typeof ProductNavigation];
  
          if (newActive) { // Check if newActive is defined
              setContent(newActive);
  
              if (!itemFromUrl) {
                  const firstSubtitle = newActive[0]?.subTitles?.[0];
                  if (firstSubtitle) { // Check if subTitles and firstSubtitle exist
                      addActive(firstSubtitle);
                      const url = new URL(window.location.href);
                      url.searchParams.delete('item');
                      url.searchParams.set('item', firstSubtitle);
                      window.history.pushState({}, '', url);
                  }
              } else {
                  addActive(itemFromUrl);
              }
          }
      }
  }, [href]);
   const handleActiveElement = (item:string)=>{
      addActive(item);
      setIsOpen(!isOpen)
      const url = new URL(window.location.href)
      url.searchParams.delete('item');
      url.searchParams.set('item',item)
      window.history.pushState({}, '', url);
   }


  return (
    <>
<button onClick={()=>setIsOpen(!isOpen)} data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar"   type="button" className="block p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" style={{scrollbarWidth:"none"}}   className={`absolute left-0 z-40 w-72 h-dvh bg-white-50 dark:bg-gray-800 transition-transform 
   ${isOpen ? "translate-x-0 mt-4" : "-translate-x-full"} 
   md:translate-x-0 md:block lg:block `}  aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
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
                  <li className='cursor-pointer' key={item} onClick={()=> handleActiveElement(item)}>
                  <span className={`flex items-center w-full p-2 text-base text-gray-500 transition duration-150 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700  ${active === item ? "bg-blue-200 transition duration-100" : ""} `}>{item}</span>
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


