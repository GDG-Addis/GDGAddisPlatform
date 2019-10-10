<template>
  <v-content class="pa-0">
    <v-container fluid class="pt-4 mb-0 grey lighten-5">
      <v-layout wrap align-center justify-center row>
        <v-flex xs12 md10 class="my-0">
          <p
            class="google-font mb-0"
            style="font-size:200%;color:#0277bd"
          >{{ChapterDetails.ChapterName}}'s Events</p>

          <p class="google-font mt-0 mb-0" style="font-size:130%"></p>
          <p class="google-font mb-0" style="font-size:110%">Social Media:</p>
          <p class="google-font mt-0 ml-0" style="font-size:110%">
            <span v-for="(item,i) in ChapterDetails.socialLinks" :key="i">
              <v-tooltip bottom>
                <v-btn flat icon :href="item.link" target="_blank" slot="activator">
                  <v-icon :color="item.color">{{item.icon}}</v-icon>
                </v-btn>
                <span>{{item.name}}</span>
              </v-tooltip>
            </span>
          </p>
          <v-alert color="secondary" icon="" :value="true">
          <span class="title">DevFest Addis 2019 is back!</span>
          <v-btn color="lime" outline small href="https://devfest.gdgaddis.dev" target="_blank">Go to DevFest Website</v-btn>
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-5 pt-0">
      <v-layout wrap align-center justify-center row>
        <v-flex xs12 md10 class>
          <upcommingEvents />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="grey lighten-5 pt-0">
      <v-layout wrap align-center justify-center row>
        <v-flex xs12 md10 class>
          <pastEvents />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import upcommingEvents from "@/components/events/upcomingEvents";
import pastEvents from "@/components/events/pastEvents";
export default {
  components: {
    upcommingEvents,
    pastEvents
  },
  data() {
    return {
      ChapterDetails: ChapterDetails
    };
  }
};
</script>
