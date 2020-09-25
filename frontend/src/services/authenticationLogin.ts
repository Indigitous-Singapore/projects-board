import { reactive } from '@vue/composition-api'

import { InterfaceStateAuthenticationLogin } from 'src/interfaces'

const defaultState: InterfaceStateAuthenticationLogin = {
  email: null,
  password: null,
}

const state = reactive({
  ...defaultState
})

const useAuthenticationLogin = () => {
  const login = () => {
    console.log(state.email)
    console.log(state.password)

    state.email = defaultState.email
    state.password = defaultState.password
  }

  return {
    login,
    state
  }
}

export {
  useAuthenticationLogin
}