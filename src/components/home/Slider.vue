<template>
  <v-layout style="background-color:#424242;">
    <v-layout wrap align-center justify-center row style="background-color:#444444;">
      <v-carousel
        width="100%"
        height="100%"
        show-arrows-on-hover
        hide-delimiters
        interval="2500"
        tile
        transition="transition"
      >
        <v-flex>
          <v-carousel-item v-for="(img, i) in images" :key="i">
            <img :src="img" :lazy-src="img" width="100%" height="100%" />
          </v-carousel-item>
        </v-flex>
      </v-carousel>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/img/devfest/sliders/slider1.png"),
        require("@/assets/img/homeSliders/slider3.png"),
        require("@/assets/img/homeSliders/slider4.jpg")
      ]
    };
  }
};
</script>
