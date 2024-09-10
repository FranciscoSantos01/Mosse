import type { Medida } from "../utils/data"


interface Props {
    medidas: Medida[]
}



export const Table = ({ medidas }: Props) => {
    const columnas = medidas.length >= 1 ? true :false
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                       {
                        columnas && medidas[0].medida ? (
                            <th  scope="col" className="px-6 py-3">
                             Medida  
                            </th>
                        ) : null
                       }
                         <th  scope="col" className="px-6 py-3">
                              Carga  
                         </th>
                         <th  scope="col" className="px-6 py-3">
                              Color  
                         </th>
                         <th  scope="col" className="px-6 py-3">
                              Gradilla de caja
                         </th>
                    </tr>
                </thead>
                <tbody>
                   {
                    medidas.map(medida=>(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                       { medida.medida && <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {medida.medida}
                        </th>}
                        <td className="px-6 py-4">
                           {medida.carga}
                        </td>
                        <td className="px-6 py-4">
                           {medida.colorTapa}
                        </td>
                        <td className="px-6 py-4">
                            {medida.gradillaCaja}
                        </td>
                       </tr>
                    ))
                   }

                </tbody>
            </table>
        </div>


    )
}
