<template>
  <v-card color="white" height="60px" class="white hidden-sm-and-up" flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" app color="white" class="elevation-2">
      <v-btn color="#518FF5" flat value="Home" router to="/home">
        <span>About</span>
        <v-icon>dashboard</v-icon>
      </v-btn>

      <v-btn color="#518FF5" flat value="events" router to="/events">
        <span>Speakers</span>
        <v-icon>rounded_corner</v-icon>
      </v-btn>

      <v-btn color="#518FF5" flat value="team" router to="/team">
        <span>Avenue</span>
        <v-icon>group</v-icon>
      </v-btn>

      <v-btn color="#518FF5" flat value="about" router to="/about">
        <span>Faq</span>
        <v-icon>toc</v-icon>
      </v-btn>

      <!-- <v-btn
        color="#518FF5"
        flat
        value="contact"
        router
        to="/contact"
      >
        <span>Contant</span>
        <v-icon>person</v-icon>
      </v-btn>-->
    </v-bottom-nav>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      bottomNav: "recent",
      items: [
        { title: "About DevFest", icon: "dashboard", route: "/home" },
        { title: "Avenue", icon: "rounded_corner", route: "/attending" },
        { title: "Tracks", icon: "toc", route: "/sessions" },
        { title: "Faq", icon: "group", route: "/speakers" }
      ]
    };
  }
};
</script>