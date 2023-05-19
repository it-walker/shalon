import React from 'react'
import { RouteType } from '../../routes/config'
import { useSelector } from 'react-redux'
import { Button, Icon } from '@aws-amplify/ui-react'
import { RootState } from '../../redux/store'

type Props = {
  item: RouteType
}

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState)

  return (
    item.sidebarProps && item.path ? (
      <Button>
        {item.sidebarProps.displayText}
      </Button>
    ) : null
  )
}

export default SidebarItem