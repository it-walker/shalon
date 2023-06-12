// import { Avatar, Drawer, List, Stack, Toolbar } from '@mui/material'
import React from 'react'
import {
  Expander,
  // ExpanderItem
} from '@aws-amplify/ui-react'
// import sizeConfigs from '../../configs/sizeConfigs'
// import colorConfigs from '../../configs/colorConfigs'
import appRoutes from '../../routes/appRoutes'
import sizeConfigs from '../../configs/sizeConfigs'
import SidebarItemCollapse from './SidebarItemCollapse'
import SidebarItem from './SidebarItem'
// import SidebarItemCollapse from './SidebarItemCollapse'
// import SidebarItem from './SidebarItem'
// import assets from '../../assets'

function Sidebar() {
  return (
    <Expander type="multiple" width={sizeConfigs.sidebar.width}>
      {appRoutes.map((route, index) =>
        // eslint-disable-next-line no-nested-ternary
        route.sidebarProps ? (
          route.child ? (
            // eslint-disable-next-line react/no-array-index-key
            <SidebarItemCollapse item={route} key={index} />
          ) : (
            // eslint-disable-next-line react/no-array-index-key
            <SidebarItem item={route} key={index} />
          )
        ) : //   <ExpanderItem title={route.sidebarProps.displayText} value={index.toString()} />
        // ) : (
        //   <ExpanderItem title={route.sidebarProps.displayText} value={index.toString()} />
        // )
        null
      )}
    </Expander>
  )
}
// function Sidebar() {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: sizeConfigs.sidebar.width,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: sizeConfigs.sidebar.width,
//           boxSizing: 'border-box',
//           borderRight: '0px',
//           backgroundColor: colorConfigs.sidebar.bg,
//           color: colorConfigs.sidebar.color,
//         },
//       }}
//     >
//       <List disablePadding>
//         <Toolbar sx={{ marginBottom: '20px' }}>
//           <Stack sx={{ width: '100%' }} direction="row" justifyContent="center">
//             <Avatar src={assets.images.logo} />
//           </Stack>
//         </Toolbar>
//         {appRoutes.map((route, index) =>
//           // eslint-disable-next-line no-nested-ternary
//           route.sidebarProps ? (
//             route.child ? (
//               // eslint-disable-next-line react/no-array-index-key
//               <SidebarItemCollapse item={route} key={index} />
//             ) : (
//               // eslint-disable-next-line react/no-array-index-key
//               <SidebarItem item={route} key={index} />
//             )
//           ) : null
//         )}
//       </List>
//     </Drawer>
//   )
// }

export default Sidebar
