import { Brain, InfoIcon, LayoutDashboard, NotebookPen, Settings } from "lucide-react";

export const sidebarItems = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        name: "AI Character",
        icon: Brain,
        href: "/dashboard/character",
    },
    {
        name: "History",
        icon: NotebookPen,
        href: "/dashboard/history",
    },
    {
        name: "About Us",
        icon: InfoIcon,
        href: "/dashboard/about",
    },
    {
        name: "Settings",
        icon: Settings,
        href: "/dashboard/settings",
    },
];