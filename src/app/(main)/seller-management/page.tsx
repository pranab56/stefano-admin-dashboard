"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Award, Ban, Eye, Search, Trophy } from "lucide-react";

const sellerData = [
  {
    name: "Fine Wines Ltd",
    type: "Exclusive",
    verified: "Verified",
    totalSales: "$1,847,500",
    status: "Active",
    isExclusive: true,
  },
  {
    name: "Premium Spirits Co",
    type: "Marketplace",
    verified: "Verified",
    totalSales: "$524,300",
    status: "Active",
    isExclusive: false,
  },
  {
    name: "Vintage Collection",
    type: "Marketplace",
    verified: "Not Verified",
    totalSales: "$125,600",
    status: "Active",
    isExclusive: false,
  },
  {
    name: "Elite Beverages",
    type: "Marketplace",
    verified: "Verified",
    totalSales: "$892,400",
    status: "Active",
    isExclusive: false,
  },
  {
    name: "Heritage Wines",
    type: "Marketplace",
    verified: "Verified",
    totalSales: "$345,200",
    status: "Active",
    isExclusive: false,
  },
  {
    name: "Grand Reserve Inc",
    type: "Marketplace",
    verified: "Verified",
    totalSales: "$678,900",
    status: "Suspended",
    isExclusive: false,
  },
];

export default function SellerManagementPage() {
  return (
    <div className="space-y-6 pb-5">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[#1E1F26]">Seller Management</h1>
        <p className="text-sm text-gray-400 font-medium">Manage sellers and assign exclusive roles</p>
      </div>

      {/* Current Exclusive Seller Banner */}
      <Card className="border-none shadow-sm bg-white overflow-hidden relative p-0">
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D3AB50]" />
        <CardContent className="p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#6C757D] font-medium text-sm">
              <Award className="w-4 h-4 text-[#D3AB50]" />
              Current Exclusive Seller
            </div>
            <h2 className="text-xl font-bold text-[#D3AB50]">Fine Wines Ltd</h2>
            <p className="text-xs text-gray-400">All new offers are routed to this seller first</p>
          </div>
        </CardContent>
      </Card>

      {/* Search Bar Container */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search by seller name..."
            className="pl-10 h-11 bg-[#FCFBF8] border-none rounded-lg focus-visible:ring-1 focus-visible:ring-[#D3AB50]"
          />
        </div>

      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-white">
            <TableRow className="hover:bg-transparent border-b border-gray-100">
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Seller Name</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Type</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Verified Status</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Total Sales</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Status</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sellerData.map((row, index) => (
              <TableRow key={index} className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-2 text-[#6C757D] text-sm font-medium">
                    {row.name}
                    {row.isExclusive && <Trophy className="w-3.5 h-3.5 text-[#D3AB50]" />}
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge
                    className={cn(
                      "border-none px-3 py-1 font-medium rounded-full text-[11px] hover:bg-opacity-80",
                      row.type === "Exclusive"
                        ? "bg-[#FAF6E8] text-[#D3AB50]"
                        : "bg-[#F5F5F5] text-[#9CA3AF]"
                    )}
                  >
                    {row.type}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Badge
                    className={cn(
                      "border-none px-3 py-1 font-medium rounded-full text-[11px] hover:bg-opacity-80",
                      row.verified === "Verified"
                        ? "bg-[#D1FAE5] text-[#10B981]"
                        : "bg-[#FEE2E2] text-[#EF4444]"
                    )}
                  >
                    {row.verified}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4 text-[#1E1F26] text-sm font-semibold">{row.totalSales}</TableCell>
                <TableCell className="px-6 py-4">
                  <Badge
                    className={cn(
                      "border-none px-3 py-1 font-medium rounded-full text-[11px] hover:bg-opacity-80",
                      row.status === "Active"
                        ? "bg-[#D1FAE5] text-[#10B981]"
                        : "bg-[#FEE2E2] text-[#EF4444]"
                    )}
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-[#D3AB50] transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Ban className="w-4 h-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// Helper function for conditional classes
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
