import axios, { AxiosResponse } from 'axios'
import { Ref, ref } from '@vue/composition-api'

import config from '../config/config'

import { InterfaceSkill } from 'src/interfaces'

/**
 * Fetches data. Should ideally be abstracted
 */
const fetchSkills = async (): Promise<InterfaceSkill[]|undefined> => {
  try {
    if ('apiUrl' in config) {
      const response: AxiosResponse = await axios.get(`${config.apiUrl}/skills`)
      const skills: InterfaceSkill[] = response.data as InterfaceSkill[]
      return skills
    }
  } catch (error) {
    console.error(error)
  }
}

const fetchSkill = async (id: string): Promise<InterfaceSkill|undefined> => {
  try {
    if ('apiUrl' in config) {
      const response: AxiosResponse = await axios.get(`${config.apiUrl}/skills${id}`)
      const skill: InterfaceSkill = response.data as InterfaceSkill

      return skill
    }
  } catch (error) {
    console.error(error)
  }
}

const state: Ref<InterfaceSkill[]> = ref([])

const useSkills = () => {

  const getSkills = async ( ) => {
    const skills: InterfaceSkill[] | undefined = await fetchSkills()

    if (skills === undefined) {
      console.error('Skills are undefined')
    } else {
      state.value = [...skills]
    }

    return skills
  }

  const getSkill = async (id: string) => {
    const skill: InterfaceSkill | undefined = await fetchSkill(id)

    if (skill === undefined) {
      console.error(`Skill ${id} is undefined`)
    } else {
      const skills: InterfaceSkill[] = JSON.parse(JSON.stringify(state.value)) as InterfaceSkill[]
      const skillIndex: number = skills.findIndex(currentSkill => String(currentSkill.id) === id)
      if (skillIndex === -1) {
        skills.push(skill)
      } else {
        skills[skillIndex] = skill
      }
      state.value = skills
    }

    return state.value
  }

  return {
    getSkills,
    getSkill,
    state
  }
}

export {
  useSkills
}