import IterationMetrics from './views/IterationMetrics.vue'
import HistoricMetrics from './views/HistoricMetrics.vue'
export const routes = [    
    { path: '/', component: IterationMetrics },
    { path: '/historic', component: HistoricMetrics}
  ];