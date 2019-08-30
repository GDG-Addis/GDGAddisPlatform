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
        <v-carousel-item v-for="(slider,k) in sliders" :key="k">
          <img
            :src="require(`@/assets/img/devfest/sliders/${slider.url}`)"
            width="100%"
            height="100%"
          />
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-layout>
</template>

<script>
import SliderData from "@/assets/data/devfest/sliderDevFest18.json";
export default {
  data() {
    return {
      sliders: SliderData
    };
  }
};
</script>