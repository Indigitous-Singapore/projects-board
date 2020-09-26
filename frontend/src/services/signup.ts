import { reactive } from '@vue/composition-api'

import { InterfaceStateSignup } from 'src/interfaces'

const defaultState: InterfaceStateSignup = {
  name: null,
  email: null,
  password: null,
  passwordconfirm: null,
}

const state: InterfaceStateSignup = reactive({
  ...defaultState
})

const useSignup = () => {
  const signup = () => {
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
  useSignup
}