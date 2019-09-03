<template>
  <v-container>
           
    <v-layout row wrap>
      <v-flex xs4 md2>
        <v-img
          :src="require(`@/assets/img/devfest/sliders/slider1.png`)"
          height="100%"
          width="100%"
        ></v-img>
      </v-flex>

      <v-flex xs4 md2 >
        <v-img
          :src="require(`@/assets/img/devfest/sliders/slider2.png`)"
          height="100%"
          width="100%"
           
        ></v-img>
      </v-flex>
    </v-layout>

    <v-layout justify-end>
      <v-flex xs4 md2>
        <v-img
          :src="require(`@/assets/img/devfest/sliders/slider3.png`)"
          height="100%"
          width="100%"
        ></v-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-layout column wrap>
        <v-flex xs4 md2>
          <v-img
            :src="require(`@/assets/img/devfest/sliders/slider4.png`)"
            height="100%"
            width="100%"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs4 md2>
        
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