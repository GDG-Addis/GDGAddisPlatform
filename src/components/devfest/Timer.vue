<template>
  <v-container class="pa-2">
    <v-layout wrap align-center justify-center column fill-height>
        <!-- Router View to Navigate through Admin Pages -->
        <DateCounter
          starttime="Oct 26, 2019 8:30:00"
          endtime="Oct 26, 2019 20:00:00"
          trans='{  
         "day":"Days",
         "hours":"Hours",
         "minutes":"Minutes",
         "seconds":"Seconds",
         "expired":"Event has been expired.",
         "running":"Till the end of event",
         "upcoming":"Till start of event",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'
        />
      
        <v-btn href="https://www.meetup.com/GDG-Addis/events/262076561" target="_blank" color="primary" large outline flat>Register</v-btn>
        
    </v-layout>
      
  </v-container>
</template>

<script>
import DateCounter from "@/components/common/DateCounter.vue";
export default {
  components: {
    DateCounter
  },
  data() {}
};
</script>