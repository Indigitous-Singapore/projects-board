import { reactive } from '@vue/composition-api'
import axios from 'axios'
import { Plugins, StoragePlugin } from '@capacitor/core'

import { InterfaceLoginResponse, InterfaceUser } from 'src/interfaces'
import { storeAuthenticationToken, getAuthenticationToken } from './authentication'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const Storage: StoragePlugin = Plugins.Storage

const useUser = () => {
  const user: InterfaceUser = reactive({
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    displayPictureUrl: null,
    username: null,
    created_at: null,
    updated_at: null,
  })

  const populateUser = (loggedInUser: InterfaceUser) => {
    user.id = loggedInUser.id
    user.firstName = loggedInUser.firstName
    user.lastName = loggedInUser.lastName
    user.email = loggedInUser.email
    user.displayPictureUrl = 'https://api.adorable.io/avatars/500/' + String(user.email) + '.png'
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
    user.id = null
    user.firstName = null
    user.lastName = null
    user.email = null
    user.displayPictureUrl = null
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