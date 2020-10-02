import Vue from 'vue'
import { Route, NavigationGuardNext } from 'vue-router'
import VueCompositionApi from '@vue/composition-api'

import { isAuthenticated } from '../../services/authentication'
import { useUser } from '../../services/user'

Vue.use(VueCompositionApi)

export default async (to: Route, from: Route, next: NavigationGuardNext) => {
  const { getProfile } = useUser()
  const authenticated = await isAuthenticated()
  
  await getProfile()
  
  next()
}