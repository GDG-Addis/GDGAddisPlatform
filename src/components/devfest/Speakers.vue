<template>
    <v-container class="pa-0 my-0" grid-list-lg>
            <h3>Key Note Speakers</h3>
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
            <v-flex v-for="i in 16" :key="i" xs6 sm4 md3 lg3 xl3 >
                <v-card>
                    <v-card-media
                        :src="require('@/assets/img/devfest/speakers/melake.jpg')"
                        height="150px">
                    </v-card-media>
                    <v-card-title>
                        <div>
                            <span class="title black--text">Melake Wubshet</span><br>
                            <span class="caption">Fullstack Software Developer</span><br>
                            <span class="caption">iBrave Software Engineering</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>

                        <v-btn flat icon href="https://www.twitter.com" target="_blank">
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>

                        <v-btn flat icon href="https://www.facebook.com" target="_blank">
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>

                        <v-btn flat icon href="https://www.linkedin.com" target="_blank">
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-flex> 

            
           
        </v-layout>

    </v-container>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>