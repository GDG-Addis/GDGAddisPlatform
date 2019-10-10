<template>
  <div>
    <v-layout row justify-center >
        <v-snackbar v-model="snackbar" timeout="600000000" bottom left multi-line>
          
          <a small class="pa-0" color="success" flat href="https://devfest.gdgaddis.dev" target="_blank" style="text-decoration:none">DevFest 2019 Addis is live now >></a>
          <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-layout>
    <v-toolbar app color="white" height="55px" scroll-off-screen>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />

      <v-toolbar-title class="ml-0 pl-1 mr-1">
        <a href="#" style="text-decoration:none;cursor:pointer;">
          <span class="google-font" style="color:#3f3f3f">{{ChapterDetails.ChapterName}}</span>
        </a>
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
    
  </div>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
// Utilities
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      snackbar: true,
      ChapterDetails: ChapterDetails
    };
  },
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>