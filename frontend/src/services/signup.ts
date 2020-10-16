import { reactive, ref, Ref } from '@vue/composition-api'
import axios, { AxiosError, AxiosResponse } from 'axios'

import { InterfaceLoginResponse, InterfaceStateSignup } from 'src/interfaces'
import { Router } from '../router/index'
import { useUser } from './user'

const defaultState: InterfaceStateSignup = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordconfirm: null,
}

const state: InterfaceStateSignup = reactive({
  ...defaultState
})
const errors: InterfaceStateSignup = reactive({
  ...defaultState
})
const loading: Ref<boolean> = ref(false)

const useSignup = () => {
  const reset = (): void => {
    state.firstName = defaultState.firstName,
    state.lastName = defaultState.lastName
    state.email = defaultState.email
    state.password = defaultState.password
    state.passwordconfirm = defaultState.passwordconfirm
  }
  const resetErrors = (): void => {
    errors.firstName = null
    errors.lastName = null
    errors.email = null
    errors.password = null
    errors.passwordconfirm = null
  }

  const signupValidation = (): boolean => {
    resetErrors()
    
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (state.firstName === null) {
      errors.firstName = 'Is required'
    }
    if (state.lastName === null) {
      errors.lastName = 'Is required'
    }
    if (!emailRegex.test(String(state.email).toLowerCase())) {
      errors.email = 'Must be an email'
    }
    if (state.password === null || state.password.length <= 8) {
      errors.password = 'Is required and be longer than 8 characters'
    }
    if (state.passwordconfirm !== state.password) {
      errors.passwordconfirm = 'Must be same as password'
    }

    return errors.email === null && errors.password === null && errors.passwordconfirm === null
  }

  /**
   * Saves the user profile via the service
   */
  const saveUserProfile = async (user: InterfaceLoginResponse): Promise<void> => {
    const { login } = useUser()
    await login(user)
  }

  const redirectToDashboard = (): void => {
    void Router.push('/dashboard')
  }

  /**
   * Signs up the user
   */
  const signup = () => {
    if (signupValidation()) {
      resetErrors()
    } else {
      return
    }

    loading.value = true

    axios
      .post(String(process.env.apiUrl) + 'auth/local/register', {
        firstName: state.firstName,
        lastName: state.lastName,
        username: state.email?.toLowerCase(),
        email: state.email?.toLowerCase(),
        password: state.password,
      })
      .then((response: AxiosResponse) => {
        reset()
        void saveUserProfile(response.data)
        redirectToDashboard()
      })
      .catch((error: AxiosError) => {
        loading.value = false
        // Handle error.
        console.log('An error occurred:', error.response)
      })
  }

  return {
    errors,
    loading,
    signup,
    state
  }
}

export {
  useSignup
}