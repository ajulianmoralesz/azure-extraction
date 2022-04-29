<template>
  <v-container>
    <v-select
      v-model="project"
      :items="projects"
      item-text="name"
      item-value="id"
      label="Proyecto"
      single-line
      return-object
      @change="changeProject()"
    ></v-select>
    <v-select
      v-model="team"
      :items="teams"
      item-text="name"
      item-value="id"
      label="Equipo"
      return-object
      single-line
      @change="changeTeam()"
    ></v-select>
    <v-select
      v-if="withIteration"
      v-model="iteration"
      :hint="`Este sprint va desde: ${iteration.attributes.startDate} hasta: ${iteration.attributes.finishDate}`"
      :items="iterations"
      item-text="name"
      item-value="id"
      label="Sprint"
      persistent-hint
      return-object
      single-line
      @change="changeIteration()"
    ></v-select>
  </v-container>
</template>

<script>
export default {
  name: "Filters",
  props: {
    withIteration: Boolean,
    pbiReport: Boolean,
  },
  data() {
    return {
      project: {},
      team: {},
      iteration: { attributes: { startDate: "", finishDate: "" } },
    };
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
    teams() {
      return this.$store.getters.teams;
    },
    iterations() {
      return this.$store.getters.iterations;
    },
  },
  mounted() {
    this.$store.dispatch("getProjects");
  },
  methods: {
    changeProject: function () {
      this.$store.dispatch("getTeams", this.project.id);
    },
    changeTeam: function () {
      let info = {
        project: this.project.name,
        team: this.team.name,
      };
      this.$store.dispatch("getIterations", info);
      if (!this.withIteration) {
        this.$store.dispatch("getBugs", info);
        this.$store.dispatch("getTasks", info);
      }
    },
    changeIteration: function () {
      let info = {
        project: this.project.name,
        team: this.team.name,
        iteration: this.iteration.name,
      };
      if (this.pbiReport) {
        this.$store.dispatch("getPbisIteration", info);
      } else {
        this.$store.dispatch("getBugsIteration", info);
        this.$store.dispatch("getTasksIteration", info);
      }
    },
  },
};
</script>
