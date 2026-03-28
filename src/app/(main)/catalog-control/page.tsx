"use client";

import React from "react";
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
import { Search, CheckCircle2, XCircle } from "lucide-react";

const tableData = [
  {
    sellerName: "Fine Wines Ltd",
    productName: "Château Margaux 2015",
    category: "Red Wine",
    status: "Pending",
  },
  {
    sellerName: "Premium Spirits Co",
    productName: "Dom Pérignon 2008",
    category: "Champagne",
    status: "Pending",
  },
  {
    sellerName: "Elite Beverages",
    productName: "Macallan 25 Year",
    category: "Whisky",
    status: "Pending",
  },
  {
    sellerName: "Vintage Collection",
    productName: "Bordeaux Grand Cru 2018",
    category: "Red Wine",
    status: "Pending",
  },
  {
    sellerName: "Grand Reserve Inc",
    productName: "Penfolds Grange 2012",
    category: "Red Wine",
    status: "Pending",
  },
  {
    sellerName: "Premium Spirits Co",
    productName: "Hennessy Paradis",
    category: "Cognac",
    status: "Pending",
  },
];

export default function CatalogControlPage() {
  return (
    <div className="space-y-6 pb-5">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[#1E1F26]">Catalog Control</h1>
        <p className="text-sm text-gray-400 font-medium">Review and approve newly added products</p>
      </div>

      {/* Search Bar Container */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-full max-w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search by product name, seller, or category..." 
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
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Product Name</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Category</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Status</TableHead>
              <TableHead className="font-semibold text-[#1E1F26] h-14 px-6 text-sm">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                <TableCell className="px-6 py-4 text-[#6C757D] text-sm">{row.sellerName}</TableCell>
                <TableCell className="px-6 py-4 text-[#1E1F26] text-sm font-medium">{row.productName}</TableCell>
                <TableCell className="px-6 py-4 text-[#6C757D] text-sm">{row.category}</TableCell>
                <TableCell className="px-6 py-4">
                  <Badge 
                    className="bg-[#FAF6E8] text-[#D3AB50] border-none px-3 py-1 font-medium rounded-full text-[12px] hover:bg-[#FAF6E8]"
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Button 
                      size="sm"
                      className="bg-[#D3AB50] hover:bg-[#B89442] text-white px-4 py-2 rounded-lg font-medium text-xs flex items-center gap-2 shadow-sm transition-all h-9"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Approve
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-gray-200 hover:bg-gray-50 text-gray-500 px-4 py-2 rounded-lg font-medium text-xs flex items-center gap-2 transition-all h-9"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject
                    </Button>
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