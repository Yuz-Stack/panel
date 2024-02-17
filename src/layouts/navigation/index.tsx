// ** Type import

import { VerticalNavItemsType } from 'src/@core/layouts/types'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

export const navigationItems = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: HomeOutlinedIcon,
      auth: false,
      children: [
        {
          title: 'Second Page',
          path: '/second-page',
          icon: 'mdi:email-outline',
          auth: false
        },
        {
          title: 'Second Page',
          path: '/second-page',
          icon: 'mdi:email-outline',
          auth: false
        }
      ]
    },
    {
      title: 'Object Storage',
      shortTitle: 'Storage',
      caption: 'S3 object storage',
      path: '/storage',
      icon: CloudOutlinedIcon,
      auth: false,
      children: [
        {
          title: 'Second Page',
          path: '/second-page',
          auth: false,
          children: [
            {
              title: 'Second Page',
              path: '/second-page',
              auth: false
            },
            {
              title: 'Second Page',
              path: '/second-page',
              auth: false
            }
          ]
        },
        {
          title: 'Second Page',
          path: '/second-page',
          icon: 'mdi:email-outline',
          auth: false
        },
        {
          title: 'Second Page',
          path: '/second-page',
          icon: 'mdi:email-outline',
          auth: false
        },
        {
          title: 'Second Page',
          path: '/second-page',
          icon: 'mdi:email-outline',
          auth: false
        }
      ]
    },
    {
      path: '/acl',
      action: 'read',
      shortTitle: 'acl',
      subject: 'acl-page',
      title: 'Access Control',
      icon: SecurityOutlinedIcon,
      auth: false
    }
  ]
}
