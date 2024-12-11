"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MenuSquare } from "lucide-react";
import Sidebar from "../layout/Sidebar";
import { UserButton } from "@clerk/nextjs";

export default function MobileViews() {
  return (
    <div className="flex items-center justify-between px-3 py-3">
      <Sheet asChild>
        <SheetTrigger className="lg:hidden">
          <Menu/>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          <Sidebar/>
        </SheetContent>
      </Sheet>
      <div className="absolute right-4 top-3">
      <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
