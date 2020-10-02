import { reactive } from '@vue/composition-api'
import axios from 'axios'

import { InterfaceLoginResponse, InterfaceUser } from 'src/interfaces'
import { storeAuthenticationToken, getAuthenticationToken } from './authentication'

const useUser = () => {
  const user: InterfaceUser = reactive({
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    displayPictureUrl: null,
  })

  const populateUser = (loggedInUser: InterfaceUser) => {
    user.id = loggedInUser.id
    user.firstName = loggedInUser.firstName
    user.lastName = loggedInUser.lastName
    user.email = loggedInUser.email
    user.displayPictureUrl = "https://api.adorable.io/avatars/500/" + String(user.email) + ".png"
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
   * Fetch profile
   */
  const getProfile = async (): Promise<void> => {
    const token: string|null = await getAuthenticationToken()

    if (token) {
      const response = await axios
        .get(String(process.env.apiUrl) + 'users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })

        console.log(response.data )
        populateUser(response.data)
    }

    return
  }

  return {
    login,
    getProfile,
    user
  }
}

export {
  useUser
}