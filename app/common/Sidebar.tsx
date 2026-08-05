"use client"

import Image from "next/image";
import Dashboard from "./Dashboard";


type SidebarProps = {
  show: boolean;
};

const Sidebar = ({ show }: SidebarProps) => {
  return (
    <div>
      <aside
        className={`fixed left-0 top-0 h-screen w-72 z-100 p-6 bg-white transition-transform duration-300 ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image src="/logo.svg" alt="logo" width={174} height={32} />
        <Dashboard/>
      </aside>
    </div>
  );
};

export default Sidebar;
