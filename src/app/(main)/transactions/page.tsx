"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye, FileText, FileDown } from "lucide-react";

const transactionData = [
  {
    orderId: "TRX-2025-001",
    buyer: "Robert Johnson",
    seller: "Fine Wines Ltd",
    product: "Château Margaux 2015",
    totalAmount: "$1,200",
    platformFee: "$60",
    status: "Completed",
    date: "2025-02-22",
  },
  {
    orderId: "TRX-2025-002",
    buyer: "Sarah Williams",
    seller: "Premium Spirits Co",
    product: "Dom Pérignon 2008",
    totalAmount: "$825",
    platformFee: "$41.25",
    status: "Completed",
    date: "2025-02-22",
  },
  {
    orderId: "TRX-2025-003",
    buyer: "Emily Davis",
    seller: "Grand Reserve Inc",
    product: "Penfolds Grange 2012",
    totalAmount: "$925",
    platformFee: "$46.25",
    status: "Pending",
    date: "2025-02-21",
  },
  {
    orderId: "TRX-2025-004",
    buyer: "David Martinez",
    seller: "Elite Beverages",
    product: "Macallan 25 Year",
    totalAmount: "$2,050",
    platformFee: "$102.50",
    status: "Completed",
    date: "2025-02-20",
  },
  {
    orderId: "TRX-2025-005",
    buyer: "Jennifer Taylor",
    seller: "Heritage Wines",
    product: "Bordeaux Grand Cru 2016",
    totalAmount: "$650",
    platformFee: "$32.50",
    status: "Refunded",
    date: "2025-02-19",
  },
  {
    orderId: "TRX-2025-006",
    buyer: "Michael Brown",
    seller: "Premium Spirits Co",
    product: "Hennessy Paradis",
    totalAmount: "$1,750",
    platformFee: "$87.50",
    status: "Failed",
    date: "2025-02-18",
  },
];

export default function TransactionsPage() {
  return (
    <div className="space-y-6 pb-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-[#1E1F26]">Transactions</h1>
          <p className="text-sm text-gray-400 font-medium">Monitor Stripe payments and platform fees</p>
        </div>
        <Button className="bg-[#D3AB50] hover:bg-[#B89442] text-white px-5 h-11 rounded-xl flex items-center gap-2 font-semibold shadow-sm transition-all h-9">
            <FileDown className="w-4 h-4" />
            Export CSV
        </Button>
      </div>

      {/* Search Bar Container */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search by transaction ID, buyer, seller, or product..." 
            className="pl-10 h-11 bg-[#FCFBF8] border-none rounded-lg focus-visible:ring-1 focus-visible:ring-[#D3AB50]"
          />
        </div>
        <div className="w-[100px] h-11 bg-[#FCFBF8] rounded-lg border-none" />
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-white">
            <TableRow className="hover:bg-transparent border-b border-gray-100">
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Order ID</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Buyer</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Seller</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Product</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Total Amount</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Platform Fee (5%)</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Stripe Status</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Date</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-[13px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionData.map((row, index) => (
              <TableRow key={index} className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                <TableCell className="px-6 py-5 text-[#1E1F26] text-[13px] font-medium leading-relaxed max-w-[120px]">
                    {row.orderId}
                </TableCell>
                <TableCell className="px-6 py-5 text-[#6B7280] text-[13px] font-medium leading-relaxed max-w-[120px]">
                    {row.buyer}
                </TableCell>
                <TableCell className="px-6 py-5 text-[#6B7280] text-[13px] font-medium leading-relaxed max-w-[120px]">
                    {row.seller}
                </TableCell>
                <TableCell className="px-6 py-5 text-[#1E1F26] text-[13px] font-medium leading-relaxed max-w-[150px]">
                    {row.product}
                </TableCell>
                <TableCell className="px-6 py-5 text-[#1E1F26] text-[13px] font-medium leading-relaxed">
                    {row.totalAmount}
                </TableCell>
                <TableCell className="px-6 py-5 text-[#D3AB50] text-[13px] font-bold leading-relaxed">
                    {row.platformFee}
                </TableCell>
                <TableCell className="px-6 py-5">
                   <Badge 
                    className={cn(
                        "border-none px-3 py-1 font-medium rounded-full text-[11px] hover:bg-opacity-80",
                        row.status === "Completed" && "bg-[#D1FAE5] text-[#10B981]",
                        row.status === "Pending" && "bg-[#FAF6E8] text-[#D3AB50]",
                        row.status === "Refunded" && "bg-[#DBEAFE] text-[#60A5FA]",
                        row.status === "Failed" && "bg-[#FEE2E2] text-[#EF4444]"
                    )}
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-5 text-[#6B7280] text-[13px] font-medium leading-relaxed">
                    {row.date}
                </TableCell>
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-[#D3AB50] transition-colors">
                        <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-[#D3AB50] transition-colors">
                        <FileText className="w-4 h-4" />
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

// No custom helper needed. Used cn from @/lib/utils instead.
