<template>
  <v-card v-if="bugs != null" class="mx-4 my-2" width="200">

    <v-card-title class="green white--text py-1">
        Bugs
        <v-spacer></v-spacer>
        <v-icon color="white">mdi-bug</v-icon>        
    </v-card-title>

    <v-card-text class="pb-0 pt-2">
      <v-row align="center">
        <v-col align="center">
          <p class="text-h2">{{ bugs.bugsCount }}</p>
          <p>Totales</p>
        </v-col>
        <v-col align="center">
          <p class="text-h2">{{ bugs.openBugsCount }}</p>
          <p>Abiertos</p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-progress-linear
      color="green"
      :value="((bugs.bugsCount - bugs.openBugsCount) / bugs.bugsCount) * 100"
    ></v-progress-linear>

  </v-card>
</template>

<script>
export default {
  name: "BugsDetail",
  data() {
    return {};
  },
  computed: {
    bugs() {
      return this.$store.getters.bugsValues;
    },
  },
  methods: {},
};
</script>
