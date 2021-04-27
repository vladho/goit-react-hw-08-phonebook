import { lazy } from "react"

export const mainRoutes = [
  {
    name: "Contacts",
    exact: false,
    path: "/contacts",
    component: lazy(() => import("../pages/ContactsPage")),
    isRestricted: false,
  },
  {
    name: "Register",
    exact: false,
    path: "/register",
    component: lazy(() => import("../pages/AuthPage")),
    isRestricted: true,
  },
  {
    name: "Login",
    exact: false,
    path: "/login",
    component: lazy(() => import("../pages/AuthPage")),
    isRestricted: true,
  },
]
