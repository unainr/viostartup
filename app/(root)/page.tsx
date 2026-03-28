import HomeView from '@/modules/home/ui/views/home-view'
import { client } from '@/sanity/lib/client'
import { CASE_STUDIES_QUERY } from '@/sanity/lib/queries'

export const revalidate = 60 // revalidate every minute

export default async function Home() {
  const projects = await client.fetch(CASE_STUDIES_QUERY)

  return (
    <>
      <HomeView projects={projects} />
    </>
  )
}
