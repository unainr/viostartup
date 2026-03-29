import { CaseStudiesView } from '@/modules/case-studies/ui/views/case-studies-view'
import { client } from '@/sanity/lib/client'
import { CASE_STUDIES_QUERY } from '@/sanity/lib/queries'


const CaseStudiesPage = async () => {
  const projects = await client.fetch(CASE_STUDIES_QUERY)

  return <CaseStudiesView projects={projects} />
}

export default CaseStudiesPage

export const revalidate = 60
