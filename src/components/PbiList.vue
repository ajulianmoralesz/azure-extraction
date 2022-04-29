<template>
  <v-container v-if="pbi !== null">
    <v-toolbar dense flat>
      <v-spacer></v-spacer>
      <v-btn icon @click="exportReport()">
        <v-icon>mdi-download</v-icon>
      </v-btn>
    </v-toolbar>
    <div id="pdf">
      <v-card
        v-for="(item, index) in pbi"
        :key="index"
        class="my-4"
      >
        <v-card-title>
          {{ item["System.Title"] }}
        </v-card-title>
        <v-card-subtitle class="text-caption">
          <b>Descripción</b>
        </v-card-subtitle>
        <v-card-text class="text-caption" v-html="item['System.Description']">
        </v-card-text>
        <v-card-subtitle class="text-caption font-weight-bold">
          <b>Criterios de aceptación</b>
        </v-card-subtitle>
        <v-card-text
          class="text-caption"
          v-html="item['Microsoft.VSTS.Common.AcceptanceCriteria']"
        >
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { jsPDF } from "jspdf"; 
export default {
  name: "PbiList",
  computed: {
    pbi() {
      return this.$store.getters.pbis;
    },
  },
  methods: {
    exportReport: function () {
      let element = document.getElementById("pdf");
      let doc = new jsPDF('p','pt','a4');
      const margin = 10;
      const scale = (doc.internal.pageSize.width - margin * 2) / element.scrollWidth;
      doc.html(element, {
        x: margin,
        y: 5,
        html2canvas: {
          scale: scale,

        },
        callback: function(d){
          d.output('dataurlnewwindow', {filename: 'pbi.pdf'});
        }
      });

    },
  },
};
</script>
