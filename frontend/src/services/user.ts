import Vue from 'vue'
import VueCompositionAPI, { Ref, ref } from '@vue/composition-api'
import axios from 'axios'
import { Plugins, StoragePlugin } from '@capacitor/core'

import { InterfaceLoginResponse, InterfaceUser } from 'src/interfaces'
import { storeAuthenticationToken, getAuthenticationToken } from './authentication'

Vue.use(VueCompositionAPI)

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const Storage: StoragePlugin = Plugins.Storage

const defaultUser: InterfaceUser = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  displayPictureUrl: null,
  username: null,
  created_at: null,
  updated_at: null,
}

const user: Ref<InterfaceUser|null> = ref({...defaultUser})

const useUser = () => {

  const populateUser = (loggedInUser: InterfaceUser) => {
    let newUser: InterfaceUser|null = null
    newUser = {...loggedInUser}
    newUser.displayPictureUrl = 'https://api.adorable.io/avatars/500/' + String(newUser.email) + '.png'

    user.value = {...newUser}
  }

  /**
   * logs in a user
   */
  const login = async (loginResponse: InterfaceLoginResponse) => {
    if (loginResponse.jwt !== null) {
      await storeAuthenticationToken(loginResponse.jwt)
    }
    populateUser(loginResponse.user)
  }

  /**
   * logs out a user
   */
  const logout = async () => {
    await Storage.clear()
    user.value = {...defaultUser}
  }


  /**
   * Fetch profile
   */
  const getProfile = async (): Promise<void> => {
    const token: string|null = await getAuthenticationToken()

    if (token) {
      const response = await axios
        .get(String(process.env.apiUrl) + '/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        populateUser(response.data)
    }

    return
  }

  return {
    login,
    logout,
    getProfile,
    user
  }
}

export {
  useUser
}