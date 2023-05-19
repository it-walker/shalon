import HomePage from "../pages/home/HomePage";
import InstallationPage from "../pages/installation/InstallationPage";
import { RouteType } from "./config";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "Home",
  },
  {
    element: <InstallationPage/>,
    path: "/installation",
    sidebarProps: {
      displayText: "InstallationPage",
      // icon: <FileDownloadOutlinedIcon />
    },
    state: "/installation"
  }
]

export default appRoutes