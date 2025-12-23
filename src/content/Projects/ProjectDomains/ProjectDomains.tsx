import { ProjectDirectory } from './project-directory'
import { computeDomainTabs } from './utils'
import { ProjectDomainsClient } from './ProjectDomainsClient'

export function ProjectDomains() {
  const domainList = computeDomainTabs(ProjectDirectory)
  return <ProjectDomainsClient domainList={domainList} />
}
