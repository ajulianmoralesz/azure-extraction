<template>
  <v-card v-if="complianceChart !== null" class="mx-auto">
    <v-card-title class="white--text py-1" :class="getColor()">
      Cumplimiento (%)
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-check-decagram</v-icon>
    </v-card-title>
    <v-card-text>
      <apexchart
        type="bar"
        height="250"
        :options="getOptions()"
        :series="getValues()"
      ></apexchart>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ComplianceChart",
  computed: {
    complianceChart() {
      return this.$store.getters.taskChart;
    },
  },
  methods: {
    getColor: function () {
      if (this.complianceChart !== null) {
        let value =
          this.complianceChart
            .map((x) => x.compliance)
            .reduce((a, b) => a + b, 0) / this.complianceChart.length;
        if (value >= 80) {
          return "light-green";
        } else if (value >= 70 && value < 80) {
          return "amber";
        } else {
          return "red";
        }
      }
      return "indigo";
    },
    getLabels: function () {
      return this.complianceChart.map((x) => x.iteration);
    },
    getValues: function () {
      let data = [];
      data.push({
        name: "Cumplimiento",
        data: this.complianceChart.map((x) => x.compliance),
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
        labels: this.getLabels(),
        xaxis: {
          type: "category",
          labels: {
            show: false,
          },
        },
        colors: [
          function ({ value }) {
            if (value > 80) {
              return "#8BC34A";
            } else if (value >= 70 && value < 80) {
              return "#FFC107";
            } else {
              return "#F44336";
            }
          },
        ],
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value).toFixed(2) + "%";
            },
          },
        },
        tooltip: {
          enabled: true,
        },
        legend: {
          show: true,
          position: "bottom",
        },
        markers: {
          size: 4,
        },
      };
    },
  },
};
</script>
