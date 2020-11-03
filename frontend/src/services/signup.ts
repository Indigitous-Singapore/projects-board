import { reactive, ref, Ref } from '@vue/composition-api'
import axios, { AxiosError } from 'axios'

import { InterfaceSignupErrors, InterfaceLoginError, InterfaceStateSignup } from 'src/interfaces'

const defaultState: InterfaceStateSignup = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordconfirm: null,
}
const defaultSignupErrors: InterfaceSignupErrors = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordconfirm: null,
  others: null,
}

const state: InterfaceStateSignup = reactive({
  ...defaultState
})
const errors: InterfaceSignupErrors = reactive({
  ...defaultSignupErrors
})

const loading: Ref<boolean> = ref(false)
const completed: Ref<boolean> = ref(false)

const useSignup = () => {
  const reset = (): void => {
    state.firstName = defaultState.firstName
    state.lastName = defaultState.lastName
    // state.email = defaultState.email
    state.password = defaultState.password
    state.passwordconfirm = defaultState.password
  }
  const resetErrors = (): void => {
    errors.firstName = null
    errors.lastName = null
    errors.email = null
    errors.password = null
    errors.passwordconfirm = null
    errors.others = null
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(String(email).toLowerCase())
  }

  const signupValidation = (): boolean => {
    resetErrors()

    if (state.firstName === null) {
      errors.firstName = 'Is required'
    }
    if (state.lastName === null) {
      errors.lastName = 'Is required'
    }
    if (!validateEmail(String(state.email))) {
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
   * Sends email verification
   */
  const sendEmailVerification = (email: string) => {
    if (!validateEmail(email)) {
      return
    }

    completed.value = false
    loading.value = true

    axios
      .post(String(process.env.apiUrl) + '/auth/send-email-confirmation', {
        email: email.toLowerCase(),
      })
      .then(() => {
        completed.value = true
      })
      .catch((error: AxiosError) => {
        console.log(error.response)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const loginErrors: InterfaceLoginError = (error.response && error.response.data) ? error.response.data : null

        if (loginErrors !== null) {
          for (const single of loginErrors.data) {
            for (const message of single.messages) {
              switch (message.id) {
                default:
                  errors.others = message.message
                  break
              }
            }
          }
        }
      })
      .finally(() => {
        loading.value = false
        resetErrors
      })
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
      .post(String(process.env.apiUrl) + '/auth/local/register', {
        firstName: state.firstName,
        lastName: state.lastName,
        username: state.email?.toLowerCase(),
        email: state.email?.toLowerCase(),
        password: state.password,
      })
      .then(() => {
        completed.value = true
        reset()
      })
      .catch((error: AxiosError) => {
        // Handle error.
        console.log('An error occurred:', error.response)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    completed,
    errors,
    loading,
    sendEmailVerification,
    signup,
    state
  }
}

export {
  useSignup
}