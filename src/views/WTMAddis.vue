<template>
  <div class="my-0" style="background-color:#FAFAFA">
    <v-layout wrap align-center justify-start row fill-height class="mt-2">
      <v-flex xs1 sm2 md2 lg1></v-flex>
      <!-- WTM logo -->
      <v-flex xs12 sm4 md2 lg3>
        <v-layout row wrap align-center justify-start>
          <v-img
            :src="require('@/assets/img/svg/WTMAddis.png')"
            :lazy-src="require('@/assets/img/svg/WTMAddis.png')"
            width="100%"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-layout>
      </v-flex>
      <!-- Desctription -->
      <v-flex xs12 sm8 md5 lg8 class>
        <v-layout column wrap>
          <span class="google-font mt-1 display-2">
            WTMAddis Website Is Underconstruction
            <v-icon style="font-size:120%;color:black;">mdi-bulldozer</v-icon>
          </span>
          <p class="google-font mb-0" style="font-size:150%">Women Techmakers program</p>
          <p
            class="google-font mb-0"
            style="font-size:120%;font-weight:600"
          >But until then, check the Global Women Tech Makers</p>
          <p
            class="google-font mt-1"
            style="font-size:120%"
          >WTM Program Provides visibility, community, and resources for women in technology. Get involved. Sign up to be connected to a global community and receive resources.</p>
          <v-flex xs1>
            <v-btn
              :href="ChapterDetails.wtmWebsite"
              target="_blank"
              outline
              color="#4C4A78"
              class="ma-0 google-font"
              style="border-radius:7px;text-transform: capitalize;"
            >See More About WTM Program</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
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
