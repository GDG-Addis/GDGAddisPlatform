<template>
  <v-carousel  hide-delimiters interval="3000" tile transition="transition" show-arrows-on-hover fill-height>
    <v-flex >
    <v-carousel-item
    v-for="(img, i) in images" :key="i"
      :src="img"
      :lazy-src="img"
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
