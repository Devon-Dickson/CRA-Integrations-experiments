import Dashboard from "containers/Dashboard";
import ManagePeople from "containers/ManagePeople";
import ManageResources from "containers/ManageResources";
import NotFound from "containers/NotFound";
import Settings from "containers/Settings";
import { ComponentClass, FunctionComponent } from "react";
import { DefaultParams, RouteComponentProps } from "wouter";

export type RouteProps = {
    component:
        | ComponentClass<RouteComponentProps<DefaultParams>, any>
        | FunctionComponent<RouteComponentProps<DefaultParams>>
        | undefined;
    label?: string;
    path: string;
};

const RouteProps: Array<RouteProps> = [
    {
        component: Dashboard,
        label: "Dashboard",
        path: "/dashboard",
    },
    {
        component: ManageResources,
        label: "Manage Resources",
        path: "/resources",
    },
    {
        component: ManagePeople,
        label: "Manage People",
        path: "/people",
    },
    {
        component: Settings,
        label: "Settings",
        path: "/settings",
    },
    {
        component: NotFound,
        path: "/:rest",
    },
];

export default RouteProps;
