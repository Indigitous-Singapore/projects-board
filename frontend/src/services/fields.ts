import axios, { AxiosResponse } from 'axios'
import { Ref, ref } from '@vue/composition-api'

import config from '../config/config'

import { InterfaceField } from 'src/interfaces'

/**
 * Fetches data. Should ideally be abstracted
 */
const fetchFields = async (): Promise<InterfaceField[]|undefined> => {
  try {
    if ('apiUrl' in config) {
      const response: AxiosResponse = await axios.get(`${config.apiUrl}/fields`)
      const fields: InterfaceField[] = response.data as InterfaceField[]
      return fields
    }
  } catch (error) {
    console.error(error)
  }
}

const fetchField = async (id: string): Promise<InterfaceField|undefined> => {
  try {
    if ('apiUrl' in config) {
      const response: AxiosResponse = await axios.get(`${config.apiUrl}/fields${id}`)
      const field: InterfaceField = response.data as InterfaceField

      return field
    }
  } catch (error) {
    console.error(error)
  }
}

const state: Ref<InterfaceField[]> = ref([])

const useFields = () => {

  const getFields = async ( ) => {
    const fields: InterfaceField[] | undefined = await fetchFields()

    if (fields === undefined) {
      console.error('Fields are undefined')
    } else {
      state.value = [...fields]
    }

    return fields
  }

  const getField = async (id: string) => {
    const field: InterfaceField | undefined = await fetchField(id)

    if (field === undefined) {
      console.error(`Field ${id} is undefined`)
    } else {
      const fields: InterfaceField[] = JSON.parse(JSON.stringify(state.value)) as InterfaceField[]
      const fieldIndex: number = fields.findIndex(currentField => String(currentField.id) === id)
      if (fieldIndex === -1) {
        fields.push(field)
      } else {
        fields[fieldIndex] = field
      }
      state.value = fields
    }

    return state.value
  }

  return {
    getFields,
    getField,
    state
  }
}

export {
  useFields
}