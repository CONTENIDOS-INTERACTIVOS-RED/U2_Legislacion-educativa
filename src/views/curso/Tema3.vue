<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Organización para la prestación del servicio educativo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-12.col-xl-8
        .bg-gris.p-4(data-aos="fade-up")
          span A continuación, se iniciará el estudio de la organización para la prestación del servicio educativo, un tema clave para comprender cómo el sistema educativo colombiano está estructurado para garantizar el acceso y la calidad educativa; se abordarán los actores, las entidades y los procesos encargados de ofrecer educación a nivel nacional, así como la importancia de la coordinación y el control para asegurar una educación equitativa y de calidad para todos. 
      .col-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

    .row.bg-gris.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Organización para la prestación del servicio educativo 
          p.mb-5 La organización del sistema educativo es clave para garantizar el acceso equitativo y la calidad del servicio educativo en un país con características tan diversas como Colombia. En el PDF Organización para la prestación del servicio educativo, se analiza en detalle la estructura organizacional del sistema educativo colombiano, resaltando las funciones del Ministerio de Educación Nacional, las secretarías departamentales y municipales, y las instituciones educativas, así como los modelos de gestión que se implementan para optimizar el servicio educativo. Este documento también invita a reflexionar sobre los desafíos y oportunidades que surgen de la centralización, la descentralización y la participación comunitaria en la gestión educativa, destacando la importancia de la planificación y el uso eficiente de los recursos para asegurar una educación inclusiva y de calidad en todo el territorio nacional.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Organización para la prestación del servicio educativo.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Organización para la prestación del servicio educativo.

    .bg-full-width.mb-5.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revistahorizontes.org/index.php/revistahorizontes/article/view/840") Albornoz, V. C., Contreras, C. D. Á., & Moreano, H. C. (2023). Diseño de la infraestructura en la prestación del servicio educativo de las instituciones educativas públicas. Horizontes. Revista de Investigación en Ciencias de la Educación [Artículo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://books.google.com.mx/books?hl=es&lr=&id=ykVyKAP7XBUC") Quiñones, J. M. R. (2006). Gestión educativa en la sociedad del conocimiento. Coop. Editorial Magisterio [Libro]

          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Evolución histórica del sistema jurídico colombiano, enfocado a la educación. Servicio público educativo y su función social',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo del servicio público educativo en Colombia según la Constitución?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorecer únicamente a las clases altas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar el acceso y calidad educativa para todos los ciudadanos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Restringir el acceso a la educación superior',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fomentar la educación privada',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué modalidades de atención educativa están presentes en Colombia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo educación en áreas rurales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Educación para menores de 15 años',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modalidades inclusivas, interculturales y bilingües',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Solo educación técnica', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué ley regula las condiciones para las instituciones educativas en Colombia?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 115 de 1994', esCorrecta: true },
            { id: 'b', texto: 'Ley 1620 de 2013', esCorrecta: false },
            { id: 'c', texto: 'Ley 1098 de 2006', esCorrecta: false },
            { id: 'd', texto: 'Ley 1421 de 2017', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la finalidad de la organización educativa en Colombia según la ley?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrecer programas educativos gratuitos para todos los ciudadanos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer un sistema educativo basado en la competitividad',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Proveer educación de calidad con principios democráticos e inclusivos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar el acceso a la educación a ciertos sectores',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué ley promueve el derecho de los niños y adolescentes a la educación?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 115 de 1994', esCorrecta: false },
            { id: 'b', texto: 'Ley 1098 de 2006', esCorrecta: true },
            { id: 'c', texto: 'Ley 1620 de 2013', esCorrecta: false },
            { id: 'd', texto: 'Ley 1421 de 2017', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
