// ** Type Imports
import { NavLink, LayoutProps, NavSectionTitle } from 'src/@core/layouts/types'

// ** Custom Menu Components
import VerticalNavLink from './VerticalNavLink'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'
import {
  Accordion,
  AccordionSummary,
  Box,
  BoxProps,
  Button,
  Collapse,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import { ElementType, FunctionComponent, memo, useState } from 'react'
import CanViewNavLink from 'src/layouts/components/acl/CanViewNavLink'
import { useRouter } from 'next/router'
import CircleIcon from '@mui/icons-material/Circle'
import Avatar from 'src/@core/components/mui/avatar'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'

interface NavItemProps {
  data: NavLink
}

const NavItem: FunctionComponent<NavItemProps> = ({ data }) => {
  const router = useRouter()
  const isNavLinkActive = router.asPath.includes(data.path)

  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          if (data.children?.length !== 0) {
            setOpen(prev => !prev)
          } else {
            // router.push()
          }
        }}
        sx={{
          justifyContent: 'start',
          gap: 3,
          bgcolor: isNavLinkActive ? 'rgba(102, 108, 255, 0.1)' : 'transparent'
        }}
      >
        <Box
          sx={{
            borderLeft: 5,
            borderColor: 'primary.main',
            width: 4,
            height: '100%',
            borderRadius: 5
          }}
        />

        <Typography
          variant='button'
          sx={{
            textTransform: 'none',
            fontSize: 12,
            fontWeight: 500
          }}
        >
          {data.title}
        </Typography>

        {Number(data.children?.length) > 0 && (
          <>
            <ArrowRightOutlinedIcon
              color='primary'
              sx={{
                ml: 'auto',
                transition: '0.2s',
                rotate: open ? '90deg' : '0deg'
              }}
              fontSize='small'
            />
          </>
        )}
      </Button>

      {Number(data.children?.length) > 0 && (
        <>
          <Collapse in={open}>
            <Stack>
              {data.children?.map((item, index) => {
                return <NavItem key={index} data={item} />
              })}
            </Stack>
          </Collapse>
        </>
      )}
    </>
  )
}

interface Props {
  navHover?: boolean
  navVisible?: boolean
  groupActive: string[]
  currentActiveGroup: string[]
  navigationBorderWidth: number
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  setGroupActive: (value: string[]) => void
  setCurrentActiveGroup: (item: string[]) => void
  verticalNavItems?: LayoutProps['verticalLayoutProps']['navMenu']['navItems']
  parent?: boolean
  collapsedNavWidth: number
  toggleNavVisibility: () => void
}

const VerticalNavItems = (props: Props) => {
  // ** Props
  const { verticalNavItems } = props
  const router = useRouter()

  const [selected, setSelected] = useState<NavLink>()

  const expanded = selected && (selected?.children || [])?.length !== 0

  const Icon = selected?.icon || CircleIcon

  return (
    <>
      <Stack
        direction={'row'}
        sx={{
          height: '100dvh'
        }}
      >
        <Stack sx={{ width: expanded ? 'auto' : '100%' }}>
          {verticalNavItems?.map((item, index) => {
            const isNavLinkActive = router.asPath.includes(item.path)

            const Icon = item.icon

            return (
              <CanViewNavLink key={index} navLink={item}>
                <Button
                  disableElevation
                  onClick={() => {
                    if (item.children?.length !== 0) {
                      setSelected(item)
                    }
                  }}
                  color={isNavLinkActive ? 'primary' : 'inherit'}
                  disabled={item.disabled || false}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'start',
                    textTransform: 'none',
                    gap: 3,
                    borderRadius: 0,
                    flexDirection: expanded ? 'column' : 'row',
                    maxWidth: expanded ? '80px' : '100%'
                  }}
                >
                  {expanded ? (
                    <>
                      <Icon />
                    </>
                  ) : (
                    <>
                      <Avatar color={isNavLinkActive ? 'primary' : 'secondary'} variant='rounded' skin='light'>
                        <Icon />
                      </Avatar>
                    </>
                  )}

                  {!expanded ? (
                    <>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: 13,
                          color: isNavLinkActive ? 'primary.main' : 'text.primary'
                        }}
                      >
                        {item.title}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: 12,
                          textTransform: 'none',
                          color: isNavLinkActive ? 'primary.main' : 'text.primary'
                        }}
                      >
                        {item.shortTitle || item.title}
                      </Typography>
                    </>
                  )}

                  {/* </MenuNavLink> */}
                </Button>
              </CanViewNavLink>
            )
          })}
        </Stack>

        {/* children */}
        {expanded && (
          <>
            <Stack
              sx={{
                borderLeft: 1,
                borderColor: 'divider',
                height: '100%',
                width: '100%'
              }}
            >
              {/* header */}
              <Stack
                direction={'row'}
                alignItems={'center'}
                sx={{
                  gap: 3,
                  p: 2,
                  borderBottom: 1,
                  borderColor: 'divider'
                }}
              >
                <Icon
                  sx={{
                    fontSize: 50
                  }}
                />

                <Stack>
                  <Typography
                    variant='button'
                    sx={{
                      textTransform: 'none',
                      fontWeight: 700
                    }}
                  >
                    {selected.title}
                  </Typography>

                  <Typography variant='caption'>{selected.caption || ''}</Typography>
                </Stack>
              </Stack>

              {/* list */}
              <Stack
                sx={{
                  p: 2,
                  gap: 0.5
                }}
              >
                {selected.children?.map((item, index) => {
                  return <NavItem key={index} data={item} />
                })}
              </Stack>
            </Stack>
          </>
        )}
      </Stack>
    </>
  )
}

export default memo(VerticalNavItems)
