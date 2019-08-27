<template>
  <v-container class="pa-0 my-0">
    <v-layout wrap align-start justify-start row fill-height class="my-0">
      <v-flex xs12 class="pa-2 my-0">
        <div>
          <v-toolbar tabs color="secondary" dark>
            <toolbar-title>
              <span class="title">Agenda</span>
            </toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat icon>
              <v-icon>mdi-download</v-icon>
            </v-btn>
            <v-btn flat icon>
              <v-icon>mdi-help</v-icon>
            </v-btn>
            <v-tabs
              slot="extension"
              centered
              v-model="tabsValue"
              slider-color="orange"
              color="secondary"
              dark
            >
              <v-tab>Track 1</v-tab>

              <v-tab>Track 2</v-tab>

              <v-tab>Track 3</v-tab>
            </v-tabs>
          </v-toolbar>
          <v-tabs-items v-model="tabsValue">
            <v-tab-item>
              <v-card class="mx-auto">
                <v-card dark flat>
                  <v-container fill-height>
                    <v-layout align-center>
                      <!-- <strong class="display-4 font-weight-regular mr-4">26</strong> -->
                      <strong class="display-1 font-weight-regular mr-4">Comming Soon!</strong>
                      <v-layout column justify-end>
                        <!-- <div class="headline font-weight-light">Saturday</div>
                        <div class="text-uppercase font-weight-light">October 2019</div> -->
                      </v-layout>
                    </v-layout>
                  </v-container>
                </v-card>
                <!-- <v-card-text class="py-0">
                  <v-timeline align-top dense>
                    <v-timeline-item color="pink" small>
                      <v-layout pt-3>
                        <v-flex xs3>
                          <strong>5pm</strong>
                        </v-flex>
                        <v-flex>
                          <strong>New Icon</strong>
                          <div class="caption">Mobile App</div>
                        </v-flex>
                      </v-layout>
                    </v-timeline-item>

                    <v-timeline-item color="teal lighten-3" small>
                      <v-layout wrap pt-3>
                        <v-flex xs3>
                          <strong>3-4pm</strong>
                        </v-flex>
                        <v-flex>
                          <strong>Design Stand Up</strong>
                          <div class="caption mb-2">Hangouts</div>
                          <v-avatar>
                            <v-img
                              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                            ></v-img>
                          </v-avatar>
                          <v-avatar>
                            <v-img
                              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                            ></v-img>
                          </v-avatar>
                          <v-avatar>
                            <v-img
                              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                            ></v-img>
                          </v-avatar>
                        </v-flex>
                      </v-layout>
                    </v-timeline-item>

                    <v-timeline-item color="pink" small>
                      <v-layout pt-3>
                        <v-flex xs3>
                          <strong>12pm</strong>
                        </v-flex>
                        <v-flex>
                          <strong>Lunch break</strong>
                        </v-flex>
                      </v-layout>
                    </v-timeline-item>

                    <v-timeline-item color="teal lighten-3" small>
                      <v-layout pt-3>
                        <v-flex xs3>
                          <strong>9-11am</strong>
                        </v-flex>
                        <v-flex>
                          <strong>Finish Home Screen</strong>
                          <div class="caption">Web App</div>
                        </v-flex>
                      </v-layout>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text> -->
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>