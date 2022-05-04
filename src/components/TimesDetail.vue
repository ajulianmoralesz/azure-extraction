<template>
  <v-card v-if="tasks != null" class="mx-4 my-2" width="400">
    <v-card-title class="indigo white--text py-1">
      Tiempos
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-clock</v-icon>
    </v-card-title>
    <v-card-text class="pb-0 pt-2">
      <v-row align="center">
        <v-col align="center">
          <p class="text-h2">
            {{ getIntPart(tasks.estimate) }}
            <span class="text-caption"
              >.{{ getDecimalPart(tasks.estimate) }} h</span
            >
          </p>
          <p class="text-caption">Estimado</p>
        </v-col>
        <v-col align="center">
          <p class="text-h2">
            {{ getIntPart(tasks.real) }}
            <span class="text-caption"
              >.{{ getDecimalPart(tasks.real) }} h</span
            >
          </p>

          <p class="text-caption">Ejecutado</p>
        </v-col>
      </v-row>
    </v-card-text>

    <v-progress-linear
      color="indigo"
      :value="(tasks.real / tasks.estimate) * 100"
    ></v-progress-linear>
  </v-card>
</template>

<script>
import formatterHelper from "../helpers/formatterHelper";
export default {
  name: "TimesDetail",
  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksValues;
    },
  },
  methods: {
    getIntPart: (value) => formatterHelper.getIntPart(value),
    getDecimalPart: (value) => formatterHelper.getDecimalPart(value),
  },
};
</script>
