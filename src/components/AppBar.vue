<template>
  <v-navigation-drawer expand-on-hover mini-variant dark app>
    <v-list three-line>
      <v-list-item class="px-2" dark>
        <v-list-item-avatar>
            <v-icon>mdi-eye</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Deus Oculus
          </v-list-item-title>
          <v-list-item-subtitle>Azure Devops</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item link @click="$router.push('/')" dark>
        <v-list-item-icon>
          <v-icon>mdi-tablet-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Analisis Sprint</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="$router.push('/historic')" dark>
        <v-list-item-icon>
          <v-icon>mdi-chart-timeline-variant-shimmer</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Analisis Historico</v-list-item-title>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="mb-2 text-center">
        <span class="white--text text-caption">Arnold Julian Morales Zapata</span>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
