import axios, { AxiosResponse } from 'axios'
import { reactive } from '@vue/composition-api'
import Vue from 'vue'

import config from '../config/config'

//  Dummy data
// import projectsData from '../data/projects.data'
import { InterfaceProject, InterfaceStateProjects } from 'src/interfaces'

/**
 * Fetches data. Should ideally be abstracted
 */
const fetchProjects = async (): Promise<InterfaceProject[]|undefined> => {
  try {
    if ('apiUrl' in config) {
      const response: AxiosResponse = await axios.get(`${config.apiUrl}/projects`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const projects: InterfaceProject[] = response.data

      return projects
    }
  } catch (error) {
    console.error(error)
  }
}

const defaultState: InterfaceStateProjects = {
  projects: []
}

const state = reactive({
  ...defaultState
})

const useProjects = () => {

  const getProjects = async () => {
    const projects: InterfaceProject[] | undefined = await fetchProjects()

    if (projects === undefined) {
      console.error('Projects is undefined')
    } else {
      state.projects = [...projects]
      console.log(state)
    }

    return projects
  }

  return {
    getProjects,
    state
  }
}

export {
  useProjects
}