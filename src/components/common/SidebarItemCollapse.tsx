import React, { useEffect, useState } from 'react'
import { RouteType } from '../../routes/config'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Button } from '@aws-amplify/ui-react'

type Props = {
  item: RouteType
}

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false)
  const { appState } = useSelector((state: RootState) => state.appState)

  useEffect(() => {
    if (appState.includes(item.state)) {
      setOpen(true)
    }
  }, [appState, item])
  return (
    item.sidebarProps ? (
      <>
        <Button>
          {item.sidebarProps.displayText}
        </Button>
      </>
    ) : null
  )
}

export default SidebarItemCollapse