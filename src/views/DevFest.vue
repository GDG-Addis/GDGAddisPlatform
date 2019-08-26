<template>
  <div>

    <v-btn
      fab
      medium
      color="secondary"
      bottom
      right
      absolute
      fixed
      @click.native.stop="$vuetify.goTo('#top', options)"
      class="mb-5 hidden-md-and-down"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <v-toolbar app height="55px" fixed dark>
      <v-toolbar-title class="ml-0 pl-1 mr-1">
        <v-layout column>
          <span class="google-font">DevFest Addis 2019</span>
          
          <span class="body-1 grey--text">
            <v-icon small>mdi-calendar</v-icon>
            Oct 26th, 2019
            <v-divider vertical color="white"></v-divider>
            <a href="#SomeGeoLocation" style="text-decoration:none;cursor:pointer;"><span class="light-blue--text">&nbsp; &nbsp; @ Eliana Hotel</span></a>
          </span>
        </v-layout>
      </v-toolbar-title>
      <v-spacer />

      <v-btn
        v-for="(link, i) in links"
        :key="i"
        class="ml-0 google-font hidden-sm-and-down"
        style="text-transform: capitalize;"
        flat
        @click="$vuetify.goTo(link.to, options)"
      >{{ link.text }}</v-btn>
    </v-toolbar>

    <!-- Banner -->
    <v-container fluid class="pa-0" id="top">
      <v-layout row wrap justify-start fill-height>
        <Banner />
      </v-layout>
    </v-container>

    <!-- Timer -->
    <v-container fluid class="pa-0" style="background-color:#F0F0F0">
      <v-layout row wrap justify-start fill-height>
        <Timer />
      </v-layout>
    </v-container>

    <!-- About DevFest -->
    <v-container fluid class="pa-2" id="aboutDevFest">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <AboutDevFest />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Agenda -->
    <v-container fluid class style="background-color:#444" id="agenda">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <Agenda />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Parallex -->
    <!-- <v-parallax :src="require('@/assets/img/devfest/devfest_banner.png')"></v-parallax> -->
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">DevFest Addis 2019</h1>
        <h4 class="subheading">The most anticipated developers festival! Join us and bring the spirit of DevFest to Ethiopia. 
</h4>
        <v-btn  href="https://www.meetup.com/GDG-Addis/events/262076561" target="_blank" color="primary" outline>Reserve Now!</v-btn>
      </v-layout>
    </v-parallax>

    <!-- Speakers -->
    <v-container fluid class id="speakers">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <Speakers />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Sponsors -->
<v-container fluid id="sponsors">
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <Sponsors/>
          </v-flex>
        </v-layout>
      </v-container>
    <!-- TO DO -->

    <!-- FAQ -->
    <v-container fluid style="background-color:#F0F0F0" id="faq">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <Faq />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/devfest/Banner";
import Timer from "@/components/devfest/Timer";
import AboutDevFest from "@/components/devfest/AboutDevFest";
import Agenda from "@/components/devfest/Agenda";
import Speakers from "@/components/devfest/Speakers";
import Faq from "@/components/devfest/Faq";
import Sponsors from "@/components/devfest/Sponsors";
export default {
  components: {
    Banner,
    Timer,
    AboutDevFest,
    Agenda,
    Speakers,
    Faq,
    Sponsors
  },
  data() {
    return {
      links: [
        { text: "About DevFest", to: "#aboutDevFest", icon: "" },
        { text: "Agenda", to: "#agenda", icon: "rounded_corner" },
        { text: "Speakers", to: "#speakers", icon: "group" },
        { text: "Venue", to: "#venue", icon: "toc" },
        { text: "Sponsors", to: "#sponsors", icon: "toc" },
        { text: "FAQ", to: "#faq", icon: "toc" },
        { text: "GDG Addis", to: "/", icon: "toc" },
        
      ],
      options: {
        duration: 500,
        offset: -10,
        easing: 'easeInOutCubic'
      }
    };
  }
};
</script>

