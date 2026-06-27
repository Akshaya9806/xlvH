import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  GitBranch,
  Building2,
 BadgeCheck,
  Lightbulb,
  FileText,
  Bot,
  Network,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Workflow",
    icon: GitBranch,
    path: "/workflow",
  },
  {
    title: "Companies",
    icon: Building2,
    path: "/companies",
  },
  {
    title: "Qualified",
    icon: BadgeCheck,
    path: "/qualified",
  },
  {
    title: "Recommendations",
    icon: Lightbulb,
    path: "/recommendations",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "Agents",
    icon: Bot,
    path: "/agents",
  },
  {
    title: "Architecture",
    icon: Network,
    path: "/architecture",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">

        <h2>XLVentures</h2>

        <p>AI Platform</p>

      </div>

      <nav>

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu active" : "menu"
              }
            >
              <Icon size={18} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}

      </nav>
    </aside>
  );
}