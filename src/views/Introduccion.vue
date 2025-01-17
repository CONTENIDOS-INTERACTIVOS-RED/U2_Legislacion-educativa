<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5


    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4
	  
        .row.mb-4
          .col-12.col-xl-7(data-aos="fade-up")
            .bg-azul.p-4
              span En esta unidad, se llevará a cabo un recorrido por la evolución histórica del sistema jurídico colombiano, centrado en la educación. Este tema no solo es fundamental para entender cómo se ha construido el sistema educativo en Colombia, sino que también es clave para comprender su impacto directo en los niños, especialmente en la educación inicial y preescolar. A medida que se exploran las leyes y decretos que han dado forma a la educación, se podrán identificar los elementos cruciales que regulan este sistema y cómo han logrado, a través de los años, crear ambientes educativos más inclusivos y equitativos.
          .col-5.d-none.d-xl-block(data-aos="fade-left")
            img(src="@/assets/curso/unidad/img-1.png")
        
        p.text-bold.mb-4 Los temas que se desarrollarán en esta unidad, son:

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-2.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Primero
              p.px-1.text-small.mb-0.d-flex.text-center Servicio público educativo y su función social. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Segundo
              p.px-1.text-small.mb-0.d-flex.text-center Modalidades de atención educativa a poblaciones.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Tercero
              p.px-1.text-small.mb-0.d-flex.text-center Organización para la prestación del servicio educativo. 
          
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src="@/assets/curso/unidad/img-5.png")
      .col-12.col-xl-7(data-aos="fade-up")
        .bg-azul.p-4.mb-4
          span El propósito de esta unidad es, que se logren reconocer las modalidades de atención en la educación inicial, los objetivos y generalidades de la educación básica, media y superior en Colombia, en virtud de las normas aplicables a la materia. Los temas que se abordarán incluyen: servicio público educativo y su función social, modalidades de atención educativa a poblaciones, y organización para la prestación del servicio educativo. Cada uno de estos aspectos, brindará una visión más profunda sobre cómo las políticas educativas afectan no solo la estructura educativa del país, sino también las posibilidades de aprendizaje de los niños, en diversos contextos.
        span A lo largo de esta unidad, se incentiva la reflexión sobre cómo las leyes educativas pueden transformar la vida de los niños, creando oportunidades para que todos puedan acceder a una educación de calidad. 
    
    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-6.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Además, se fomentará el análisis y la aplicación práctica de los conocimientos adquiridos, buscando generar propuestas pedagógicas que favorezcan el desarrollo del lenguaje, el pensamiento y la comunicación, desde tempranas edades.

    p.mb-4 El compromiso y la participación activa en las actividades de esta unidad, son fundamentales, pues lo que se aprende no se queda solo en el aula, sino que tiene aplicaciones reales en la construcción de un sistema educativo más justo y equitativo para todos.

    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
