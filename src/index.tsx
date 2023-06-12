import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import App from './App'
// import { Text } from '@aws-amplify/ui-react'
// import { Text } from '@aws-amplify/ui-react'
// import { Expander, ExpanderItem } from '@aws-amplify/ui-react'
import reportWebVitals from './reportWebVitals'

import awsExports from './aws-exports'
import { store } from './redux/store'
// import { SideBar02 } from './ui-components'
// import { routes } from './routes'

Amplify.configure(awsExports)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
      {/* <App signOut="" user="" /> */}
      {/* aaa */}
      {/* <SideBar02
        overrides={{
          ORGANIZATION: {
            children: routes,
            //   <Expander type="multiple">
            //     <ExpanderItem title="Click me first!" value="item-1">
            //       Now when you click the second item, this item will stay open until you close it.
            //     </ExpanderItem>
            //     <ExpanderItem title="Then click me!" value="item-2">
            //       Notice how both items can be open at the same time for the multiple Expander.
            //     </ExpanderItem>
            //   </Expander>
            // ),
          },
        }}
      /> */}
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
