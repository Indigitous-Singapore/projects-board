import { RouteConfig } from 'vue-router';

/**
 * Naming convention
 * 
 * index: List
 * Single
 * Edit
 * Create
 */

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      //  Base
      { path: '/', name: 'home', component: () => import('../pages/Home.vue') },
      { path: 'about', name: 'about', component: () => import('../pages/About/index.vue') },
      { path: 'terms', name: 'terms', component: () => import('../pages/Legal/Terms.vue') },
      { path: 'privacy', name: 'privacy', component: () => import('../pages/Legal/Privacy.vue') },
      { path: 'explore', name: 'explore', component: () => import('pages/Explore/index.vue') },

      //  Authentication
      { path: 'start', name:'start', component: () => import('pages/Authentication/Signup.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Authentication/Login.vue') },
      { path: 'logout', name: 'logout', meta: {private: true}, component: () => import('pages/Authentication/Logout.vue') },
      { path: 'forgot-password', name: 'forgot-password', component: () => import('pages/Authentication/ForgotPassword.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('pages/Authentication/ResetPassword.vue') },
    ]
  },

  {
    path: '/projects',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: { name: 'explore' } },
      { path: ':projectId', name: 'project', component: () => import('../pages/Projects/Single.vue') }
    ]
  },

  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '/', name:'dashboard', meta: {private: true}, component: () => import('pages/Dashboard/Home.vue') },
      { path: 'projects/new', name:'projects-new', meta: {private: true}, component: () => import('pages/Dashboard/Projects/Create.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    name: 'error404',
    path: '*',
    component: () => import('../pages/Error404.vue')
  }
];

export default routes;
