import { HeaderNav } from '@/components/layouts/main-header'
import { Footer } from '@/components/shared/footer'
import { LayoutTypes } from '@/types'

const Layout = ({children}:LayoutTypes) => {
  return (
    <>
    <HeaderNav/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout