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
      { path: '', name: 'home', component: () => import('../pages/Home.vue') }
    ]
  },
  {
    path: '/projects',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: ':projectId', name: 'project', component: () => import('../pages/Projects/Single.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'about', component: () => import('../pages/About/index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Authentication/Login.vue') }
    ]
  },
  {
    path: '/start',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'start', component: () => import('pages/Authentication/Signup.vue') }
    ]
  },
  {
    path: '/forgot-password',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'forgot-password', component: () => import('pages/Authentication/ForgotPassword.vue') }
    ]
  },


  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', name:'dashboard', meta: {private: true}, component: () => import('pages/Dashboard/Home.vue') }
    ]
  },
  /*
  {
    path: '/explore',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Explore/index.vue') }
    ]
  },
  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Users/index.vue') },
      { path: ':userId', component: () => import('pages/Users/single.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Projects/single.vue') }
    ]
  },
  */

  // Always leave this as last one,
  // but you can also remove it
  {
    name: 'error404',
    path: '*',
    component: () => import('../pages/Error404.vue')
  }
];

export default routes;
