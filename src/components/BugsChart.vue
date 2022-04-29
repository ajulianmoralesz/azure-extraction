<template>
  <v-card v-if="bugsChart != null" class="mx-auto">
    <v-card-title class="green white--text py-1">
      Bugs
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-bug</v-icon>
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
  name: "BugsChart",
  computed: {
    bugsChart() {
      return this.$store.getters.bugsChart;
    },
  },
  methods: {
    getLabels: function () {
      return this.bugsChart.map((x) => x.iteration);
    },
    getValues: function () {
      let data = [];
      data.push({
        name: "Bugs Totales",
        data: this.bugsChart.map((x) => x.totalBugs),
      });
      data.push({
        name: "Bugs Abiertos",
        data: this.bugsChart.map((x) => x.openBugs),
      });

      return data;
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
        yaxis: {
          labels: {
            style: {
              colors: "#BDBDBD",
            },
            formatter: function (value) {
              return parseFloat(value).toFixed(0) + " bugs";
            },
          },
        },
        labels: this.getLabels(),
        xaxis: {
          type: "category",
          labels: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          theme: "dark"
        },
        legend: {
          show: true,
          position: "bottom",
          labels: {
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
