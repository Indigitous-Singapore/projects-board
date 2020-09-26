import { reactive } from '@vue/composition-api'

import { InterfaceUser } from 'src/interfaces'

const user: InterfaceUser = reactive({
  id: null,
  token: null,
  firstName: null,
  lastName: null,
  email: null,
  displayPictureUrl: null,
})

setTimeout(() => {
  user.token = 'asdsadad'
  user.firstName = 'Aaron'
  user.lastName = 'Lee'
  user.email = 'aaronstevensonlee@gmail.com'
  user.displayPictureUrl = 'https://api.adorable.io/avatars/285/aaron@stevenson.png'
}, 3000)

const useUser = () => {
  /**
   * Checks if the user is authenticated
   * 
   * @todo add more checks to verify the token's expiry and validity
   */
  const isAuthenticated = () => {
    return user.token !== null
  }

  return {
    isAuthenticated,
    user
  }
}

export {
  useUser
}