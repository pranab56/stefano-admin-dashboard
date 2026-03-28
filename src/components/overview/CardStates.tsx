"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  DollarSign,
  Handshake,
  Users,
  Award,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Sales",
    value: "$2,847,392",
    change: "+12.5%",
    icon: DollarSign,
    iconBg: "rgba(211, 171, 80, 0.1)",
    iconColor: "#D3AB50",
  },
  {
    title: "Active Offers",
    value: "156",
    change: "+5.4%",
    icon: Handshake,
    iconBg: "rgba(211, 171, 80, 0.1)",
    iconColor: "#D3AB50",
  },
  {
    title: "Active Sellers",
    value: "247",
    change: "+8.2%",
    icon: Users,
    iconBg: "rgba(211, 171, 80, 0.1)",
    iconColor: "#D3AB50",
  },
  {
    title: "Exclusive Seller Status",
    value: "Active",
    subValue: "Fine Wines Ltd",
    icon: Award,
    iconBg: "rgba(211, 171, 80, 0.1)",
    iconColor: "#D3AB50",
  },
  {
    title: "Pending Product Approvals",
    value: "23",
    change: "+3",
    icon: AlertCircle,
    iconBg: "rgba(211, 171, 80, 0.1)",
    iconColor: "#D3AB50",
  },
  {
    title: "Commission Revenue",
    value: "$142,369",
    change: "+15.8%",
    icon: TrendingUp,
    iconBg: "rgba(211, 171, 80, 0.1)",
    iconColor: "#D3AB50",
  },
];

export default function CardStates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
        >
          <Card className="border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow h-full pb-6">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between w-full">
                {/* Icon box */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: stat.iconBg }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: stat.iconColor }} />
                </div>
                {stat.change && (
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-400 capitalize">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-800">
                  {stat.value}
                </p>
                {stat.subValue && (
                  <p className="text-xs font-medium text-[#D3AB50]">
                    {stat.subValue}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
