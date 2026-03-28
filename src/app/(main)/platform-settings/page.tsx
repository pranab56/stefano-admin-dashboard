"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Mail, Save } from "lucide-react";

const notificationSettings = [
  {
    title: "New Seller Registration",
    description: "Notify admins when a new seller registers",
    defaultChecked: true,
  },
  {
    title: "Product Submission",
    description: "Notify admins when products are submitted for review",
    defaultChecked: true,
  },
  {
    title: "Offer Escalation",
    description: "Notify admins when offers are escalated",
    defaultChecked: true,
  },
];

export default function PlatformSettingsPage() {
  return (
    <div className="space-y-6 pb-5">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[#1E1F26]">Settings</h1>
        <p className="text-sm text-gray-400 font-medium">Configure platform settings and integrations</p>
      </div>

      {/* Email Notifications Card */}
      <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden max-w-2xl">
        <CardHeader className="border-b border-gray-50 flex flex-row items-center gap-3 px-8 py-6">
          <div className="w-10 h-10 bg-[#FAF6E8] rounded-xl flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#D3AB50]" />
          </div>
          <CardTitle className="text-lg font-semibold text-[#1E1F26]">Email Notifications</CardTitle>
        </CardHeader>
        <CardContent className="px-8 py-0">
          <div className="divide-y divide-gray-100">
            {notificationSettings.map((setting, index) => (
              <div key={index} className="py-6 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[14px] font-semibold text-[#1E1F26]">{setting.title}</p>
                  <p className="text-[12px] text-[#6B7280]">{setting.description}</p>
                </div>
                <Switch defaultChecked={setting.defaultChecked} className="data-[state=checked]:bg-[#1E1F26]" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Button */}
      <div className="flex justify-end max-w-2xl pt-2">
        <Button className="bg-[#D3AB50] hover:bg-[#B89442] text-white px-6 h-11 rounded-xl flex items-center gap-2 font-semibold shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Save className="w-4 h-4" />
          Save Settings
        </Button>
      </div>
    </div>
  );
}
