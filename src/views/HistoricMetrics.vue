<template>
  <v-container>
    <filters :withIteration="false"/>
    <v-card flat>
      <v-row align="center" justify="center">
        <v-col>
          <BugsChart />
        </v-col>
        <v-col>
          <TimesChart />
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col>
          <ComplianceChart />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Filters from "../components/Filters.vue";
import BugsChart from "../components/BugsChart.vue";
import TimesChart from "../components/TimesChart.vue";
import ComplianceChart from "../components/ComplianceChart.vue";
export default {
  name: "HistoricMetrics",
  components: {
    Filters,
    BugsChart,
    TimesChart,
    ComplianceChart,
  },
  mounted() {
    this.$store.commit("setTasksValues", null);
    this.$store.commit("setTaskChart", null);
    this.$store.commit("setBugsValues", null);
    this.$store.commit("setBugsChart", null);
  },
};
</script>
