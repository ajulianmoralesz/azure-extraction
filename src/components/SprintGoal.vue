<template>
  <v-card v-if="sprintGoal != null" class="mx-4 my-2" width="100%">
    <v-card-title class="grey darken-1 white--text py-1">
      Sprint Goal : {{sprintGoal.length}} Objetivos
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-flag-checkered</v-icon>
    </v-card-title>
    <v-card-text>
      <v-slide-group active-class="success" show-arrows>
        <v-slide-item v-for="(sp, index) in sprintGoal" :key="index">
            <Goal :goal="sp"/>
        </v-slide-item>
      </v-slide-group>
    </v-card-text>
  </v-card>
</template>

<script>
import Goal from "./Goal.vue"
export default {
  name: "SprintGoal",
  data() {
    return {};
  },
  components:{
      Goal
  },
  computed: {
    sprintGoal() {
      return this.$store.getters.sprintGoal;
    },
  },
  methods: {},
};
</script>
