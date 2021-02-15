/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios, { AxiosResponse } from 'axios'
import { Ref, ref } from '@vue/composition-api'

import config from '../config/config'

//  Dummy data
// import projectsData from '../data/projects.data'
import { InterfaceCause } from 'src/interfaces'

/**
 * Fetches data. Should ideally be abstracted
 */
const fetchCauses = async (): Promise<InterfaceCause[]|undefined> => {
  try {
    if ('apiUrl' in config) {
      const response: AxiosResponse = await axios.get(`${config.apiUrl}/causes`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const causes: InterfaceCause[] = response.data
      return causes
    }
  } catch (error) {
    console.error(error)
  }
}

const fetchCause = async (id: string): Promise<InterfaceCause|undefined> => {
  try {
    if ('apiUrl' in config) {
      const response: AxiosResponse = await axios.get(`${config.apiUrl}/causes/${id}`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const cause: InterfaceCause = response.data

      return cause
    }
  } catch (error) {
    console.error(error)
  }
}

const state: Ref<InterfaceCause[]> = ref([])

const useCauses = () => {

  const getCauses = async ( ) => {
    const causes: InterfaceCause[] | undefined = await fetchCauses()

    if (causes === undefined) {
      console.error('Causess is undefined')
    } else {
      state.value = [...causes]
    }

    return causes
  }

  const getCause = async (id: string) => {
    const cause: InterfaceCause | undefined = await fetchCause(id)

    if (cause === undefined) {
      console.error(`Cause ${id} is undefined`)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const causes: InterfaceCause[] = JSON.parse(JSON.stringify(state.value))
      const causeIndex: number = causes.findIndex(currentCause => String(currentCause.id) === id)
      if (causeIndex === -1) {
        causes.push(cause)
      } else {
        causes[causeIndex] = cause
      }
      state.value = causes
    }

    return state.value
  }

  return {
    getCauses,
    getCause,
    state
  }
}

export {
  useCauses
}