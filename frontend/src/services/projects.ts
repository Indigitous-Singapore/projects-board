import { reactive } from '@vue/composition-api'

//  Dummy data
import projectsData from '../data/projects.data'
import { InterfaceStateProjects } from 'src/interfaces'
import projects from '../data/projects.data'

const defaultState: InterfaceStateProjects = {
  projects: []
}

const state = reactive({
  ...defaultState
})

const useProjects = () => {


  const getProjects = () => {
    state.projects = [...projectsData]
    return projectsData
  }

  return {
    getProjects,
    state
  }
}

export {
  useProjects
}