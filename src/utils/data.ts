


export const Categories={
    'Laboratory':{}
}


interface ProductNavigation {
    "Laboratorio": Category[];
    "Medicina-del-hogar": string[];
  }
  
  export interface Category {
    id: number;
    title: string;
    subTitles?: string[]; // Optional since some categories don't have subTitlesThis is added for the case where `subTitle` is used instead of `subTitles`
  }


export const ProductNavigation:ProductNavigation={
    "Laboratorio":[
    {
        id:1,
        title:"Instrumentos Automaticos y Semiautomaticos",
        subTitles: [
            "Analizador De Química Clínica",
            "Contador Hematológico",
            "Coagulómetros",
            "Analizador De Iones",
            "Hormonas",
            "Hemocultivo Automatizado",
            "Analizador De Gases En Sangre"
          ]
    },
    {
        id:2,
        title:"EQUIPAMIENTO PARA LABORATORIO",
        subTitles:["Microscopio Binocular","Centrífuga de mesa","Estufa de Esterilización","Estufa de Cultivo","Baño Maria","Balanzas para laboratorio"]
    },
    {
        id:3,
        title:"Reactivos de Diagnostico"
    },
    {
        id:4,
        title:"Biología Molecular"
    },
    {
        id:5,
        title:"Descartables",
        subTitles:["Tubos Abiertos con Aditivo","Tubos con Vacio","Placas de Petri","Descartadores de Aguja","Recolectores de Orina","Pipetas Pasteur","Hisopos Nasofaríngeos"]
    },
],
   "Medicina-del-hogar":["Oxímetros","Tensíometros Automaticos","Balanzas","Cuidados Críticos"],
}