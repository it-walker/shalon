import { Avatar, Drawer, List, Stack, Toolbar } from '@mui/material'
import React from 'react'
import sizeConfigs from '../../configs/sizeConfigs'
import colorConfigs from '../../configs/colorConfigs'
import appRoutes from '../../routes/appRoutes'
import SidebarItemCollapse from './SidebarItemCollapse'
import SidebarItem from './SidebarItem'
import assets from '../../assets'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Avatar src={assets.images.logo}/>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index}/>
            )
          ): null
        ))}
      </List>
    </Drawer>
    
  )
}

export default Sidebar