import IterationMetrics from './views/IterationMetrics.vue'
import HistoricMetrics from './views/HistoricMetrics.vue'
import PbiReport from './views/PbiReport.vue'
export const routes = [    
    { path: '/', component: IterationMetrics },
    { path: '/historic', component: HistoricMetrics},
    { path: '/pbireport', component: PbiReport},
  ];