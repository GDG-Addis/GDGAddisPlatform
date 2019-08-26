<template>
  <v-container class="pa-0 my-0">
    <h2>Frequently Asked Questions</h2>

    <p class="google-font" style="font-size:110%;padding:10px 0px;">Just few weeks to the biggest event of GDG Addis but... are you ready? We know that you could have some questions so we prepared for you a list of FAQs that may can help you..Anyway we are always open to solve any other doubt you could have, feel free to <a target="_blank" href="/Contact" 
          style="text-decoration:none;"> contact us</a> in that case.</p>
    <v-layout wrap align-start justify-space-between row fill-height>
      <v-flex xs12 sm6 md6 lg6>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
            <template v-slot:header>
              <div>{{FaqDetails.left[i].quest}}</div>
            </template>
            <v-card>
              <v-card-text>{{FaqDetails.left[i].answer}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6>
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
            <template v-slot:header>
              <div>{{FaqDetails.right[i].quest}}</div>
            </template>
            <v-card>
              <v-card-text>{{FaqDetails.right[i].answer}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import FaqDetails from "@/assets/data/devfest/faq.json";
export default {

  components: {},
   data() {
    return {
      FaqDetails: FaqDetails
    };

}
}
</script>