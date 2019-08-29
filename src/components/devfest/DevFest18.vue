<template>
  <v-layout style="height=100%;width=100%;background-color:#424242;">
    <v-layout
      wrap
      align-center
      justify-center
      row
      style="height=100%;width=100%;background-color:#444444;"
    >
      <v-carousel
        width="100%"
        height="100%"
        show-arrows-on-hover
        hide-delimiters
        interval="2500"
        tile
        transition="transition"
        fill-height
      >
        <v-carousel-item
          v-for="(slider,k) in sliders"
          :key="k"
          :src="require(`@/assets/img/devfest/sliders/${slider.url}`)"
        ></v-carousel-item>
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