<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs4 md2>
        <v-btn outline block color="primary">1</v-btn>
      </v-flex>

      <v-flex xs4 md2>
        <v-btn outline block color="primary">11</v-btn>
      </v-flex>
    </v-layout>

    <v-layout justify-end>
      <v-flex xs4 md2>
        <v-btn outline block color="primary">12</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-layout column wrap>
        <v-flex xs4 md2>
          <v-btn outline block color="primary">3</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
    
<v-layout row wrap>
     <v-flex xs4 md2>
        <v-btn outline block color="primary">2</v-btn>
      </v-flex>
</v-layout>
    <v-layout row wrap>
      <v-layout column wrap>
        <v-flex xs4 md2>
          <v-btn outline block color="primary">8</v-btn>
        </v-flex>
      </v-layout>
      <v-flex xs4 md2>
        <v-btn outline block color="primary">9</v-btn>
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