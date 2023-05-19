import { NavBar } from "../ui-components"

const NavigationBar = () => {

  return (
    <NavBar
      Dashboard={"ダッシュボード"}
      overrides={{
        Dashboard: {
          onClick: () => alert('aa')
        }
      }}
    />
  )
}

export default NavigationBar;