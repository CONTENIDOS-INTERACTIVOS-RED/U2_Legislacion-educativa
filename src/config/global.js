export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad:
      'Evolución histórica del sistema jurídico colombiano, enfocado a la educación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicio público educativo y su función social',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios rectores del servicio educativo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Derechos fundamentales ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modalidades de atención educativa a poblaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Educación inclusiva y accesibilidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelos de atención rural',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Educación para personas con discapacidad',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Educación para comunidades indígenas y afrodescendientes',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Organización para la prestación del servicio educativo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Senlle, A. (2006). Calidad en los servicios educativos: ( ed.). Ediciones Díaz de Santos.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/53096',
    },
    {
      referencia:
        'Congreso de Colombia. (1994). Ley 115 de 1994, Ley General de Educación.',
      link: 'https://www.mineducacion.gov.co',
    },
    {
      referencia: 'Constitución Política de Colombia. (1991). Artículo 67.',
      link: 'https://constitucioncolombia.com/titulo-2/capitulo-2/articulo-67',
    },
    {
      referencia:
        'Cortés Rodas, Francisco. (2012). El derecho a la educación como derecho social fundamental en sus tres dimensiones: educación primaria, secundaria y superior. Estudios Socio-Jurídicos, 14(2), 185-205.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-05792012000200007&lng=en&tlng=es',
    },
    {
      referencia:
        'Decreto 1075 de 2015. (2015). Decreto Único Reglamentario del Sector Educación.',
      link:
        'https://www.mineducacion.gov.co/portal/normativa/Decretos/351080:Decreto-No-1075-del-26-de-mayo-de-2015',
    },
    {
      referencia:
        'Decreto 1860 de 1994. (1994). Reglamento General de la Ley General de Educación.',
      link: null,
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). Políticas y programas educativos.',
      link:
        'https://www.mineducacion.gov.co/portal/salaprensa/Comunicados/411101:El-Ministerio-de-Educacion-presenta-la-Politica-Publica-de-Recursos-Educativos-Mas-y-Mejores-Aprendizajes',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO). (2015). Objetivos de Desarrollo Sostenible: ODS 4.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000252423',
    },
    {
      referencia:
        'Navarrete Cazales, Z. (Coord.). (2022). Inclusión en educación: (1 ed.). Plaza y Valdés (México).',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/225041',
    },
    {
      referencia:
        'Acosta Valdeleón, W. Ángel Pardo, N. C. & Pérez Pérez, T. (2020). Liderazgo en la educación rural con enfoque territorial: (1 ed.). Universidad de La Salle - Ediciones Unisalle.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/215702',
    },
    {
      referencia:
        'Convención sobre los Derechos de las Personas con Discapacidad, Naciones Unidas. (2006). Convención sobre los derechos de las personas con discapacidad.',
      link: 'https://www.un.org/disabilities',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (2020). Informe sobre la distribución de la población rural en Colombia.',
      link: 'https://www.dane.gov.co',
    },
    {
      referencia:
        'Decreto 1421 de 2017. (2017). Por el cual se crea el Sistema de Atención Integral para la Inclusión de Estudiantes con Discapacidad.',
      link: 'https://www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ley 70 de 1993. (1993). Ley que regula los derechos de las comunidades afrocolombianas.',
      link: 'https://www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ley 1618 de 2013. (2013). Por la cual se dictan disposiciones para garantizar los derechos de las personas con discapacidad en Colombia.',
      link: 'https://www.mineducacion.gov.co',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (MEN). (2019). Lineamientos de educación flexibles y a distancia para zonas rurales.',
      link: 'https://www.mineducacion.gov.co',
    },
    {
      referencia:
        'Temesio Vizoso, S. (2016). Educación inclusiva: Retos y oportunidades.',
      link: 'https://revistas.um.es/red/article/view/275211',
    },
    {
      referencia:
        'UNESCO. (2009). Política y práctica de la educación inclusiva.',
      link: 'https://www.unesco.org',
    },
    {
      referencia: 'UNESCO. (2014). Lucha contra la exclusión.',
      link:
        'http://www.unesco.org/new/es/education/themes/strengthening-education-systems/inclusive-education/',
    },
    {
      referencia:
        'Izcue Ancín, J. J. (2020). El sistema educativo "duerme" por inmovilidad pedagógica: innovación educativa. Hacia inteligencias más diferenciadas creativas e integrales: ( ed.). Narcea Ediciones.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/176543',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2018). Política educativa y normativa del sector educativo en Colombia.',
      link: 'https://www.mineducacion.gov.co',
    },
    {
      referencia:
        'UNESCO. (2020). Informe sobre el estado de la educación en América Latina y el Caribe.',
      link: 'https://www.unesco.org',
    },
  ],
  glosario: [
    {
      termino: 'Decreto 1075 de 2015',
      significado:
        'Decreto reglamentario que establece las normas generales del sector educativo en Colombia, regulando aspectos como la organización institucional, el currículo, la evaluación y la promoción.',
    },
    {
      termino: 'Derecho a la educación',
      significado:
        'Es el derecho fundamental de todas las personas a recibir una educación de calidad, sin discriminación y con garantías de acceso, permanencia y culminación en el sistema educativo.',
    },
    {
      termino: 'Descentralización educativa',
      significado:
        'Proceso mediante el cual el estado transfiere competencias y responsabilidades a entidades territoriales (como departamentos y municipios) para gestionar el sistema educativo, permitiendo una mayor autonomía.',
    },
    {
      termino: 'Educación básica',
      significado:
        'Es el nivel educativo que comprende la educación preescolar y la educación primaria, obligatorio en colombia para todos los niños entre 3 y 14 años de edad.',
    },
    {
      termino: 'Educación especial',
      significado:
        'Modalidad educativa dirigida a estudiantes con discapacidades físicas, mentales o sensoriales, con el fin de proporcionarles un entorno adecuado que facilite su aprendizaje y desarrollo.',
    },
    {
      termino: 'Educación inclusiva',
      significado:
        'Enfoque educativo que busca la participación plena de todos los estudiantes, independientemente de sus capacidades, necesidades o contexto social, en el sistema educativo regular.',
    },
    {
      termino: 'Evaluación educativa',
      significado:
        'Proceso mediante el cual se mide el aprendizaje y el desempeño de los estudiantes, con el fin de verificar si se han alcanzado los objetivos educativos establecidos.',
    },
    {
      termino: 'Función social de la educación',
      significado:
        'Se refiere al papel transformador que cumple la educación en la sociedad, promoviendo la equidad, el respeto, la integración social y el desarrollo cultural.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Proceso que asegura que todos los estudiantes, independientemente de sus diferencias, como discapacidad o origen socioeconómico, tengan las mismas oportunidades de aprender en un ambiente educativo compartido.',
    },
    {
      termino: 'Modalidades de atención educativa',
      significado:
        'Son las diferentes formas en que se presta la educación para atender a la diversidad de estudiantes, tales como la educación especial, inclusiva y flexible, adaptadas a las necesidades de cada población.',
    },
    {
      termino: 'Servicio público educativo',
      significado:
        'Es el derecho garantizado por el estado que asegura el acceso a la educación de calidad para todos los ciudadanos, siendo una responsabilidad social y estatal.',
    },
    {
      termino: 'Sistema educativo colombiano',
      significado:
        'Conjunto de instituciones, normas y políticas que conforman la estructura educativa en colombia, desde la educación inicial hasta la superior, con el fin de garantizar el acceso a una educación de calidad.',
    },
    {
      termino: 'Ley General de Educación (Ley 115 de 1994)',
      significado:
        'Norma que regula el sistema educativo colombiano, estableciendo los principios, objetivos y modalidades de la educación básica, media y superior.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
