"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Info,
  ShieldAlert,
  ShoppingBag,
  UserPlus
} from "lucide-react";
import React from "react";

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "success" | "alert" | "info";
  icon: React.ElementType;
}

const notifications: NotificationItem[] = [
  {
    id: "1",
    title: "New Seller Registration",
    description: "Elite Beverages has completed their profile registration and is awaiting review.",
    time: "2 hours ago",
    type: "success",
    icon: UserPlus,
  },
  {
    id: "2",
    title: "Low Stock Alert",
    description: "Inventory for Château Margaux 2015 is below the threshold (5 bottles remaining).",
    time: "5 hours ago",
    type: "alert",
    icon: AlertTriangle,
  },
  {
    id: "3",
    title: "Platform Settings Updated",
    description: "Global commission rates were updated to 5.5% by Admin User.",
    time: "1 day ago",
    type: "info",
    icon: Info,
  },
  {
    id: "4",
    title: "New Product Submission",
    description: "A new listing 'Vintage Cabernet 2019' has been submitted by Premium Spirits Co.",
    time: "1 day ago",
    type: "success",
    icon: ShoppingBag,
  },
  {
    id: "5",
    title: "Security Alert",
    description: "Failed login attempt detected from an unrecognized IP address (192.168.1.45).",
    time: "2 days ago",
    type: "alert",
    icon: ShieldAlert,
  },
  {
    id: "6",
    title: "Platform Backup Completed",
    description: "Weekly database backup was successfully stored in the multi-region cluster.",
    time: "3 days ago",
    type: "info",
    icon: CheckCircle2,
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-[#1E1F26]">Notifications</h1>
          <p className="text-sm text-gray-400 font-medium">Stay updated with the latest platform activity</p>
        </div>
        <button className="text-sm font-semibold text-[#D3AB50] hover:underline flex items-center gap-1">
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <Card className="border-none shadow-sm bg-white rounded-xl overflow-hidden p-0">
        <CardContent className="p-0">
          <div className="divide-y divide-gray-50">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="p-6 flex items-start gap-4 transition-all hover:bg-gray-50/50 cursor-pointer group"
              >
                {/* Icon Column */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                  ${notif.type === 'success' ? 'bg-green-50 text-green-500' : ''}
                  ${notif.type === 'alert' ? 'bg-red-50 text-red-500' : ''}
                  ${notif.type === 'info' ? 'bg-gray-50 text-gray-500' : ''}
                `}>
                  <notif.icon className="w-6 h-6" />
                </div>

                {/* Content Column */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[15px] font-bold text-[#1E1F26] group-hover:text-[#D3AB50] transition-colors">
                      {notif.title}
                    </h3>
                    <span className="text-[12px] text-gray-400 font-medium">{notif.time}</span>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed pr-8">
                    {notif.description}
                  </p>
                </div>

                {/* Action Column */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center pt-2">
                  <ArrowRight className="w-5 h-5 text-[#D3AB50]" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Empty State Action */}
      <div className="text-center pt-4">
        <button className="text-gray-400 text-sm font-medium hover:text-[#D3AB50] transition-colors">
          View Notification Settings
        </button>
      </div>
    </div>
  );
}
