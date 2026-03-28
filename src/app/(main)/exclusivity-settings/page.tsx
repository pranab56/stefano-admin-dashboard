"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Trophy, 
  Calendar, 
  Info, 
  Save, 
  CheckCircle2 
} from "lucide-react";

export default function ExclusivitySettingsPage() {
  return (
    <div className="space-y-6 pb-5">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[#1E1F26]">Exclusivity Settings</h1>
        <p className="text-sm text-gray-400 font-medium">Manage exclusive seller assignment and offer routing duration</p>
      </div>

      {/* Card 1: Active Exclusive Seller */}
      <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden">
        <CardHeader className="border-b border-gray-50 flex flex-row items-center gap-2 px-8 py-6">
          <Award className="w-5 h-5 text-[#D3AB50]" />
          <CardTitle className="text-[16px] font-semibold text-[#1E1F26]">Active Exclusive Seller</CardTitle>
        </CardHeader>
        <CardContent className="px-8 py-0">
          <div className="divide-y divide-gray-100">
            {/* Seller Name */}
            <div className="py-6 flex flex-col gap-1">
              <p className="text-[13px] font-medium text-gray-400">Seller Name</p>
              <div className="flex items-center justify-between">
                <p className="text-[16px] font-semibold text-[#1E1F26]">Fine Wines Ltd</p>
                <Trophy className="w-4 h-4 text-[#D3AB50]" />
              </div>
            </div>

            {/* Contract Status */}
            <div className="py-6 flex flex-col gap-2">
              <p className="text-[13px] font-medium text-gray-400">Contract Status</p>
              <Badge className="bg-[#D1FAE5] text-[#10B981] border-none px-3 py-1 font-medium rounded-full text-[12px] flex items-center gap-1.5 hover:bg-[#D1FAE5]">
                <CheckCircle2 className="w-3 h-3" />
                Active
              </Badge>
            </div>

            {/* Start Date */}
            <div className="py-6 flex flex-col gap-2">
              <p className="text-[13px] font-medium text-gray-400">Start Date</p>
              <div className="flex items-center gap-2 text-[#1E1F26] text-[15px] font-medium">
                <Calendar className="w-4 h-4 text-gray-400" />
                2025-01-15
              </div>
            </div>

            {/* End Date */}
            <div className="py-6 flex flex-col gap-2">
              <p className="text-[13px] font-medium text-gray-400">End Date</p>
              <div className="flex items-center gap-2 text-[#1E1F26] text-[15px] font-medium">
                <Calendar className="w-4 h-4 text-gray-400" />
                2026-01-15
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card 2: Exclusivity Duration */}
      <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden">
        <CardHeader className="border-b border-gray-50 px-8 py-6">
          <CardTitle className="text-[18px] font-semibold text-[#1E1F26]">Exclusivity Duration</CardTitle>
        </CardHeader>
        <CardContent className="px-8 py-8 space-y-8">
          {/* Input field */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#1E1F26]">Exclusivity Duration (hours/minutes)</p>
            <Input 
              value="24"
              className="max-w-[240px] h-12 bg-[#FCFBF8] border-gray-100 rounded-lg text-[#1E1F26] font-medium px-4 focus-visible:ring-1 focus-visible:ring-[#D3AB50]"
            />
          </div>

          {/* Info Box */}
          <div className="bg-[#FAF6E8] p-5 rounded-xl border-none flex gap-3">
            <Info className="w-5 h-5 text-[#D3AB50] shrink-0" />
            <p className="text-[13px] text-[#6B7280] leading-relaxed">
              All new offers are routed exclusively to the active Exclusive Seller for this duration before moving to the Marketplace. Current setting: 24 hours.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-[#1E1F26]">Example Timeline</p>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-4 bg-[#FCFBF8] p-4 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#D3AB50] text-white flex items-center justify-center text-[11px] font-bold shrink-0">1</div>
                <p className="text-[13px] text-gray-500 font-medium">
                  Customer submits offer → Routed to <span className="text-[#D3AB50] font-semibold">Fine Wines Ltd</span>
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4 bg-[#FCFBF8] p-4 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-[11px] font-bold shrink-0">2</div>
                <p className="text-[13px] text-gray-500 font-medium">
                  Exclusive seller has <span className="text-[#D3AB50] font-semibold">24 hours</span> to respond
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4 bg-[#FCFBF8] p-4 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#2C2E33] text-white flex items-center justify-center text-[11px] font-bold shrink-0">3</div>
                <p className="text-[13px] text-gray-500 font-medium">
                  If no response → Offer moves to Marketplace for all sellers
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-4">
            <Button className="bg-[#D3AB50] hover:bg-[#B89442] text-white px-6 h-11 rounded-xl flex items-center gap-2 font-semibold shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Save className="w-4 h-4" />
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
