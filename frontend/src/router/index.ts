import { route } from 'quasar/wrappers';
import VueRouter from 'vue-router';
import { StoreInterface } from '../store';
import fetchedProfile from './guards/fetchedProfile';
import isAuthenticated from './guards/isAuthenticated';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */
let Router: VueRouter = new VueRouter()

export {
  Router
}

export default route<StoreInterface>(function ({ Vue }) {
  Vue.use(VueRouter);

  Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach(isAuthenticated)
  Router.beforeEach(fetchedProfile)

  return Router;
})
