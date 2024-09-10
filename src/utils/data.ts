


interface ProductNavigation {
  "Laboratorio": Category[];
  "Medicina-del-Hogar": Category[];
}

export interface Category {
  id: number;
  title: string;
  subTitles?: string[]; // Optional since some categories don't have subTitlesThis is added for the case where `subTitle` is used instead of `subTitles`
}

export type Medida = {
  medida?: string,
  carga: string,
  colorTapa: string,
  gradillaCaja: string

}
export interface Products {
  id: number,
  name: string,
  description: string,
  category?: string,
  medidas?: Medida[],
  imgUrl?: string,
  pdfUrl?: string,
  section: string

}

export const ProductNavigation: ProductNavigation = {
  "Laboratorio": [
    {
      id: 1,
      title: "Instrumentos Automaticos y Semiautomaticos",
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
      id: 2,
      title: "EQUIPAMIENTO PARA LABORATORIO",
      subTitles: ["Microscopio Binocular", "Centrífuga de mesa", "Estufa de Esterilización", "Estufa de Cultivo", "Baño Maria", "Balanzas para laboratorio"]
    },
    {
      id: 3,
      title: "Reactivos de Diagnostico",
      subTitles: ["Reactivos de Diagnostico"]
    },
    {
      id: 4,
      title: "MicroBiología y Bacteriología",
      subTitles: ["Medios de Cultivo", "Monodiscos", "Tiras para CIM", "Mycofast", "Hemocultivos", "Medios Cromogénicos"]
    },
    {
      id: 5,
      title: "Biología Molecular",
      subTitles: ["Bíologia Molecular"]
    },
    {
      id: 6,
      title: "Descartables",
      subTitles: ["Tubos Abiertos con Aditivo", "Tubos con Vacio", "Placas de Petri", "Descartadores de Aguja", "Recolectores de Orina", "Pipetas Pasteur", "Hisopos Nasofaríngeos"]
    },
  ],
  "Medicina-del-Hogar": [{
    id: 1,
    title: "Medicina del Hogar",
    subTitles: ["Oxímetros", "Tensíometros Automaticos", "Balanzas", "Cuidados Críticos"]
  }]
}

export const ProductsLaboratorio: Products[] = [
  {
    id: 1,
    name: "Modelo automático CM 250 marca Wiener",
    description: "Cm 250 es un analizador clínico random access de última generación, bidireccional, que trabaja con un software integralmente desarrollado para Windows.",
    category: "Analizador De Química Clínica",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827542/Mosse/wlre8j71fchdyk8ltk9p.jpg",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656367/Mosse/thadjnljwsflftufic80.pdf",
    section: "Laboratorio"
  },
  {
    id: 2,
    name: "Modelo automático CM 200 marca Wiener",
    description: "Con un programa interno de Control de Calidad, posibilidad de urgencias, modo de trabajo con uno o dos reactivos y una velocidad de hasta 230 pruebas por hora, se presenta como la solución excelente, con la mejor relación costo/prueba para laboratorios con volumen de trabajo de entre 30 y 80 pacientes por día.",
    category: "Analizador De Química Clínica",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827542/Mosse/ejgw9ult6jpokvr0eova",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656365/Mosse/m0br5mwbjrpeog7rnnmf.pdf",
    section: "Laboratorio"
  },
  {
    id: 3,
    name: "Espectrofotómetro semi automático 1600DR marca Metrolab",
    description: "Analizador clínico semiautomático de última generación. Posee novedosas prestaciones que lo hacen especialmente útil para cualquier tipo de laboratorio. Fue diseñado para trabajar en las condiciones más exigentes y con bajísimo costo de mantenimiento..",
    category: "Analizador De Química Clínica",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827542/Mosse/kqk33v5ao6bmpip4n8xd",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827542/Mosse/fcbxt2xifmcqbpdvsd6d.pdf",
    section: "Laboratorio"
  },
  {
    id: 4,
    name: "Contador hematológico XS20 marca Wiener",
    description: "Detalle de información de las muestras jamás visto en un analizador de 3 partes bidireccional.Proporciona información útil para el diagnóstico, que incluye detección de WBC, detección de RBC y detección de PLT.",
    category: "Contador Hematológico",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/mrb3i2fii5jffdkmrht0",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/hrrgsg05kbqw1veubz1p.pdf",
    section: "Laboratorio"
  },
  {
    id: 5,
    name: "Contador hematológico diferencial de 5 partes Counter 31 AL marca Wiener",
    description: "Tecnología patentada, diseño de uso amigable, software de fácil uso, personalización de informes, fácil mantenimiento, exactitud en resultados y alarmas, solución completa en hematología.",
    category: "Contador Hematológico",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/caw76hbvc3blnzpcxgoj",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/bjpnj6jrb20oinewlalz",
    section: "Laboratorio"
  },
  {
    id: 6,
    name: "Contador hematológico diferencial de 5 partes Counter 29 marca Wiener",
    description: "Principios: Método de impedancia eléctrica para RBC y PLT . Reactivo libre de cianuro para el análisis de hemoglobina. Citometría de flujo (FCM) + dispersión -láser en tres ángulos + método de tinción química para el análisis diferencial en 5-partes de WBC y para el recuento de WBC.",
    category: "Contador Hematológico",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/srppjfk1gqlgduzz7cir",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/brhv2blpf7zxwg9wqt7q",
    section: "Laboratorio"
  },
  {
    id: 7,
    name: "Analizador de coagulación COATRON X marca Teco ",
    description: "La línea de instrumentos Coatron X es la continuación del desarrollo de la línea de productos Coatron. Más de 25 años de experiencia e innovación son la referencia para LA nueva línea de instrumentación Coatron X. El principio de detección único en combinación con el algoritmo analítico de alto nivel calcula resultados exactos, precisos y reproducibles.",
    category: "Coagulómetros",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/iduexbpwhe8iipv4jm6n",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/gwgfmolcxsfp8wgx7wsc",
    section: "Laboratorio"
  },
  {
    id: 8,
    name: "Coagulómetro COR 50 marca Wiener ",
    description: "Un coagulómetro automático para todo tipo de laboratorios, con la flexibilidad, la asistencia, la confianza y el servicio de Wiener lab.El COR 50 es un coagulómetro totalmente automático, con espacio suficiente para 20 reactivos diferentes y 3 posiciones más para diluyentes y solución limpiadora.",
    category: "Coagulómetros",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/pr6tqqqsqo6lfdvfahwf",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/if5oa5zwaw1z5nh1pesn",
    section: "Laboratorio"
  },
  {
    id: 9,
    name: "Coagulómetro COL 1 V2.0 ",
    description: "​Coagulómetro semiautomático con tecnología de doble longitud de onda, para la determinación rápida y precisa de ensayos coagulométricos, cromogénicos y turbidimétricos.​",
    category: "Coagulómetros",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/frwywbnukwyfpuszdcxw",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/sb3sr6hmqytbuopbncxq",
    section: "Laboratorio"
  },
  {
    id: 10,
    name: "Coagulómetro COL 2 V2.0 ",
    description: "Coagulómetro semiautomático con tecnología de doble longitud de onda, para la determinación rápida y precisa de ensayos coagulométricos, cromogénicos y turbidimétricos.​",
    category: "Coagulómetros",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/mtv0icayu1rx3b84z2fw",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/k58bigazxj6z4rtefaq1.pdf",
    section: "Laboratorio"
  },
  {
    id: 11,
    name: "Coagulómetro COL 4 V2.0 ",
    description: "Coagulómetro semiautomático con tecnología de doble longitud de onda, para la determinación rápida y precisa de ensayos coagulométricos, cromogénicos y turbidimétricos.​​",
    category: "Coagulómetros",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/aoe9kw9fegenbefkeglw",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/pduigt1jk6kgyimlaapw",
    section: "Laboratorio"
  },
  {
    id: 12,
    name: "Familia de analizadores de electrolitos marca Diestro",
    description: "Compacto y poderoso. Desde semiautomático a totalmente automático, para usuarios con baja, media y alta carga de trabajo.Electrodos Ion Selectivo, digitales y libres de mantenimiento.Expandible hasta 5 electrolitos simultáneos. Pantalla gráfica y táctil. Conexión a LIS. Software de control de calidad. Tecnología propia.",
    category: "Analizador De Iones",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/qbxat9aeybm6xjvvbipg",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ios9ap6ej15fkv3wphfz",
    section: "Laboratorio"
  },
  {
    id: 13,
    name: "Analizador automático de inmunoensayos AIA 360",
    description: "La solución para el pequeño y mediano laboratorio. Es fácil de utilizar, provee resultados en 20 minutos. Hasta 36 muestras/hora.",
    category: "Hormonas",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/pbcl8mvjydftyopnbbro",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/d2c1m9lbx892gumied3m",
    section: "Laboratorio"
  },
  {
    id: 14,
    name: "Sistema de inmunoensayos quimioluminiscentes CLIA 900",
    description: "La dimensión justa para su laboratorio | 180 test/h | 15 posiciones de reactivos | 50 posiciones de muestras | 17.5 min para informe de primer resultado",
    category: "Hormonas",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/qqlouzwdpfhuer7bxapb",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/kn084hdxukkydclx2qyq",
    section: "Laboratorio"
  },
  {
    id: 15,
    name: "Hemocultivo",
    description: "Diseño compacto con la posibilidad de integrar hasta 4 equipos en un solo controlador. Permite procesar 32 botellas de hemocultivo de forma simultánea y obtener resultados positivos en menos de 72 hs.",
    category: "Hemocultivo Automatizado",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/avbvynqlqa76xwph7ylh",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/mgkc5sca0ogjya2xiuyl",
    section: "Laboratorio"
  },
  {
    id: 16,
    name: "Analizador de Gases en Sangre GASTAT – 700",
    description: "Fácil de usar, fácil de mantener. La evolución en el análisis de gases en sangre con una nueva propuesta innovadora. Diseñado para no desperdiciar reactivos. Se trata de un equipo ideal para grandes volúmenes de muestra a costos bajos por determinación y previsible en su consumo.",
    category: "Analizador De Gases En Sangre",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/rnqhmva01vfbon0vj30q",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/gszn94tg97dyg9y7va6x",
    section: "Laboratorio"
  },
  {
    id: 17,
    name: "Microscopio binocular ECLIPSE 200 LED marca Nikon",
    description: "El Eclipse E200 ofrece una operatividad y durabilidad excepcionales, e imágenes de alta calidad. Se puede usar para diversos fines, como el uso educativo, de laboratorio clínico y en investigación básica.",
    category: "Microscopio Binocular",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/gs9rawuikvidf5qdchoa",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/sgtghmo4mgas2rlfxsyh",
    section: "Laboratorio"
  },
  {
    id: 18,
    name: "Microscopio binocular XSZ107 marca Labklass",
    description: "Cabeza binocular tipo sliding con inclinación a 45°, rotatorio 360°.Portaoculares con distancia interpupilar variable entre 55 – 75 mm.Oculares 1 par 10xWF y 1 par 16xWF.",
    category: "Microscopio Binocular",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/f74jyhjmnpznholq8xiv",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/zudts0mkau0aycw5rpet",
    section: "Laboratorio"
  },
  {
    id: 19,
    name: "Centrífuga de mesa G-142 D marca Gelec",
    description: "Con sistema eléctrico de interrupción de funcionamiento por apertura de tapa.Posee gabinete doble con campana interior.Con regulador electrónico de velocidad.",
    category: "Centrífuga de mesa",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/tf4n3rxozse9ddgxbwel",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ibqklo81iod9hurya17p",
    section: "Laboratorio"
  },
  {
    id: 20,
    name: "Centrífuga de mesa digital G-146 DS marca Gelec",
    description: "Con sistema eléctrico de interrupción de funcionamiento por apertura de tapa.Posee gabinete doble con campana interior.Con regulador electrónico de velocidad.",
    category: "Centrífuga de mesa",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/clvbp9xav1gksyquypkf",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/yzxhxkcsm5dodsdohg1q",
    section: "Laboratorio"
  },
  {
    id: 21,
    name: "Microcentrífuga para tubos microhematocritos G-112 marca Gelec",
    description: "Bloqueo de funcionamiento eléctrico por apertura de tapa, timer digital de 30 minutos, ábaco para lectura de microhematrocritos, campana interna de seguridad, cierre a presión con traba de seguridad.",
    category: "Centrífuga de mesa",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ntzsgqwaej3jsxoym595",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/sjfehkscxfnnjhuervqb",
    section: "Laboratorio"
  },
  {
    id: 22,
    name: "Microcentrífuga para tubos eppendorf G-134 D marca Gelec",
    description: "Indicador y selector digital programable de velocidad y tiempo, bloqueo de tapa hasta parada del rotor, gabinete doble con campana interior, freno automático, memoriza la última selección efectuada.",
    category: "Centrífuga de mesa",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/woiesmyam4mtgvfc6zol",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/wnepr8lzqt2pkd7qrlhq",
    section: "Laboratorio"
  },
  {
    id: 23,
    name: "Centrífuga de mesa 80 – 2B marca Labklass",
    description: "Ideal para enseñanza, o para exámenes de rutina. Con carcasa construida en plástico de alto impacto y diseño compacto, que permite economizar espacio de laboratorio.",
    category: "Centrífuga de mesa",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/t45ttmwznzjwl73d950n",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/onzhnodjngnblkj06xm1",
    section: "Laboratorio"
  },
  {
    id: 24,
    name: "Estufa de esterilización TDE-30 marca Dalvo",
    description: "Indicada para esterilización de instrumental y secado de materiales en laboratorios Industriales, Médicos. Por su sistema de calentamiento a convección de aire inducido por doble pared con paneles difusores, asegura homogeneidad de temperatura sin sobrecalentamiento, ni irradiación directa.",
    category: "Estufa de Esterilización",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/s4gqugqubhkpzsrf5ad9",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/h42tiw2zmbh6o2q88xpa",
    section: "Laboratorio"
  },
  {
    id: 25,
    name: "Estufa de esterilización SE-45T marca San Jor",
    description: "Rango de temperatura de 30ºC a 200ºC | Rango óptimo de trabajo de 90ºC a 200ºC | Exactitud: +- 1,4% del valor final de temperatura | Uniformidad: +- 1,5% del valor final de temperatura",
    category: "Estufa de Esterilización",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/gvljatukq7ynxkgl67ec",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/pdwebajullrvwl3hb0m5",
    section: "Laboratorio"
  },
  {
    id: 26,
    name: "Estufa de cultivo SL-30C marca San Jor",
    description: "Estufa de cultivo chica (36 litros). Interior de Acero Inoxidable grado 304 18/8. Exterior de hierro con pintura horneada. Aislamiento con lana de vidrio.",
    category: "Estufa de Cultivo",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/tsapjfn9cdd3m01lxp5t",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/wdinnrphnlbijawuzw1c",
    section: "Laboratorio"
  },
  {
    id: 27,
    name: "Estufa de cultivo SL-70C marca San Jor",
    description: "Estufa de Cultivo de 175 L. Interior de Acero Inoxidable grado 304 18/8. Exterior de hierro con pintura horneada. Aislamiento con lana de vidrio.",
    category: "Estufa de Cultivo",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/n5drhrqess1m8laawxa5",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/xg6ggwqinyefsd8c4klx",
    section: "Laboratorio"
  },
  {
    id: 28,
    name: "Estufa de cultivo TDC-30",
    description: "Las estufas TECNO DALVO, línea C y G, están especialmente indicadas para uso en laboratorios, para ensayos de cultivo o germinación en general. Por su sistema de calentamiento a convección de aire inducido por doble pared con paneles difusores, asegura homogeneidad de temperatura sin sobrecalentamiento, ni irradiación directa.",
    category: "Estufa de Cultivo",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/s4gqugqubhkpzsrf5ad9",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ahlt1htlbvlw8zki6iob",
    section: "Laboratorio"
  },
  {
    id: 29,
    name: "Baño maría Masson 2 gradillas marca Vicking",
    description: "Las principales características de este modelo son la alta calidad de los materiales empleados, (acero inoxidable 18/8 AISI 304 en su totalidad) y su prolija terminación y diseño funcional.",
    category: "Baño Maria",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/hkhiobowirmpldak0g2y",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/xm4tnflxclyszzue46ez",
    section: "Laboratorio"
  },
  {
    id: 30,
    name: "Balanza YS202 marca Ohaus",
    description: "La balanza YS es liviana, robusta, y perfecta para el uso casero, industrial, educativo o en laboratorios. Está diseñada con un plato de acero inoxidable removible para fácil limpieza. Ideal para joyería, formulación, muestras de suelo, pesaje postal y dietas.",
    category: "Balanzas para laboratorio",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ybxomnvhx7myl3irqp55",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/w3hg1tiragjdzxh4vk2w",
    section: "Laboratorio"
  },
  {
    id: 31,
    name: "Balanza CS marca Ohaus",
    description: "La balanza compacta OHAUS CS es una balanza portátil y ligera ideal para su uso en aplicaciones de laboratorio, industriales, educativas y domésticas. Las aplicaciones pueden incluir paquetería, control de calidad, formulación, muestreo en campo, pesaje postal y soluciones dietéticas.",
    category: "Balanzas para laboratorio",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/knebk158c5jegz06hcmz",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/irsgwxmapwtao5xeh6iw",
    section: "Laboratorio"
  },
  {
    id: 32,
    name: "Wiener",
    description: "Química Clínica,Turbidimetría,Inmunología,Hemostasia,Hematología,Urianálisis",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/efhqaqc8tk6mzehwxjtf",
    category: "Reactivos de Diagnostico",
    section: "Laboratorio"
  },
  {
    id: 33,
    name: "Biorad",
    description: "Platelia Aspergilius,Platelia Dengue",
    category: "Reactivos de Diagnostico",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/v2dfdrqdsrlsxk2gvanq",
    section: "Laboratorio"
  },
  {
    id: 34,
    name: "Biocientífica",
    description: "Inmunología",
    category: "Reactivos de Diagnostico",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/gzfa9oikcdffsoebfldq",
    section: "Laboratorio"
  },
  {
    id: 35,
    name: "Deshidratados y listos para usar",
    description: "Medios de cultivo utilizados en análisis microbiológicos de muestras clínicas, de aguas, alimentos, productos farmacéuticos, veterinarios y cosméticos, así como también en validación de procesos.Según su composición y uso, permiten realizar recuentos microbianos, identificación de grupos, géneros y especies bacterianas.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/zwhywkay0ofhlhrvvp2k",
    category: "Medios de Cultivo",
    section: "Laboratorio"
  },
  {
    id: 36,
    name: "Britania y Liofilchem",
    description: "Discos utilizados para la realización de las pruebas de sensibilidad a los antimicrobianos por el método de difusión en Mueller Hinton Agar.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/kmmpezfdjdl53v8a3bq7",
    category: "Monodiscos",
    section: "Laboratorio"
  },
  {
    id: 37,
    name: "Liofilchem",
    description: "La tira de prueba CIM es un ensayo cuantitativo para determinar la concentración inhibitoria mínima de agentes antimicrobianos contra microorganismos y para detectar los mecanismos de resistencia.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ana3qxj8noxifk94eilb",
    category: "Tiras para CIM",
    section: "Laboratorio"
  },
  {
    id: 38,
    name: "Kit de Identificación para Mycoplasma y Ureplasma",
    description: "Es un ensayo colorimétrico preciso, rentable y fácil de usar diseñado para la detección, enumeración, identificación y determinación de la susceptibilidad a los antibióticos de Ureaplasma urealyticum (U.u.) y Mycoplasma hominis (M.h.) de muestras urogenitales.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ana3qxj8noxifk94eilb",
    category: "Mycofast",
    section: "Laboratorio"
  },
  {
    id: 39,
    name: "Automatizados y Manuales",
    description: "Utilizados para la detección y el cultivo de microorganismos a partir de muestras de sangre.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/z3wa8b45s4iwfwhxtjx7",
    category: "Hemocultivos",
    section: "Laboratorio"
  },
  {
    id: 40,
    name: "Chromagar",
    description: "El uso de los medios de cultivo cromogénicos para la detección de microorganismos está aumentando de manera constante a pesar de la introducción de otras técnicas (a menudo basadas en la MicroBiología y Bacteriología).La tecnología cromogénica aplicada a los medios de cultivo consiste en colorear las colonias de bacterias en desarrollo con colores distintivos para permitir una diferenciación más fácil del microorganismo creciente.",
    category: "Medios Cromogénicos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/jxgjbx7d0lq0yqha64xd",
    section: "Laboratorio"
  },
  {
    id: 41,
    name: "",
    description: "Línea de instrumentos y reactivos para investigación, Cicladores térmicos, Sistemas de PCR en tiempo real, Consumibles, Purificación y análisis de proteínas, Cromatografía, Amplificación y purificación de ácidos nucleicos, Electroforesis, Análisis de imágenes, Lectores de microplacas.",
    category: "Biología Molecular",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/wn5hxgrxbwpy12l0obsn",
    section: "Laboratorio"
  },
  {
    id: 42,
    name: "",
    description: "Kits para el diagnóstico de enfermedades infecciosas: oculares, pediátricas, gastroenteritis, meningitis, fiebres tropicales, infecciones respiratorias.",
    category: "Biología Molecular",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/j3oz4od3hqspxtgjwql7",
    section: "Laboratorio"
  },
  {
    id: 43,
    name: "",
    description: "PCR Multiplex. MLPA Multiplex Ligation Dependent Probe Amplification. MS-MLPA Metilación específica MLPA. mRNA MLPA (RT-MLPA) Transcriptasa reversa.",
    category: "Biología Molecular",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/in55xrcq8rgyusmqdgbf",
    section: "Laboratorio"
  },
  {
    id: 44,
    name: "",
    description: "Productos para purificación y aislamiento de DNA y RNA en muestras clínicas, animales y vegetales. Reactivos para transfección y clonado. Sistemas para purificación y expresión de proteínas. Productos para PCR. Sistemas automatizados para extracción de DNA y RNA en todo tipo de muestras.",
    category: "Biología Molecular",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/mc3xptbcldwt2srf274r",
    section: "Laboratorio"
  },
  {
    id: 45,
    name: "",
    description: "INNO LiPA: Los ensayos del tipo INNO-LiPA se basan en el principio de hibridación inversa. La lí­nea cuenta con kits para la detección de enfermedades infecciosas como HBV (Genotyping, PreCore, Drug Resistance), HPV (GenotipificaciÃ³n HR/LR), Mycobacterias (genotipificaciÃ³n 16 tipos), Mycobacterium Tuberculosis (y sus variantes resistentes). Detección de enfermedades genéticas Alzheimer (genotipos de la apoliproteina E) y Fibrosis quística (mutaciones gen CFRT). Determinación de los Haplotipos del complejo mayor de histocompatibilidad (HLA-A, HLA-B, HLA-C, HLA-DRB1, HLA-DRB, HLA-DPB, HLA-DQB1 y HLA-DQA1)INNO LIA Score: La prueba INNO-LIA Score es un inmunoensayo que utiliza antígenos derivados de proteínas inmunodominantes que permiten la detección específica para todas las cepas conocidas de los virus HTLV, HIV y HCV; la Treponema Pallidum, y enfermedades sistémicas autoinmunes.",
    category: "Biología Molecular",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/td149nc99nqfztv9cqzz",
    section: "Laboratorio"
  },
  {
    id: 46,
    name: "Tubos amarillos de suero con gel y acelerador",
    description: "",
    medidas: [
      { medida: "13×100 mm", carga: "4mL", colorTapa: "amarillo", gradillaCaja: "100/1200" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/udkryzcmofetrcxx0czr",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 47,
    name: "Tubos celestes de coagulación con citrato de sodio",
    description: "",
    medidas: [
      { medida: "13×75 mm", carga: "2,5mL", colorTapa: "negro", gradillaCaja: "100/1200" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/arqyl0pw8bwvvzaub6cb",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 48,
    name: "Tubos lilas con EDTA K2 / K3",
    description: "",
    medidas: [
      { medida: "13×75 mm", carga: "2,5mL", colorTapa: "lila", gradillaCaja: "100/1200" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/zgq7pr7vco89ibipvywc",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 49,
    name: "Tubos verdes con heparina",
    description: "",
    medidas: [
      { medida: "13×17 mm", carga: "4mL", colorTapa: "verde", gradillaCaja: "100/1200" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/b5cn2jrnyayitshdseno ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 50,
    name: "Tubos celestes de coagulación con citrato de sodio",
    description: "",
    medidas: [
      { medida: "13×75 mm", carga: "1,2,7 mL", colorTapa: "celeste", gradillaCaja: "50 U" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/cbvva6jh8zjxvqt4lotx ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 51,
    name: "Tubos lilas con EDTA K2 / K3",
    description: "",
    medidas: [
      { medida: "13×17 mm", carga: "1,2,3,7 mL", colorTapa: "lila", gradillaCaja: "50 U" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ilblreueopcllgd3cbny ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 52,
    name: "Tubos rojos de suero con acelerador",
    description: "",
    medidas: [
      { medida: "13×75 mm", carga: "4,5,7 mL", colorTapa: "rojo", gradillaCaja: "50 U" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/ogvaoz9d3qcgvofxjng0 ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 53,
    name: "Tubos verde con heparina",
    description: "",
    medidas: [
      { carga: "1mL", colorTapa: "verde", gradillaCaja: "50 U" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/oiumi1auibttmffl7wda ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 54,
    name: "Microtubo lila con EDTA-K3",
    description: "",
    medidas: [
      { carga: "0,5 y 1mL", colorTapa: "lila", gradillaCaja: "50 U" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/yy8vfrkxpnx27urgvxif ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 55,
    name: "Microtubo verde con heparina de litio",
    description: "",
    medidas: [
      { carga: "1mL", colorTapa: "verde", gradillaCaja: "50 U" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/bm5q7v8zoxgro11n5qxh ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 56,
    name: "Microtubo celeste con citrato",
    description: "",
    medidas: [
      { carga: "05 y 1mL", colorTapa: "celeste", gradillaCaja: "50 U" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/en9zzvdjfsaqh5fjtnyp ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 57,
    name: "Microtubo rojo con acelerador",
    description: "",
    medidas: [
      { carga: "1mL", colorTapa: "rojo", gradillaCaja: "50 U" },
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/oi1k0rk9lkfl0yrcnd8x ",
    category: "Tubos Abiertos con Aditivo",
    section: "Laboratorio"
  },
  {
    id: 58,
    name: "Tubos amarillos de suero con gel y acelerador",
    medidas: [
      { medida: "13×75 mm", carga: "4 mL", colorTapa: "amarillo", gradillaCaja: "100/1800" },
      { medida: "13×100 mm", carga: "5 mL", colorTapa: "amarillo", gradillaCaja: "100/1200" },
      { medida: "16×100 mm", carga: "9 mL", colorTapa: "amarillo", gradillaCaja: "100/1200" }
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/j9ljm9liqzza9vyhkxjl ",
    description: "",
    category: "Tubos con Vacio",
    section: "Laboratorio"
  },
  {
    id: 59,
    name: "Tubos lilas con EDTA K2",
    medidas: [
      { medida: "13×75 mm", carga: "4 mL", colorTapa: "lila", gradillaCaja: "100/1800" },
      { medida: "13×100 mm", carga: "5 mL", colorTapa: "lila", gradillaCaja: "100/1200" },
      { medida: "16×100 mm", carga: "9 mL", colorTapa: "lila", gradillaCaja: "100/1200" }
    ],
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/lyeifv2c6zfzdcvu7h74 ",
    description: "",
    category: "Tubos con Vacio",
    section: "Laboratorio"
  },
  {
    id: 60,
    name: "Tubos rojos de suero con acelerador",
    medidas: [
      { medida: "13×75 mm", carga: "4 mL", colorTapa: "rojo", gradillaCaja: "100/1800" },
      { medida: "13×100 mm", carga: "5 mL", colorTapa: "rojo", gradillaCaja: "100/1200" },
      { medida: "16×100 mm", carga: "9 mL", colorTapa: "rojo", gradillaCaja: "100/1200" }
    ],
    description: "",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/vvl4tng88iffqcqtbbsk ",
    category: "Tubos con Vacio",
    section: "Laboratorio"
  },
  {
    id: 61,
    name: "Tubos verdes con heparina",
    medidas: [
      { medida: "13×75 mm", carga: "4 mL", colorTapa: "verde", gradillaCaja: "100/1800" },
      { medida: "13×100 mm", carga: "5 mL", colorTapa: "verde", gradillaCaja: "100/1200" },
      { medida: "16×100 mm", carga: "9 mL", colorTapa: "verde", gradillaCaja: "100/1200" }
    ],
    description: "",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/xuwsgzugbtowvamj5lww ",
    category: "Tubos con Vacio",
    section: "Laboratorio"
  },
  {
    id: 62,
    name: "PetriLab",
    description: "",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/kkavvdzsgdphn6usttl2 ",
    category: "Placas de Petri",
    section: "Laboratorio"
  },
  {
    id: 63,
    name: "Descartadores de Aguja",
    description: "",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/yhet2pw0rleqcy6dbqm9 ",
    category: "Descartadores de Aguja",
    section: "Laboratorio"
  },
  {
    id: 64,
    name: "Recolectores de Orina",
    description: "125ml",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/o63uffjzk3t1pzxrbjvq ",
    category: "Recolectores de Orina",
    section: "Laboratorio"
  },
  {
    id: 65,
    name: "Pipetas Pasteur",
    description: "Estériles y No Estériles – 1 y 3 ml.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/zbdowdnrxpvkm9lembrq ",
    category: "Pipetas Pasteur",
    section: "Laboratorio"
  },
  {
    id: 66,
    name: "FlockSwab",
    description: "",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/fxifwfqqygifvlfttmih ",
    category: "Hisopos Nasofaríngeos",
    section: "Laboratorio"
  },
  {
    id: 67,
    name: "Analizador de Gases en Sangre OPTI* CCA-TS2",
    description: "El analizador de electrolitos y gases en sangre OPTI CCA-TS/TS2 utiliza la tecnología de fluorescencia óptica de OPTI Medical. Esta tecnología única y patentada no utiliza electrodos ni puntos de contacto, lo que elimina la necesidad de un costoso mantenimiento de los electrodos.",
    category: "Analizador De Gases En Sangre",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/tsxb2b596zbjlqetwpbe ",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725656372/Mosse/rfdbve7sqlvcef6vkaco",
    section: "Laboratorio"
  }

]

export const ProductsCovatec = [
  {
    name: "Heridas",
    descripcion: "La familia AQUACEL® incluye una gran variedad de apósitos para heridas — como por ejemplo AQUACEL® Ag+ Extra™, AQUACEL® Surgical, AQUACEL® Foam y AQUACEL® Foam Pro. Los apósitos AQUACEL® Ag+ son los nº1 apósitos antimicrobianos y antibiofilm en la actualidad. Combinan el poder de combatir la infección con plata iónica con las propiedades únicas de la Tecnología Hydrofiber®.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/gpjizkeqzvjb6ydpv1rd",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/pmdmhaclzvhojp4y5qd9",
    category: "",
    section: "Covatec"
  },
  {
    name: "Ostomías",
    descripcion: "La amplia gama de productos ConvaTec es cómoda, segura y las distintas opciones de bases protectoras permiten encontrar el sistema personalizado que funcione mejor con el tipo de ostomía y el estilo de vida de cada persona.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/znnwkhjj48xui9s3qukx",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/axdppwvdxd4utdwuzq67",
    category: "",
    section: "Covatec"
  },
  {
    name: "Incontinencia",
    descripcion: "Los productos ConvaTec han sido diseñados para ayudar a mejorar la situación de pacientes en el ámbito hospitalario, como así también domiciliario. Se ha demostrado que reduce las complicaciones y mejora la calidad de vida de quienes utilizan los productos para incontinencia.",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/xhblaawocjyddahai1uk",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/bhrfndar1ficdknjhlgm",
    category: "",
    section: "Covatec"
  }
]

export const ProductsMedicina = [
  {
    id: 1,
    name: "Oxímetro ChoiceMMed",
    description: "El oxímetro de pulso es utilizado para medir la saturación de oxígeno y la frecuencia del pulso a través del dedo. Adecuado para su uso en clínicas, geriátricas, academias antes y después de la actividad física, uso doméstico y profesionales de la salud.",
    category: "Oxímetros",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/urnkbktwe3ri4xvyyqlx",
    section: "Medicina-del-Hogar",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/izv4zcpbebvxtegg9rtn",
  },
  {
    id: 2,
    name: "Medidor de presión arterial HEM 7120 marca Omron",
    description: "Realiza lecturas de presión sistólica, presión diastólica y del pulso y alerta al usuario cuando se detecta hipertensión. Con su Detector de Latido Irregular, también alerta la presencia de latidos irregulares potencialmente peligrosos.",
    category: "Tensíometros Automaticos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/safnxyyb1uok065ugdso",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/xbriqgqweh1eisgxzmmc",
    section: "Medicina-del-Hogar"
  },
  {
    id: 3,
    name: "Medidor de presión arterial HEM 6122 marca Omron",
    description: "El Monitor de Muñeca es compacto, silencioso y cómodo. Posee un sensor de posición que ayuda a guiar la muñeca hasta el nivel del corazón para obtener mediciones más exactas. Operación simple y silenciosa, con el toque de un botón.",
    category: "Tensíometros Automaticos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/kaybibuzeohixd96mepk",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/u1rzbnflyg4otswtkbow",
    section: "Medicina-del-Hogar"
  },
  {
    id: 4,
    name: "Balanza electrónica Urbe II marca Systel",
    description: "Apta para clínicas, sanatorios, centros médicos, gimnasios y consultorios. Peso máximo 300 Kg., visores led de gran tamaño, resolución mínima 100 gr., altímetro de 1,08 a 2 mts., indicador digital en columna.",
    category: "Balanzas",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/rbmvn5ezmx0xr3hvscbi",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/zl9fcgkr56gqjsa0sb4k",
    section: "Medicina-del-Hogar"
  },
  {
    id: 5,
    name: "Balanza con altímetro marca Roma",
    description: "Sistema de fácil lectura a barra y cursores. Escala graduada grabada en relieve en acero inoxidable. Tratamiento anticorrosivo de superficies. Galvanizado electrolítico de componentes internos. Sistema de palancas oscilante. Dispositivo de traba de brazo. Asientos y cuchillas en acero con tratamiento térmico de extrema dureza y rectificado de precisión. Barra de deslizamiento de los cursores en acero revestidas de cromo duro.",
    category: "Balanzas",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/kaybibuzeohixd96mepk",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/u1rzbnflyg4otswtkbow",
    section: "Medicina-del-Hogar"
  },
  {
    id: 6,
    name: "Nebulizador marca Respirex",
    description: "Produce una fina niebla de partículas de entre 3 y 8 micrones generadas por ultrasonido. El tamaño de las partículas atomizadas permite que éstas lleguen hasta los alvéolos pulmonares, siendo recomendable su uso para afecciones respiratorias.",
    category: "Cuidados Críticos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/zmhop76hndxzezdfm53h",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/xsqkanomd6q7vqbumlyt",
    section: "Medicina-del-Hogar"
  },
  {
    id: 7,
    name: "Aspirador de secreciones marca Ecam",
    description: "Motor blindado: protege al equipo contra salpicaduras y derrames de sustancias líquidas que puedan afectar al motor. El reemplazo o limpieza de las válvulas (de aspiración y compresión), puede ser realizado por el usuario sin necesidad de recurrir a un servicio técnico. Las válvulas son de caucho, lo que facilita su limpieza.",
    category: "Cuidados Críticos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/fvm70kjx7mvrcz8amgba",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/ezerb3cfodpmoallkw2m",
    section: "Medicina-del-Hogar"
  },
  {
    id: 8,
    name: "Cama ortopédica marca Medsa",
    description: "Cama ortopédica manual standard. Fabricada totalmente en acero con terminación en pintura epoxi color Gris esmaltado. Cabecera y piecera desmontables revestidas con melamina. Cuenta con cuatro planos de tres articulaciones, los movimientos son regulables a manivela. Lecho rígido apto para masajes cardíacos. ",
    category: "Cuidados Críticos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/dlrkrgrw093nxemm88u3",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/hvid3wenj2y5oemupl5j",
    section: "Medicina-del-Hogar"
  },
  {
    id: 9,
    name: "Colchón antiescaras DOMUS I marca Silfab",
    description: "El colchón antiescaras infla y desinfla alternadamente sus celdas de aire con intervalos aproximados de 10 minutos, evitando así, la presión constante en un solo lugar para evitar la formación de escaras. Todo el proceso es 100% automatizado, lo cual hace innecesaria la rotación constante del paciente. ",
    category: "Cuidados Críticos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/fwzk7ncnb3hjscylwexo",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/fridpkksmkrvkywqrjsu",
    section: "Medicina-del-Hogar"
  },
  {
    id: 10,
    name: "Silla de ruedas S3010/41 marca Silfab",
    description: "Pedanas y apoyabrazos fijos. Ruedas de goma maciza. Bolsillo incluido en el respaldo. ",
    category: "Cuidados Críticos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/mpwemvy53qbxyyqusayo",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/gfff6diiqlpvx5hyrasn",
    section: "Medicina-del-Hogar"
  },
  {
    id: 11,
    name: "Silla de ruedas S3014/41 marca Silfab",
    description: "Cromada, con pedanas rebatibles y desmontables. Apoyabrazos desmontables, tipo escritorio. Ruedas de goma maciza. Bolsillo incluido en el respaldo. Ancho del asiento: 41 cm Peso máximo soportado: 100 kg. ",
    category: "Cuidados Críticos",
    imgUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/tc3kvs1fooedenqxrqvt",
    pdfUrl: "https://res.cloudinary.com/dahzwzj1v/image/upload/v1725827882/Mosse/tc3kvs1fooedenqxrqvt",
    section: "Medicina-del-Hogar"
  },
]


