<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Constitución Política de Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8
        .bg-azul.p-4.mb-4(data-aos="fade-up")
          span La educación, más que un proceso de transmisión de conocimientos, es un derecho fundamental y un motor para el desarrollo de una sociedad equitativa. Como servicio público esencial, la educación debe garantizarse con criterios de universalidad, accesibilidad y calidad. Su función social trasciende las aulas, impactando directamente en la construcción de ciudadanía, el fortalecimiento de valores democráticos y la promoción del bienestar colectivo.
        span En esta sección, explicaremos cómo el servicio público educativo ha evolucionado en Colombia, los principios que lo rigen y su relación con las necesidades y aspiraciones de la sociedad. Se reflexionará sobre preguntas claves como: 
      .d-none.d-xl-block.col-xl-4
        img(src="@/assets/curso/unidad/img-7.png" alt="Texto que describa la imagen")

    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
          .d-flex.flex-column
            p.px-1.text-small.mb-0.d-flex ¿De qué manera el marco jurídico colombiano regula y garantiza el acceso a la educación como servicio público?
      .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0(data-aos="fade-left")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-9.svg', style="width: 80px")
          .d-flex.flex-column
            p.px-1.text-small.mb-0.d-flex ¿Cómo contribuye la educación a cerrar brechas sociales y construir una sociedad más justa?

    p.mb-4 Este estudio no solo le permitirá comprender el rol del servicio educativo en el sistema jurídico, sino que también le invitará a analizar su impacto transformador en los contextos históricos y contemporáneos de nuestro país.

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Definición del servicio público educativo
          p.mb-5 La comprensión del concepto de servicio público educativo es fundamental para quienes se forman en el ámbito jurídico y social, ya que implica reconocer la educación como un derecho que el Estado debe garantizar con criterios de universalidad, equidad y calidad. En el PDF Definición del servicio público educativo, se ofrece un análisis detallado del marco normativo y los principios que sustentan la prestación de este servicio en Colombia, con énfasis en su carácter como derecho fundamental y función social. A través de este documento, se invita a reflexionar sobre las implicaciones prácticas de las políticas educativas, la responsabilidad estatal en su implementación y los desafíos persistentes para garantizar una educación inclusiva y transformadora en el contexto colombiano.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Definición del servicio público educativo.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Definición del servicio público educativo.
             
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1  
        h2 Principios rectores del servicio educativo

    p.mb-4 El servicio educativo, además de ser una herramienta esencial para garantizar el derecho a la educación, está fundamentado en una serie de principios rectores que orientan su desarrollo, implementación y evaluación. Estos principios no solo definen las características que deben guiar la educación en Colombia, sino que también constituyen un marco ético y normativo, para que esta cumpla su función social de manera efectiva:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold El principio de universalidad
              p Establece que la educación debe estar al alcance de toda la población, sin importar su condición social, económica, cultural o geográfica. Este principio responde al mandato constitucional del Artículo 67, que consagra la educación como un derecho fundamental y un servicio público. En otras palabras, ninguna persona debe quedar excluida del sistema educativo por razones de origen, género, discapacidad o cualquier otra forma de discriminación (Constitución Política de Colombia, 1991).<br>En este sentido, las políticas educativas deben asegurar que las instituciones educativas lleguen a los lugares más remotos y atiendan las necesidades de las poblaciones vulnerables. Programas como "Todos a Aprender" del Ministerio de Educación Nacional, son ejemplos de cómo se puede promover este principio en el contexto colombiano.

          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold El principio de equidad
              p Se refiere a la necesidad de crear condiciones justas para que todas las personas accedan a una educación de calidad, sin importar sus diferencias individuales o contextuales. Esto implica reconocer que no todos los estudiantes tienen las mismas oportunidades iniciales y, por lo tanto, el sistema educativo debe ofrecer apoyos específicos para nivelar estas desigualdades.<br>Por ejemplo, en el marco de la Ley General de Educación (Ley 115 de 1994), se promueven estrategias de educación inclusiva que buscan atender las necesidades de estudiantes con discapacidad, grupos étnicos y poblaciones desplazadas. Reflexionar sobre este principio invita a preguntarse: ¿cómo puede cada institución educativa contribuir a garantizar un acceso equitativo para todos sus estudiantes?

          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold El principio de calidad
              p Establece que la educación debe cumplir con estándares que garanticen no solo la adquisición de conocimientos, sino también el desarrollo integral de las personas. Esto implica que el servicio educativo debe ser pertinente, relevante y capaz de responder a las demandas sociales, culturales y económicas del entorno.<br>En el caso colombiano, la calidad educativa está regulada por el Sistema Nacional de Evaluación, establecido en el Decreto 1075 del 2015. Este sistema incluye procesos como la evaluación de aprendizajes, la formación de docentes y la mejora de las instituciones educativas. Es importante reflexionar sobre cómo la calidad educativa no se mide únicamente por los resultados académicos, sino también por su capacidad para transformar vidas y comunidades.

          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold El principio de participación
              p Resalta la corresponsabilidad en la educación. La Constitución Política de Colombia, en su Artículo 67, enfatiza que la educación es un proceso que involucra al Estado, la familia y la sociedad. Este principio reconoce que todos los actores tienen un rol activo en la construcción de un sistema educativo sólido y sostenible.<br>Un ejemplo de este principio se observa en los Consejos Directivos y Asociaciones de Padres de Familia, que permiten que las comunidades educativas participen en la toma de decisiones de sus instituciones. Reflexionar sobre este punto lleva a preguntarse: ¿cómo se pueden fortalecer los canales de participación para que las voces de las comunidades sean realmente escuchadas?

          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold El principio de flexibilidad
              p Destaca que el sistema educativo debe ser capaz de adaptarse a las particularidades de los estudiantes y las comunidades. Esto implica ofrecer modalidades y estrategias de enseñanza que se ajusten a las condiciones específicas de cada contexto.<br>Por ejemplo, el Decreto 1860 de 1994, reglamentario de la Ley General de Educación, establece que los Proyectos Educativos Institucionales (PEI) deben responder a las características de la comunidad en la que se desarrolla la institución educativa. Este principio invita a reflexionar sobre cómo se pueden diseñar currículos y metodologías que realmente dialoguen con las necesidades y expectativas locales.

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-azul.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-16.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0      Los principios rectores del servicio educativo, no son simplemente declaraciones normativas, son guías prácticas para construir un sistema educativo que sea accesible, inclusivo, transformador y adaptable. Reflexionar sobre estos principios implica asumir un compromiso ético con la mejora continua de la educación, no solo como un derecho, sino como un motor de cambio social.
        p.mb-0 En este contexto, se invita a considerar cómo estos principios se están implementando en las instituciones educativas cercanas. ¿Qué desafíos persisten y qué estrategias podrían adoptarse para hacerlos más efectivos? Este ejercicio crítico es fundamental para garantizar que la educación en Colombia sea realmente un pilar para el desarrollo sostenible y la equidad social.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')  

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2  
        h2 Ley 115 de 1994 y su impacto

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 Para comprender el sistema educativo colombiano, es fundamental explorar la Ley 115 de 1994, conocida como la Ley General de Educación. Este marco normativo regula el servicio educativo en el país y define sus objetivos, principios y lineamientos generales. La Ley 115 es una herramienta clave para garantizar el derecho a la educación, fortalecer la calidad del sistema educativo y promover la inclusión y la equidad. Analizar su impacto permite reflexionar sobre cómo las políticas públicas pueden transformar las realidades educativas en diferentes contextos.
        p.mb-4 La Ley General de Educación surge en un momento histórico marcado por la necesidad de estructurar un sistema educativo coherente con los principios de la Constitución Política de 1991, que consagra la educación como un derecho fundamental y un servicio público. Su promulgación responde a los retos de construir una educación accesible, equitativa y de calidad para todos los colombianos (Constitución Política de Colombia, 1991, Art. 67).
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-19.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0 El propósito principal de esta Ley es el de establecer un marco integral que oriente la organización, administración y prestación del servicio educativo en sus diferentes niveles, desde la educación inicial hasta la educación superior.

    p.mb-4 Además, reconoce la diversidad cultural, social y geográfica del país, estableciendo lineamientos para adaptarse a las necesidades específicas de cada región.

    p.text-bold.mb-4 Principales Aportes de la Ley 115 de 1994:

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="18%" y="63%" numero="+")
        .h5.mb-2 Organización del sistema educativo
        p La Ley 115 estructura el sistema educativo en niveles y ciclos, facilitando una transición organizada entre etapas como la educación inicial, básica, media y superior. Esto permite que el estudiante reciba una formación progresiva y coherente. También define modalidades como la educación formal, no formal e informal, brindando flexibilidad para atender diferentes necesidades educativas (Ley 115 de 1994, Art. 10).
      .tarjeta.bg-white.p-4(x="36%" y="21%" numero="+")
        .h5.mb-2 Currículo y contenidos
        p Uno de los aportes más significativos es la autonomía curricular, que permite a las instituciones educativas diseñar su Proyecto Educativo Institucional (PEI) en función de las características y necesidades de sus comunidades (Ley 115 de 1994, Art. 73). Esta autonomía fomenta una educación contextualizada y pertinente, aunque plantea desafíos en términos de mantener estándares nacionales de calidad.
      .tarjeta.bg-white.p-4(x="63%" y="21%" numero="+")
        .h5.mb-2 Inclusión y equidad 
        p La Ley establece que la educación debe promover la igualdad de oportunidades, especialmente para las poblaciones vulnerables. Este enfoque incluye medidas específicas para garantizar la atención educativa de comunidades indígenas, afrodescendientes, rurales y personas con discapacidad (Ley 115 de 1994, Art. 14).
      .tarjeta.bg-white.p-4(x="81%" y="63%" numero="+")
        .h5.mb-2 Formación integral
        p La Ley 115 concibe la educación como un proceso integral, orientado no solo al desarrollo cognitivo, sino también al fortalecimiento de valores, actitudes y competencias ciudadanas. Esto se refleja en el énfasis en áreas como la educación ética, artística y ambiental, elementos esenciales para formar ciudadanos comprometidos con el bienestar social y el desarrollo sostenible.


    p.mb-4 El impacto de esta Ley puede observarse en varios aspectos del sistema educativo. Por ejemplo, ha permitido una mayor articulación entre los diferentes niveles educativos, facilitando la continuidad en la formación de los estudiantes. Asimismo, ha fomentado la descentralización, otorgando mayor autonomía a las entidades territoriales para gestionar la educación, de acuerdo con sus contextos locales.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-azul.p-4.mb-4(data-aos="fade-up")
          span Es importante reflexionar sobre los desafíos que persisten. Aunque la Ley 115 establece principios claros, su implementación ha enfrentado dificultades relacionadas con la inequidad en la asignación de recursos, las disparidades regionales y las barreras para garantizar la inclusión efectiva.
        .bg-gris.p-4.mb-4(data-aos="fade-up")
          span Esto invita a preguntarse: ¿cómo puede el sistema educativo colombiano fortalecer la aplicación de esta normativa para que sus beneficios lleguen a todos los sectores de la población?
        span La Ley 115 de 1994 ha sido un pilar fundamental para estructurar el sistema educativo colombiano y garantizar su alineación con los principios constitucionales. Sin embargo, su impacto no solo depende del texto legal, sino también de la voluntad política, la gestión institucional y la participación activa de todos los actores educativos.

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-22.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Se invita a reflexionar sobre cómo los principios y lineamientos de esta Ley, pueden ser utilizados para promover una educación más inclusiva y equitativa en el futuro. ¿Qué papel desempeña el docente, el estudiante o un miembro de la comunidad educativa para hacer realidad los objetivos de la Ley 115?   

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/123287") Barrero J. (2015) Entre la esperanza y el temor: análisis descriptivo de la elaboración de la Declaración Universal de los Derechos Humanos por la Comisión de Derechos Humanos de las Naciones Unidas, 1946-1948. Editorial Pontificia Universidad Javeriana [Libro]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/68946") Chavarro J. (2018). Constitución política de Colombia (3a. ed.) Grupo Editorial Nueva Legislación SAS [Libro]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-05792012000200007&lng=en&tlng=es") Cortés Rodas, Francisco. (2012). El derecho a la educación como derecho social fundamental en sus tres dimensiones: educación primaria, secundaria y superior. Estudios Socio-Jurídicos [Artículo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=KJjFlByiY_Y") Senado Colombia (14 septiembre 2018). Educación: Derecho Fundamental [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/live/rTshZ0a9cAA?si=FE6xGwTEWvelOdDD") Universidad del Rosario. Ley 115 de 1994 y su impacto (15 agosto 2024). A 30 AÑOS DE LA EXPEDICIÓN DE LA LEY 115 DE 1994 ¿QUÉ HA PASADO CON LA DEMOCRACIA EN LA ESCUELA? [Vídeo]

          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
