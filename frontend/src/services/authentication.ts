import { reactive } from '@vue/composition-api'

import { InterfaceStateAuthenticationLogin } from 'src/interfaces'

const defaultAuthenticationLoginState: InterfaceStateAuthenticationLogin = {
  email: null,
  password: null,
}

const state = reactive({
  ...defaultAuthenticationLoginState
})

const useAuthentication = () => {
  const login = () => {
    console.log(state.email)
    console.log(state.password)

    state.email = defaultAuthenticationLoginState.email
    state.password = defaultAuthenticationLoginState.password
  }

  return {
    login,
    state
  }
}

export {
  useAuthentication
}