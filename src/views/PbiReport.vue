<template>
  <v-container>
    <filters :withIteration="true" :pbiReport="true" />
    <PbiList />
  </v-container>
</template>

<script>
import Filters from "../components/Filters.vue";
import PbiList from "../components/PbiList.vue"
export default {
  name: "PbiReport",
  components: {
    Filters,
    PbiList
  },
};
</script>
