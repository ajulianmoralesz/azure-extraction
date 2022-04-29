<template>
  <v-card v-if="userChart !== null" class="mx-4 my-2" width="350">
    <v-card-title class="white--text py-1 indigo">
      {{ title }} (h)
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-clock</v-icon>
    </v-card-title>
    <v-card-text>
      <apexchart
        type="donut"
        height="250"
        :options="getOptions()"
        :series="getValues()"
      ></apexchart>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "UserDetailChart",
  props: {
    field: String,
    title: String,
  },
  computed: {
    userChart() {
      return this.$store.getters.taskChart;
    },
  },
  methods: {
    getLabels: function () {
      return this.userChart.map((x) => x.user);
    },
    getValues: function () {
      return this.userChart.map((x) => x[this.field]);
    },
    getOptions() {
      return {
        chart: {
          background: "transparent",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels: this.getLabels(),
        tooltip: {
          enabled: true,
          theme: "dark"
        },
        legend: {
          show: true,
          position: "bottom",
          labels:{
            colors: "#BDBDBD"
          }
        },
      };
    },
  },
};
</script>
