<template>
      <v-carousel  show-arrows-on-hover hide-delimiters interval="3000">

        <v-carousel-item
          :src="require('@/assets/img/devfest/sliders/slider1.png')"
          transition="transition"
          reverse-transition="reverseTransition"
          
        >
        </v-carousel-item>

        <v-carousel-item
          :src="require('@/assets/img/homeSliders/slider3.png')"
          transition="transition"
          reverse-transition="reverseTransition"
          
        >
        </v-carousel-item>

        <v-carousel-item
          :src="require('@/assets/img/homeSliders/slider4.jpg')"
          transition="transition"
          reverse-transition="reverseTransition"
          
        >
        </v-carousel-item>
      </v-carousel>
</template>

<script>

export default {
    data() {
        return {

        }
    }
}
</script>
