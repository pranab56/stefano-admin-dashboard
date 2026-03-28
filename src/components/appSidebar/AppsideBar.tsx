"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  CreditCard,
  Database,
  LayoutDashboard,
  LogOut,
  LucideIcon,
  Package,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  name: string;
  path: string;
  icon: LucideIcon;
  children?: { name: string; path: string }[];
};

const menuItems: MenuItem[] = [
  { name: "Overview", path: "/", icon: LayoutDashboard },
  { name: "Analytics", path: "/analytics", icon: TrendingUp },
  { name: "Catalog Control", path: "/catalog-control", icon: Package },
  { name: "Seller Management", path: "/seller-management", icon: Users },
  { name: "Exclusivity Settings", path: "/exclusivity-settings", icon: ShieldCheck },
  { name: "Transactions", path: "/transactions", icon: CreditCard },
  { name: "Platform Settings", path: "/platform-settings", icon: Settings },
  { name: "Admin Catalog", path: "/admin-catalog", icon: Database },
];

export default function AppSideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Auto-expand sections whose child path is currently active
  const defaultOpen = menuItems
    .filter((item) =>
      item.children?.some(
        (child) => pathname === child.path || pathname.startsWith(child.path + "/")
      )
    )
    .map((item) => item.name);

  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (name: string) => {
    setOpenItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <Sidebar collapsible="icon" className="border-none">
      {/* ── Main panel ── */}
      <SidebarContent
        className="flex flex-col h-full overflow-hidden"
        style={{ backgroundColor: "#2C2E33", color: "#FFFFFF" }}
      >
        {/* ── Logo ── */}
        <SidebarHeader
          className={cn(
            "px-6 py-8 transition-all duration-200",
            isCollapsed && "px-3 py-6"
          )}
        >
          <Link href="/" className="flex items-center">
            {!isCollapsed ? (
              <span className="text-2xl font-bold bg-gradient-to-r from-[#D3AB50] to-[#E5C170] bg-clip-text text-transparent tracking-tight">
                Admin Panel
              </span>
            ) : (
              <span className="text-xl font-bold text-[#D3AB50]">A</span>
            )}
          </Link>
        </SidebarHeader>

        {/* ── Divider ── */}
        <div className="h-px mx-4 opacity-20" style={{ backgroundColor: "#FFFFFF" }} />

        {/* ── Navigation ── */}
        <SidebarGroup className="flex-1 px-0 mt-2">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0">
              {menuItems.map((item) => {
                const active = isActive(item.path);
                const hasChildren = !!item.children?.length;
                const isSectionOpen = openItems.includes(item.name);

                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild={!hasChildren}
                      onClick={hasChildren ? () => toggleItem(item.name) : undefined}
                      tooltip={item.name}
                      className={cn(
                        "h-12 px-5 w-full rounded-none transition-colors duration-150 cursor-pointer",
                        "group-data-[collapsible=icon]:!h-12 group-data-[collapsible=icon]:!w-full group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:justify-center",
                        active
                          ? "text-white font-semibold"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      )}
                      style={
                        active
                          ? { backgroundColor: "#D3AB50" }
                          : {}
                      }
                    >
                      {hasChildren ? (
                        <div
                          className={cn(
                            "flex items-center gap-3 text-sm w-full",
                            isCollapsed && "justify-center gap-0"
                          )}
                        >
                          <item.icon className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                          {!isCollapsed && <span>{item.name}</span>}
                        </div>
                      ) : (
                        <Link
                          href={item.path}
                          className={cn(
                            "flex items-center gap-3 text-sm w-full",
                            isCollapsed && "justify-center gap-0"
                          )}
                        >
                          <item.icon className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                          {!isCollapsed && <span>{item.name}</span>}
                        </Link>
                      )}
                    </SidebarMenuButton>

                    {/* Sub-items */}
                    <AnimatePresence>
                      {hasChildren && isSectionOpen && !isCollapsed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <SidebarMenuSub className="border-none ml-8 flex flex-col gap-0 py-1">
                            {item.children?.map((child) => {
                              const childActive =
                                pathname === child.path ||
                                pathname.startsWith(child.path + "/");
                              return (
                                <SidebarMenuSubItem key={child.name}>
                                  <SidebarMenuSubButton
                                    asChild
                                    className={cn(
                                      "h-10 rounded-none px-4 hover:bg-white/5 transition-colors",
                                      childActive ? "text-white" : "text-white/70 hover:text-white"
                                    )}
                                  >
                                    <Link href={child.path} className="flex items-center gap-3">
                                      {/* Orange dot — filled when active, outlined when not */}
                                      <span
                                        className="w-2 h-2 rounded-full shrink-0 border transition-colors"
                                        style={{
                                          backgroundColor: childActive ? "#D3AB50" : "transparent",
                                          borderColor: childActive ? "#D3AB50" : "rgba(255,255,255,0.4)",
                                        }}
                                      />
                                      <span
                                        className={cn(
                                          "text-sm",
                                          childActive ? "font-medium" : "font-light"
                                        )}
                                      >
                                        {child.name}
                                      </span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              );
                            })}
                          </SidebarMenuSub>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* ── Logout button ── */}
        <SidebarFooter
          className={cn(
            "p-6 pb-8 transition-all duration-200",
            isCollapsed && "p-3 pb-8"
          )}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            title={isCollapsed ? "Logout" : undefined}
            className={cn(
              "w-full h-11 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer overflow-hidden whitespace-nowrap shadow-md",
              isCollapsed && "rounded-full w-11 h-11 p-0 mx-auto"
            )}
            style={{ backgroundColor: "#DC3545" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c82333")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#DC3545")
            }
          >
            <LogOut className="w-4 h-4 rotate-180 shrink-0" />
            {!isCollapsed && <span className="text-sm">Logout</span>}
          </motion.button>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
