import { reactive } from '@vue/composition-api'

import { InterfaceStateAuthenticationSignup } from 'src/interfaces'

const defaultState: InterfaceStateAuthenticationSignup = {
  name: null,
  email: null,
  password: null,
  passwordconfirm: null,
}

const state = reactive({
  ...defaultState
})

const useAuthenticationSignup = () => {
  const signup = () => {
    console.log(state.name)
    console.log(state.email)
    console.log(state.password)
    console.log(state.passwordconfirm)

    state.email = defaultState.email
    state.password = defaultState.password
    state.name = defaultState.name
    state.passwordconfirm = defaultState.passwordconfirm
  }

  return {
    signup,
    state
  }
}

export {
  useAuthenticationSignup
}