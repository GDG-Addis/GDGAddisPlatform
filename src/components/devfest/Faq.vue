<template>
  <v-container class="pa-0 my-0">
      <h2>Frequently Asked Questions</h2>
    <v-layout wrap align-start justify-space-between row fill-height >
      <v-flex xs12 sm6 md6 lg6 >
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 >
        <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>