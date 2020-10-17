import axios, { AxiosResponse } from 'axios'
import { reactive } from '@vue/composition-api'

import config from '../config/config'

//  Dummy data
// import projectsData from '../data/projects.data'
import { InterfaceProject, InterfaceStateProjects } from 'src/interfaces'

const packageProject = (project: InterfaceProject) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const packagedProject: InterfaceProject = JSON.parse(JSON.stringify(project))

  if(packagedProject.user.displayPictureUrl === null) {
    packagedProject.user.displayPictureUrl = {
      url: `https://api.adorable.io/avatars/500/${packagedProject.user.email || 'example@example.com'}@adorable.png`
    }
  }
  return packagedProject
}

/**
 * Fetches data. Should ideally be abstracted
 */
const fetchProjects = async (
    fields = ['all'],
    causes = ['all']
  ): Promise<InterfaceProject[]|undefined> => {
  try {
    if ('apiUrl' in config) {
      //  creates the query
      let query = ''
      if (fields.indexOf('all') === -1) {
        query += 'fields=' + fields.join(',') + '&'
      }
      if (causes.indexOf('all') === -1) {
        query += 'causes=' + causes.join(',') + '&'
      }

      const response: AxiosResponse = await axios.get(`${config.apiUrl}/projects?${query}`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const projects: InterfaceProject[] = response.data
      const packagedProjects: InterfaceProject[] = projects.map((project: InterfaceProject) => {
        return packageProject(project)
      })

      return packagedProjects
    }
  } catch (error) {
    console.error(error)
  }
}

const fetchProject = async (id: string): Promise<InterfaceProject|undefined> => {
  try {
    if ('apiUrl' in config) {
      const response: AxiosResponse = await axios.get(`${config.apiUrl}/projects/${id}`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const project: InterfaceProject = response.data

      return packageProject(project)
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

  const getProjects = async (
      fields: string[] = ['all'],
      causes: string[] = ['all'],
    ) => {
    const projects: InterfaceProject[] | undefined = await fetchProjects(fields, causes)

    if (projects === undefined) {
      console.error('Projects is undefined')
    } else {
      state.projects = [...projects]
      console.log(state)
    }

    return projects
  }

  const getProject = async (id: string) => {
    const project: InterfaceProject | undefined = await fetchProject(id)

    if (project === undefined) {
      console.error(`Project ${id} is undefined`)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const projects: InterfaceProject[] = JSON.parse(JSON.stringify(state.projects))
      const projectIndex: number = projects.findIndex(currentProject => String(currentProject.id) === id)
      if (projectIndex === -1) {
        projects.push(project)
      } else {
        projects[projectIndex] = project
      }
      state.projects = projects
    }

    return {
      ...state.projects
    }
  }

  return {
    getProjects,
    getProject,
    state
  }
}

export {
  useProjects
}