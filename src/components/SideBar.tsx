import { SideBar } from "../ui-components"

const MySideBar = () => {

  return (
    <SideBar
      overrides={{
        Dashboard: {
          onClick: () => alert('aa')
        }
      }}
    />
  )
}

export default MySideBar;