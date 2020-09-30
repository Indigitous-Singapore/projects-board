import { reactive } from '@vue/composition-api'

import { InterfaceLoginResponse, InterfaceUser } from 'src/interfaces'

const user: InterfaceUser = reactive({
  id: null,
  jwt: null,
  firstName: null,
  lastName: null,
  email: null,
  displayPictureUrl: null,
})

const useUser = () => {
  /**
   * logs in a user
   */
  const login = (loginResponse: InterfaceLoginResponse) => {
    user.id = loginResponse.user.id
    user.jwt = loginResponse.jwt
    user.firstName = loginResponse.user.firstName
    user.lastName = loginResponse.user.lastName
    user.email = loginResponse.user.email
    user.displayPictureUrl = "https://api.adorable.io/avatars/500/" + String(user.email) + ".png"
  }

  /**
   * Checks if the user is authenticated
   * 
   * @todo add more checks to verify the token's expiry and validity
   */
  const isAuthenticated = () => {
    return user.jwt !== null
  }

  return {
    login,
    isAuthenticated,
    user
  }
}

export {
  useUser
}