<template>
      <v-carousel
        height="100%"
        show-arrows-on-hover
        hide-delimiters
        interval="2500"
        tile
        transition="transition"
      >
        <v-carousel-item v-for="(slider,k) in sliders" :key="k">
          <v-img
            :src="require(`@/assets/img/devfest/sliders/${slider.url}`)"
            height="100%"
          />
        </v-carousel-item>
      </v-carousel>
</template>

<script>
import SliderData from "@/assets/data/devfest/slider.json";
export default {
  data() {
    return {
      sliders: SliderData
    };
  }
};
</script>