/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { reactive, Ref, ref } from '@vue/composition-api'
import { AxiosResponse, AxiosError } from 'axios'
import { Plugins, StoragePlugin } from '@capacitor/core'
import axios from 'axios'

import { InterfaceAuthenticationErrors, InterfaceLoginError, InterfaceLoginResponse, InterfaceStateAuthenticationLogin } from 'src/interfaces'
import { Router } from 'src/router'
import { useUser } from './user'

const defaultAuthenticationLoginState: InterfaceStateAuthenticationLogin = {
  email: null,
  password: null,
}
const defaultAuthenticationErrors: InterfaceAuthenticationErrors = {
  email: null,
  password: null,
  passwordConfirmation: null,
  code: null,
  others: null,
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const Storage: StoragePlugin = Plugins.Storage

/**
 * Store the jwt into local storage
 */
const storeAuthenticationToken = async (jwt: string) => {
  await Storage.set({
    key: 'jwt',
    value: jwt
  })
}

/**
 * Get the jwt from local storage
 */
const getAuthenticationToken = async (): Promise<string|null> => {
  const token = await Storage.get({
    key: 'jwt'
  })

  return token.value
}

/**
 * Checks if the user is authenticated
 * 
 * @todo add more checks to verify the token's expiry and validity
 */
const isAuthenticated = async (): Promise<boolean> => {
  const jwt = await getAuthenticationToken()
  return jwt !== null && jwt !== undefined
}

const useAuthentication = () => { 
  const loading: Ref<boolean> = ref(false)
  const resetEmailSent: Ref<boolean> = ref(false)

  const errors: InterfaceAuthenticationErrors = reactive({
    ...defaultAuthenticationErrors
  })

  const state = reactive({
    ...defaultAuthenticationLoginState
  })

  /**
   * Reset Errors
   */
  const resetErrors = (): void => {
    errors.email = null
    errors.password = null
    errors.passwordConfirmation = null
    errors.code = null
  }

  /**
    * Saves the user profile via the service
    */
  const saveUserProfile = (user: InterfaceLoginResponse): void => {
    const { login } = useUser()
    void login(user)
  }

  /**
   * Redirects to the dashboard
   */
  const redirectToDashboard = (): void => {
    void Router.push('/dashboard')
  }

  /**
   * Login to the dashboard
   */
  const login = () => {
    resetErrors()
    loading.value = true

    axios
      .post(String(process.env.apiUrl) + '/auth/local', {
        identifier: state.email?.toLowerCase(),
        password: state.password,
      })
      .then((response: AxiosResponse) => {
        saveUserProfile(response.data)
        redirectToDashboard()
      })
      .catch((error: AxiosError) => {
        loading.value = false
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const loginErrors: InterfaceLoginError = (error.response && error.response.data) ? error.response.data : null

        if (loginErrors !== null) {
          for (const single of loginErrors.data) {
            for (const message of single.messages) {
              switch (message.id) {
                case 'Auth.form.error.email.provide':
                  errors.email = message.message
                  break
                case 'Auth.form.error.invalid':
                case 'Auth.form.error.password.provide':
                  errors.password = message.message
                  break
                case 'Auth.form.error.confirmed':
                  errors.others = `${message.message}<br/><small><a href="/verify-email?email=${String(state.email)}">Resend Email?</a></small>`
                  break
                default:
                  errors.others = message.message
                  break
              }
            }
          }
        }
      })
  }

  /**
   * Reset Password
   */
  const resetPassword = (
    code: string,
    password: string,
    passwordConfirmation: string,
  ) => {
    resetErrors()
    loading.value = true

    axios
      .post(String(process.env.apiUrl) + '/auth/reset-password', {
        code,
        password,
        passwordConfirmation,
      })
      .then((response: AxiosResponse) => {
        saveUserProfile(response.data)
        redirectToDashboard()
      })
      .catch((error: AxiosError) => {
        console.error(error.response?.data?.data[0].messages[0])
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        errors.passwordConfirmation = error.response?.data?.data[0].messages[0].message
        loading.value = false
      })
  }

  /**
   * Forgot Password
   */
  const forgotPassword = (email: string) => {
    resetErrors()
    loading.value = true

    axios
      .post(String(process.env.apiUrl) + '/auth/forgot-password', {
        email: email.toLowerCase()
      })
      .then((response: AxiosResponse) => {
        console.log(response)
        resetEmailSent.value = true
      })
      .catch((error: AxiosError) => {
        console.error(error)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    errors,
    forgotPassword,
    loading,
    login,
    resetEmailSent,
    resetPassword,
    state,
    storeAuthenticationToken
  }
}

export {
  useAuthentication,
  isAuthenticated,
  storeAuthenticationToken,
  getAuthenticationToken
}