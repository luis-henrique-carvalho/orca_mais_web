import Home from '../modules/Auth/Home';
import Login from '../modules/Public/Login';
import SignUp from '../modules/Public/SignUp';

export interface RouteConfig {
  title: string;
  path: string;
  isPrivate: boolean;
  component: React.ComponentType;
  icon?: React.ReactNode;
  children?: RouteConfig[];
  breadcrumbLabel?: string;
  roles?: string[];
}

export const routes: RouteConfig[] = [
  {
    title: "Home",
    path: "/",
    isPrivate: true,
    component: Home,
  },
  {
    title: "Profile",
    path: "/profile",
    isPrivate: true,
    component: () => <div>Profile</div>, // Placeholder
    children: [
      {
        title: "Edit Profile",
        path: "/profile/edit",
        isPrivate: true,
        component: () => <div>Edit Profile</div>, // Placeholder
      }
    ],
  },
  {
    title: "Login",
    path: "/login",
    isPrivate: false,
    component: Login,
  },
  {
    title: "SignUp",
    path: "/signup",
    isPrivate: false,
    component: SignUp,
  },
];
