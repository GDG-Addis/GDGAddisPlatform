<template>
  <v-container class="pa-0 my-0">
    <v-layout wrap align-start justify-start row fill-height class="my-0">
      <v-flex xs12 sm5 md4 lg4 class="pa-2">
        <!-- <v-img
          :src="require('@/assets/img/devFestPhoto.jpg')"
          :lazy-src="require('@/assets/img/devFestPhoto.jpg')"
          class
          width="100%"
        >
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img> -->
        <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing" width="100%" height="200"></youtube>

      </v-flex>
      <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">
        <p
          class="google-font"
          style="font-size:120%;"
        >DevFest (Developers Festival) is an annual community-run event</p>

        <p
          class="google-font grey--text mt-3"
          style="font-size:120%"
        >It offers keynote speakers who are very influential, speaker sessions across multiple product areas, including hack-a-thons, codelabs, and more. This is a gathering of developers and technology enthusiasts to cover multiple product areas</p>

        <v-btn
          href="https://www.meetup.com/GDG-Addis/events/262076561"
          target="_blank"
          class="ma-0 google-font elevation-1"
          color="#1a73e8"
          style="text-transform: capitalize;border-radius:5px;color:white"
        >Book your ticket</v-btn>&nbsp;
        <v-btn
          href="https://devfest.withgoogle.com/"
          target="_blank"
          outline
          color="cyan"
          style="text-transform: capitalize;border-radius:5px"
          class="ml-0"
          dark
        >Learn More</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      videoId: 'hTJ_-MxHKMY',
      playerVars: {
        autoplay: 0
      }
    }
  },
  methods: {
    playing() {
      
    }
  }
}</script>