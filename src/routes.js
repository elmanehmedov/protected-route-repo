import Home from "./components/Home";
import Photos from "./components/Photos";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
export const routes = [
  {
    key: 1,
    path: "/home",
    text: "Home",
    component: <Home />,
  },
  {
    key: 2,
    path: "/photos",
    text: "Photos",
    component: <Photos />,
  },
  {
    key: 3,
    path: "/profile",
    text: "Profile",
    component: <Profile />,
  },
  {
    key: 4,
    path: "/contact",
    text: "Contact",
    component: <Contact />,
  },
];
