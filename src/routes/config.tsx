import Home from '../modules/Auth/Home';
import Login from '../modules/Public/Login';
import SignUp from '../modules/Public/SignUp';
import Transaction from '../modules/Auth/Transaction';

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
    title: "Transactions",
    path: "/transactions",
    isPrivate: true,
    component: () => <Transaction />,
    children: [
      {
        title: "Create Transaction",
        path: "/transactions/create",
        isPrivate: true,
        component: () => <div>Create Transaction</div>,
      },
      {
        title: "Transaction Details",
        path: "/transactions/:id",
        isPrivate: true,
        component: () => <div>Transaction Details</div>,
      },
      {
        title: "Transaction Edit",
        path: "/transactions/edit/:id",
        isPrivate: true,
        component: () => <div>Transaction Edit</div>,
      }
    ]
  },
  {
    title: "Profile",
    path: "/profile",
    isPrivate: true,
    component: () => <div>Profile</div>,
    children: [
      {
        title: "Edit Profile",
        path: "/profile/edit",
        isPrivate: true,
        component: () => <div>Edit Profile</div>,
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
