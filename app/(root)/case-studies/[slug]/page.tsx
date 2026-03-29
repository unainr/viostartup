
import { CaseStudyDetailView } from '@/modules/case-studies/ui/views/case-study-detail-view'
import { client } from '@/sanity/lib/client'
import { CASE_STUDY_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'


interface PageProps {
  params: Promise<{ slug: string }>
}

const CaseStudyPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = await client.fetch(CASE_STUDY_BY_SLUG_QUERY, { slug })

  if (!project) {
    notFound()
  }

  return <CaseStudyDetailView project={project} />
}

export default CaseStudyPage

export const revalidate = 60
