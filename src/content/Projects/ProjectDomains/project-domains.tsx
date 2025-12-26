import { ProjectDirectory } from './project-directory'
import { computeDomainTabs } from './domain-utils'
import { ProjectDomainsClient } from './project-domains-client'

export function ProjectDomains() {
  const domainList = computeDomainTabs(ProjectDirectory)
  return <ProjectDomainsClient domainList={domainList} />
}
