<template>
  <v-layout column justify-center align-center>
    <div id="counterBody">
      <div class="day">
        <span class="number">{{ days }}</span>
        <div class="format">{{ wordString.day }}</div>
      </div>

      <div class="hour pa-2">
        <span class="number">{{ hours }}</span>
        <div class="format">{{ wordString.hours }}</div>
      </div>

      <div class="min">
        <span class="number">{{ minutes }}</span>
        <div class="format">{{ wordString.minutes }}</div>
      </div>

      <div class="sec">
        <span class="number">{{ seconds }}</span>
        <div class="format">{{ wordString.seconds }}</div>
      </div>
    </div>
    <!-- <div class="message">{{ message }}</div> -->
  </v-layout>
  <!-- <div class="status-tag">{{ statusText }}</div> -->
</template>

<script>
export default {
  name: "DateCounter",
  props: ["starttime", "endtime", "trans"],
  data() {
    return {
      timer: "",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      message: "",
      statusType: "",
      statusText: ""
    };
  },
  created() {
    this.wordString = JSON.parse(this.trans);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start, end) {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        this.message = this.wordString.expired;
        this.statusType = "expired";
        this.statusText = this.wordString.status.expired;
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
        this.message = this.wordString.running;
        this.statusType = "running";
        this.statusText = this.wordString.status.running;
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
        this.message = this.wordString.upcoming;
        this.statusType = "upcoming";
        this.statusText = this.wordString.status.upcoming;
      }
    },
    calcTime: function(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  }
};
</script>

<style lang="css" scoped>
#counterBody h1 {
  font-size: 26px;
  color: #fff;
}
.timer {
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-top: 50px;
}

.day,
.hour,
.min,
.sec {
  font-size: 30px;
  display: inline-block;
  font-weight: 500;
  text-align: center;
  margin: 0 5px;
}

.format {
  font-weight: 300;
  font-size: 16px;
  width: 60px;
  margin-left: 7px;
}

.number {
  background: rgba(51, 51, 51, 0.925);
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  width: 80px;
  text-align: center;
  color: #fff;
}
.message {
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
}
.status-tag {
  width: 270px;
  margin: 10px auto;
  padding: 8px 0;
  font-weight: 500;
  color: #000;
  text-align: center;
  border-radius: 15px;
}

.day span{
  background: #4285ef;
}
.hour span{
  background: #e5433b;
}
.min span{
  background: #f7b926;
}
.sec span{
  background: #1b9c58;
}



</style>