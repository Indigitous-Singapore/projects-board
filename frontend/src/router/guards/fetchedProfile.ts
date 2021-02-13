/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Vue from 'vue'
import { Route, NavigationGuardNext } from 'vue-router'
import VueCompositionApi from '@vue/composition-api'

import { useUser } from '../../services/user'
import { AxiosError } from 'axios'

Vue.use(VueCompositionApi)

export default async (to: Route, from: Route, next: NavigationGuardNext) => {
  const { getProfile, logout } = useUser()
  
  try {
    await getProfile()
  } catch (error) {
    const profileError: AxiosError = (error as AxiosError)
    console.error(profileError.response)
    
    alert(`${profileError.response?.data.error}\nPlease login again`)
    await logout()

    next('/login')
  }
  
  next()
}