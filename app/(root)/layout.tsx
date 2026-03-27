import { HeaderNav } from '@/components/layouts/main-header'
import { LayoutTypes } from '@/types'

const Layout = ({children}:LayoutTypes) => {
  return (
    <>
    <HeaderNav/>
    {children}
    </>
  )
}

export default Layout