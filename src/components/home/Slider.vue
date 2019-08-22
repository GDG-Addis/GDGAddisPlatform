<template>
      <v-carousel hide-controls  show-arrows-on-hover>
        <v-carousel-item
          :src="require('@/assets/img/homeSliders/slider2.png')"
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
