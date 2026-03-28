"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const USER_AVATAR = "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=48&h=48&fit=crop&auto=format";

export default function MyNavber() {
  const pathname = usePathname();


  return (
    <header className="flex h-20 items-center justify-between gap-4 bg-white/80 backdrop-blur-md px-6 w-full shrink-0 border-b sticky top-0 z-30" style={{ borderColor: "#F2F2F2" }}>

      <div className="flex items-center gap-4 flex-1">
        <SidebarTrigger className="h-10 w-10 text-[#D3AB50] hover:bg-gray-50 md:hidden" />
        
        {/* Search Bar */}
        <div className="relative w-full max-w-[420px] hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search..." 
            className="pl-10 h-10 bg-[#FAF9F6] border-gray-100 rounded-lg focus-visible:ring-1 focus-visible:ring-[#D3AB50] border-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        {/* Notification Bell */}
        <Link href="/notifications" className="relative p-2 text-gray-500 hover:text-[#D3AB50] hover:bg-gray-50 rounded-full transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#D3AB50] rounded-full ring-2 ring-white"></span>
        </Link>

        {/* User Info */}
        <Link href="/profile" className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50/50 p-1.5 rounded-xl transition-all">
          <div className="text-right hidden sm:block pl-2">
            <p className="text-sm font-bold leading-none mb-1 group-hover:text-[#D3AB50] transition-colors" style={{ color: "#2C2E33" }}>
              Admin User
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-60" style={{ color: "#6C757D" }}>
              Super Admin
            </p>
          </div>
          <Avatar className="h-10 w-10 border border-gray-100 shadow-sm ring-2 ring-transparent group-hover:ring-[#D3AB50]/20 transition-all">
            <AvatarImage src={USER_AVATAR} alt="Admin User" className="object-cover" />
            <AvatarFallback className="bg-[#D3AB50] text-white">AU</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  )
}
