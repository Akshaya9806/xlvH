import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">

      <div className="search">

        <Search size={18} />

        <input
          placeholder="Search..."
        />

      </div>

      <div className="topbar-right">

        <Bell size={20} />

        <div className="avatar">
          SK
        </div>

      </div>

    </header>
  );
}