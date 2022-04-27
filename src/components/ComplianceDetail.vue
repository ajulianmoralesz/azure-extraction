<template>
  <v-card v-if="tasks != null" class="mx-4 my-2" width="300">
    <v-card-title class="white--text py-1" :class="getColor()">
      Cumplimiento
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-check-decagram</v-icon>
    </v-card-title>
    <v-card-text class="pb-0 pt-2">
      <v-row align="center" justify="center">
        <v-col>
          <p class="text-h2">
            {{ tasks.compliance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}
            <span class="text-h5">%</span></p>
            <p>Porcentaje de Cumplimiento</p>
        </v-col>
      </v-row>
    </v-card-text>

    <v-progress-linear
      :color="getColor()"
      :value="tasks.compliance"
    ></v-progress-linear>
  </v-card>
</template>

<script>
export default {
  name: "ComplianceDetail",
  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksValues;
    },
  },
  methods: {
    getColor: function () {
      if (this.tasks.compliance >= 80) {
        return "light-green";
      } else if (this.tasks.compliance >= 70 && this.tasks.compliance < 80) {
        return "amber";
      } else {
        return "red";
      }
    },
  },
};
</script>
