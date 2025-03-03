import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ProjectManagement from '../components/ProjectManagement.vue';
import DataProcessing from '../components/DataProcessing.vue';
import DataStorage from '../components/DataStorage.vue';
import UserManagement from '../components/UserManagement.vue';
import ProjectDetail from '../components/ProjectDetail.vue'; 

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/project-management',
    name: 'ProjectManagement',
    component: ProjectManagement
  },
  {
    path: '/project-management/:projectName',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  },
  {
    path: '/data-processing',
    name: 'DataProcessing',
    component: DataProcessing
  },
  {
    path: '/data-storage',
    name: 'DataStorage',
    component: DataStorage
  },
  {
    path: '/user-management',
    name: 'UserManagement',
    component: UserManagement
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;