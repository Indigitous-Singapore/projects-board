/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios, { AxiosResponse } from 'axios'
import { reactive } from '@vue/composition-api'
import md5 from 'md5'
import _ from 'lodash'
import qs from 'qs'

import config from '../config/config'
import { markdownToHtml } from '../utilities/html'

//  Dummy data
// import projectsData from '../data/projects.data'
import { InterfaceProject, InterfaceStateProjects } from 'src/interfaces'

const packageProject = (project: InterfaceProject) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const packagedProject: InterfaceProject = JSON.parse(JSON.stringify(project))

  //  Set user display picture url
  if(packagedProject.user.displayPictureUrl === null) {
    packagedProject.user.displayPictureUrl = {
      url: `https://www.gravatar.com/avatar/${md5(packagedProject.user.email || 'example@example.com')}`
    }
  }

  //  convert markdown to html
  packagedProject.aboutOurStory = markdownToHtml(packagedProject.aboutOurStory)
  packagedProject.aboutCommitment = markdownToHtml(packagedProject.aboutCommitment)
  packagedProject.aboutWhatWeDo = markdownToHtml(packagedProject.aboutWhatWeDo)
  packagedProject.faqs = markdownToHtml(packagedProject.faqs)

  return packagedProject
}

/**
 * Fetches data. Should ideally be abstracted
 */
const fetchProjects = async (
    fields = ['all'],
    causes = ['all'],
    displayed = true,
    userId = null
  ): Promise<InterfaceProject[]|undefined> => {
  try {
    if ('apiUrl' in config) {
      //  creates the query
      const queryOptions: Record<string, any> = {
        _where : [
          { displayed, },
        ]
      }
      if (userId !== null && userId !== undefined) {
        queryOptions._where.push({
          'user.id': userId,
        })
      }
      if (fields.indexOf('all') === -1) {
        queryOptions._where.push({
          fields,
        })
      }
      if (causes.indexOf('all') === -1) {
        queryOptions._where.push({
          causes,
        })
      }

      const response: AxiosResponse = await axios.get(`${config.apiUrl}/projects?${qs.stringify(queryOptions)}`)
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
      displayed = true,
      userId = null
    ) => {
    const projects: InterfaceProject[] | undefined = await fetchProjects(
      fields,
      causes,
      displayed,
      userId,
    )

    if (projects === undefined) {
      console.error('Projects is undefined')
    } else {
      state.projects = [...projects]
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