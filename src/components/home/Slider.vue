<template>
      <v-carousel
        show-arrows-on-hover
        hide-delimiters
        interval="2500"
        tile
        transition="transition"
        class="pa-0"
        height="100%"
      >
        <v-flex>
          <v-carousel-item v-for="(img, i) in images" :key="i" width="100%">
            <v-img :src="img" :lazy-src="img" height="100%" />
          </v-carousel-item>
        </v-flex>
      </v-carousel>
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
