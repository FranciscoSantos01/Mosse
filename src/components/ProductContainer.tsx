import { useContext, useEffect, useState } from "react"
import { ProductsLaboratorio, ProductsMedicina, type Products } from "../utils/data"
import { useStore } from "@nanostores/react"
import { $active } from "../store/store"
import { Table } from "./Table"





export const ProductContainer = () => {
  const active = useStore($active)
  console.log(active)
  const selectRender = ProductsLaboratorio.findIndex(item => item.category === active)
  const [data, setData] = useState<Products[] | []>([])
  useEffect(() => {
    if (active !== undefined) {
      const newData = structuredClone(selectRender !== -1 ? ProductsLaboratorio : ProductsMedicina).filter(item => item.category === active)
      console.log(newData.findIndex(item => item.category === active))
      setData([...newData])
    }
  }, [active])


  return (
    <>
      {data.length === 0 && <h3>Cargando Productos....</h3>}
      <section className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-2 relative">
        {
          data.length !== 0 && data.map(item => (
            <div key={item.id} className="max-w-[33rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex items-center justify-center " >
                <img className="rounded-t-lg py-2" src={item.imgUrl} alt="" />
              </a>
              <div className="p-5 flex flex-col items-center gap-3">
                <h5 className="mb-2 text-xl  md:text-2xl max-w-[370px] font-bold tracking-tight text-center text-gray-900 dark:text-white">{item.name}</h5>
                {item.description !== "" && <p className="mb-3 font-light text-gray-400 text-center dark:text-gray-400  text-balance">{item.description}</p>}
                {item.medidas && <div className="w-full"><Table medidas={item.medidas} /></div>}
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500">
                  Ver PDF
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          ))
        }
      </section>
    </>
  )
}
