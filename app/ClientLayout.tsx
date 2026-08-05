"use client";

import { useState } from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(true);

  return (
    <div className="flex">
      <Sidebar show={show} />

      <div className="flex-1">
        <Header show={show} setShow={setShow} />
        {children}
      </div>
    </div>
  );
}
