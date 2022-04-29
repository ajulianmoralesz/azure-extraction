<template>
  <v-card v-if="timesChart != null" class="mx-auto">
    <v-card-title class="indigo white--text py-1">
      Tiempos
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-clock</v-icon>
    </v-card-title>
    <v-card-text>
      <apexchart
        type="line"
        height="250"
        :options="getOptions()"
        :series="getValues()"
      ></apexchart>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TimesChart",
  computed: {
    timesChart() {
      return this.$store.getters.taskChart;
    },
  },
  methods: {
    getLabels: function () {
      return this.timesChart.map((x) => x.iteration);
    },
    getValues: function () {
      let data = [];
      data.push({
        name: "Estimado",
        data: this.timesChart.map((x) => x.estimate),
      });
      data.push({
        name: "Ejecutado",
        data: this.timesChart.map((x) => x.real),
      });

      return data;
    },
    getOptions() {
      return {
        chart: {
          background: "transparent",
          toolbar:{
            show: false,
          }
        },
        dataLabels: {
          enabled: false,
        },
        labels: this.getLabels(),
        xaxis: {
          type: "category",
          labels: {
            show: false,
          },
        },
        yaxis: {          
          labels: {
            style:{
              colors: "#BDBDBD",
            },
            formatter: function (value) {
              return parseFloat(value).toFixed(2) + "h";
            },
          },
        },
        tooltip: {
          enabled: true,
          theme: "dark"
        },
        legend: {
          show: true,
          position: "bottom",
          labels:{
            colors: "#BDBDBD",
          }
        },
        stroke: {
          curve: "straight",
        },
        markers: {
          size: 4,
        },
      };
    },
  },
};
</script>
