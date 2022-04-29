<template>
  <v-card v-if="userChart !== null" class="mx-4 my-2">
    <v-card-title class="white--text py-1" :class="getColor()">
      Cumplimiento Usuarios
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-check-decagram</v-icon>
    </v-card-title>
    <v-card-text>
      <apexchart
        type="bar"
        height="200"
        :options="getOptions()"
        :series="getValues()"
      ></apexchart>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "UserComplianceChart",
  computed: {
    userChart() {
      return this.$store.getters.taskChart;
    },
  },
  methods: {
    getColor: function () {
      if (this.userChart !== null) {
        let value =
          this.userChart.map((x) => x.compliance).reduce((a, b) => a + b, 0) /
          this.userChart.length;
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
      return this.userChart.map((x) => x.user);
    },
    getValues: function () {
      let data = [];
      data.push({
        name: "Cumplimiento",
        data: this.userChart.map((x) => x.compliance),
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
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return (
              val.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }) + "%"
            );
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#BDBDBD"],
          },
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
            if (value >= 80) {
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
            style: {
              colors : "#BDBDBD"
            },
            formatter: function (value) {
              return parseFloat(value).toFixed(2) + "%";
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
        },
        markers: {
          size: 4,
        },
      };
    },
  },
};
</script>
