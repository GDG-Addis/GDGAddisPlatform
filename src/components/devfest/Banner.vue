<template>
  <v-carousel width="100%" show-arrows-on-hover hide-delimiters interval="3000"  tile transition="transition" fill-height>
    <v-carousel-item
      v-for="(slider,k) in sliders"
      :key="k"
      :src="require(`@/assets/img/devfest/sliders/${slider.url}`)"

    ></v-carousel-item>
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