'use client'

import { colors } from '@sportspot/tokens'
import { Flex, Icons, NextChakra } from '@sportspot/ui'
import { useSelectedLayoutSegment } from 'next/navigation'

import { publicRoutes } from '~/config/public-routes'

const links = [
  {
    path: '/',
    icon: <Icons.search />,
    activeIcon: <Icons.search color={colors.secondary} aria-label="search for spots" />,
    targetSegment: null,
  },
  {
    path: '/my-spots',
    icon: <Icons.pinGlobal />,
    activeIcon: <Icons.pinGlobal color={colors.secondary} aria-label="manage spots" />,
    targetSegment: 'my-spots',
  },
  {
    path: '/favorites',
    icon: <Icons.heart />,
    activeIcon: <Icons.heart color={colors.secondary} aria-label="favorites spots" />,
    targetSegment: 'favorites',
  },
  {
    path: '/profile',
    icon: <Icons.user />,
    activeIcon: <Icons.user color={colors.secondary} aria-label="see profile" />,
    targetSegment: 'profile',
  },
]

const BottomNavigation = () => {
  const activeSegment = useSelectedLayoutSegment()

  const isPublicRoute = publicRoutes.includes(`/${activeSegment}` ?? '')

  if (isPublicRoute) {
    return null
  }

  return (
    <Flex
      zIndex="sticky"
      w="min(90%, 360px)"
      h="54px"
      background="senary"
      boxShadow="base"
      position="fixed"
      bottom="12px"
      left="0"
      right="0"
      mx="auto"
      borderRadius="2xl"
      alignItems="center"
      paddingX="5"
      justifyContent="space-between"
    >
      {links.map(({ path, icon, activeIcon, targetSegment }) => {
        const isActive = activeSegment === targetSegment

        return (
          <NextChakra.Link
            href={path}
            key={path}
            aria-label={isActive ? 'Active' : 'Inactive'}
            {...(isActive && {
              _before: {
                content: '""',
                position: 'absolute',
                bottom: '0',
                top: '0',
                background: 'primary',
                transform: 'translateY(20%) translateX(-18%);',
                borderRadius: '2xl',
                zIndex: '-1',
                width: '38px',
                height: '38px',
              },
            })}
          >
            {isActive ? activeIcon : icon}
          </NextChakra.Link>
        )
      })}
    </Flex>
  )
}

export default BottomNavigation
