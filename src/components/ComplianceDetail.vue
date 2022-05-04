<template>
  <v-card v-if="tasks != null && pbi != null" class="mx-4 my-2" width="350">
    <v-card-title class="white--text py-1" :class="getColor()">
      Cumplimiento
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-check-decagram</v-icon>
    </v-card-title>
    <v-card-text class="pb-0 pt-2">
      <v-row align="center" justify="center">
        <v-col>
          <p class="text-h2">
            {{ getIntPart(tasks.compliance) }}

            <span class="text-caption"
              >.{{ getDecimalPart(tasks.compliance) }}%</span
            >
          </p>
          <p class="text-caption">Tareas</p>
        </v-col>
        <v-col align="center">
          <p class="text-h2">
            {{ getIntPart(pbi.compliance) }}
            <span class="text-caption"
              >.{{ getDecimalPart(pbi.compliance) }}%</span
            >
          </p>

          <p class="text-caption">PBI</p>
        </v-col>
      </v-row>
    </v-card-text>

    <v-progress-linear
      :color="getColor()"
      :value="pbi.compliance"
    ></v-progress-linear>
  </v-card>
</template>

<script>
import formatterHelper from "../helpers/formatterHelper";
export default {
  name: "ComplianceDetail",
  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksValues;
    },
    pbi() {
      return this.$store.getters.pbiValues;
    },
  },
  methods: {
    getIntPart: (value) => formatterHelper.getIntPart(value),
    getDecimalPart: (value) => formatterHelper.getDecimalPart(value),
    getColor: function () {
      let avgValue = (this.tasks.compliance + this.pbi.compliance) / 2;
      if (avgValue >= 80) {
        return "light-green";
      } else if (avgValue >= 70 && avgValue < 80) {
        return "amber";
      } else {
        return "red";
      }
    },
  },
};
</script>
