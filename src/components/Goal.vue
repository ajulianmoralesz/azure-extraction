<template>
  <v-card class="mx-2 mt-2 grey darken-1" width="350">
    <v-progress-linear color="white" :value="goal.progress"></v-progress-linear>
    <v-card-title class="text-caption">
      {{ goal.title }}
    </v-card-title>
    <v-card-text align="left">
      <p>
        Estado Actual: <b>{{ goal.state.last }}</b>
        <v-icon :color="goal.state.color">{{ goal.state.icon }}</v-icon>
      </p>
      <v-row>
        <v-col md="4">
          <v-badge :content="goal.task" :value="goal.task" color="black" inline>
            <v-btn icon>
              <v-icon>mdi-file-check</v-icon>
            </v-btn>
          </v-badge>
        </v-col>
        <v-col md="3">
          <v-badge :content="goal.bugs" :value="goal.bugs" color="black" inline>
            <v-btn icon>
              <v-icon>mdi-bug</v-icon>
            </v-btn>
          </v-badge>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="mb-1 mx-1">
      <v-row>
        <v-chip
          v-for="(tag, index) in goal.tags"
          :key="index"
          class="my-1 mx-1 text-caption"
        >
          {{ tag }}
        </v-chip>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Goal",
  props: {
    goal: Object,
  },
  data() {
    return {};
  },
  computed: {
    sprintGoal() {
      return this.$store.getters.sprintGoal;
    },
  },
  methods: {},
};
</script>
