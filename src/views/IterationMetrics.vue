<template>
  <v-container>
    <filters :withIteration="true" />
    <v-card flat align="center" color="transparent">
      <v-row class="my-2" align="center" justify="center">
        <SprintGoal />
      </v-row>
      <v-row class="my-2" align="center" justify="center">
        <BugsDetail />
        <TimesDetail />
        <ComplianceDetail />
      </v-row>
      <v-row class="my-2" align="center" justify="center">
        <UserDetailChart field="estimate" title="Tiempo Estimado" />
        <UserDetailChart field="real" title="Tiempo Ejecutado" />
        <UserComplianceChart />
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Filters from "../components/Filters.vue";
import BugsDetail from "../components/BugsDetail.vue";
import TimesDetail from "../components/TimesDetail.vue";
import ComplianceDetail from "../components/ComplianceDetail.vue";
import UserDetailChart from "../components/UserDetailChart.vue";
import UserComplianceChart from "../components/UserComplianceChart.vue";
import SprintGoal from "../components/SprintGoal.vue";
export default {
  name: "IterationMetrics",
  components: {
    Filters,
    BugsDetail,
    TimesDetail,
    ComplianceDetail,
    UserDetailChart,
    UserComplianceChart,
    SprintGoal,
  },
  mounted() {
    this.$store.commit("setSprintGoal", null);
    this.$store.commit("setTasksValues", null);
    this.$store.commit("setTaskChart", null);
    this.$store.commit("setBugsValues", null);
  },
};
</script>
