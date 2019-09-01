<template>
  <v-container class="m5">
    <v-layout row wrap>
      <v-flex xs12 md6 lg1>
        <v-btn outline block color="primary">1</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block color="primary">2</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block color="primary">2</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outline block color="primary">2</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-center>
      <v-flex xs4 md3>
        <v-btn outline block color="success">2</v-btn>
      </v-flex>
      <v-flex xs4 md3>
        <v-btn outline block color="success">2</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
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