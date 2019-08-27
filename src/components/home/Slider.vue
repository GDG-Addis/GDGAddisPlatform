<template>
  <v-carousel show-arrows-on-hover hide-delimiters interval="3000">
    <v-flex v-for="(img, i) in images" :key="i">
    <v-carousel-item
      :src="img"
      :lazy-src="img"
      transition="transition"
      reverse-transition="reverseTransition"
    ></v-carousel-item>
    </v-flex>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images:[
        require('@/assets/img/devfest/sliders/slider1.png'),
        require('@/assets/img/homeSliders/slider3.png'),
        require('@/assets/img/homeSliders/slider4.jpg')
      ]
    };
  }
};
</script>
