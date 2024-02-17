import { useState } from 'react'
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { navigationItems } from 'src/layouts/navigation'

const ServerSideNavItems = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuItems, setMenuItems] = useState<VerticalNavItemsType>(navigationItems)

  return menuItems
}

export default ServerSideNavItems
