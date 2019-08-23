<template>
  <div>
    <v-toolbar app height="55px" fixed dark>
      <v-toolbar-title class="ml-0 pl-1 mr-1">
        <v-layout column>
          <span class="google-font">DevFest Addis 2019</span>
          <span class="body-1 grey--text">
            <v-icon small>mdi-calendar</v-icon>
            Oct 26th, 2019
            <v-divider vertical color="white"></v-divider>
            <span class="light-blue--text">&nbsp; &nbsp; @ Eliana Hotel</span>
          </span>
        </v-layout>
      </v-toolbar-title>
      <v-spacer />

      <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        class="ml-0 google-font hidden-sm-and-down"
        style="text-transform: capitalize;"
        flat
        @click="onClick($event, link)"
      >{{ link.text }}</v-btn>
    </v-toolbar>

    <!-- Banner -->
    <v-container fluid class="pa-0">
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
    <v-container fluid class="pa-2">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <AboutDevFest />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Agenda -->
    <v-container fluid class style="background-color:#444">
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
        <h4 class="subheading">The most anticipated developers festival!</h4>
        <v-btn color="primary" outline>Register Now!</v-btn>
      </v-layout>
    </v-parallax>

    <!-- Speakers -->
    <v-container fluid class>
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class>
          <Speakers />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Sponsors -->
    <!-- TO DO -->

    <!-- FAQ -->
    <v-container fluid style="background-color:#F0F0F0">
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
export default {
  components: {
    Banner,
    Timer,
    AboutDevFest,
    Agenda,
    Speakers,
    Faq
  },
  data() {
    return {
      links: [
        { text: "Top", to: "/", icon: "home" },
        { text: "About DevFest", to: "/devfest", icon: "" },
        { text: "Agenda", to: "/events", icon: "rounded_corner" },
        { text: "Speakers", to: "/team", icon: "group" },
        { text: "Venue", to: "/about", icon: "toc" },
        { text: "Sponsors", to: "", icon: "toc" },
        { text: "FAQ", to: "", icon: "toc" }
      ]
    };
  }
};
</script>

