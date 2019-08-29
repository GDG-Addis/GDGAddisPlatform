<template>
  <v-container class="pa-4 my-0">
    <v-layout
      wrap
      align-center
      justify-center
      row
      fill-height
      class="mt-2"
      style="height=100%;width=100%;background-color:#e5433b;border-radius:10px;"
    >

      <v-flex xs12 sm4 md2 lg2 class="pa-4"></v-flex>
      <v-flex xs12 sm8 md10 lg10 class="pa-2 py-4 px-3">
      
        <span class="google-font mt-1 display-1" style="font-size:240%;color:white;">
          Venue Is Being Prepared
          <v-icon style="font-size:120%;color:white;">mdi-ruler-square-compass</v-icon>
        </span>
        <p
          class="google-font mt-1 font-weight-thin"
          style="color:white;"
        >Till then, take a tour in the website, and DON'T forget to book your ticket for #DevFest19</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      ChapterDetails: ChapterDetails
    };
  },
  created() {}
};
</script>
