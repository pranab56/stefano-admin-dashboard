"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Lock, 
  Camera, 
  Save, 
  CheckCircle2,
  Eye,
  EyeOff
} from "lucide-react";
import { motion } from "framer-motion";

const USER_DATA = {
  name: "Admin User",
  email: "admin@futurepharmacy.com",
  phone: "+1 (555) 000-1234",
  role: "Super Admin",
  avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=128&h=128&fit=crop&auto=format",
};

export default function ProfilePage() {
  const [name, setName] = useState(USER_DATA.name);
  const [email] = useState(USER_DATA.email);
  const [phone, setPhone] = useState(USER_DATA.phone);
  const [avatar, setAvatar] = useState(USER_DATA.avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Password visibility states
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[#1E1F26]">Account Settings</h1>
        <p className="text-sm text-gray-400 font-medium">Manage your personal information and security preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2 space-y-8"
        >
          {/* Profile Details */}
          <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden">
            <CardHeader className="border-b border-gray-50 px-8 py-6 flex flex-row items-center gap-3">
              <User className="w-5 h-5 text-[#D3AB50]" />
              <CardTitle className="text-lg font-semibold text-[#1E1F26]">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <Avatar className="h-24 w-24 border-4 border-[#FAF6E8] shadow-sm relative overflow-hidden">
                    <AvatarImage src={avatar} alt={name} className="object-cover" />
                    <AvatarFallback className="bg-[#D3AB50] text-white text-2xl">AU</AvatarFallback>
                  </Avatar>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 bg-[#D3AB50] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                    title="Change Avatar"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleAvatarUpload} 
                    accept="image/*" 
                    className="hidden" 
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1E1F26]">{USER_DATA.name}</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#FAF6E8] text-[#D3AB50] border-none px-2.5 py-0.5 font-semibold text-[11px] rounded-lg">
                      {USER_DATA.role}
                    </Badge>
                    <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Account
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-500 px-1">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 h-12 bg-[#FCFBF8] border-gray-100 rounded-xl focus-visible:ring-1 focus-visible:ring-[#D3AB50]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-500 px-1">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input 
                      value={email}
                      disabled
                      className="pl-10 h-12 bg-[#FCFBF8] border-gray-100 rounded-xl opacity-60 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-500 px-1">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10 h-12 bg-[#FCFBF8] border-gray-100 rounded-xl focus-visible:ring-1 focus-visible:ring-[#D3AB50]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-500 px-1">Role / Permissions</Label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input 
                      value={USER_DATA.role}
                      disabled
                      className="pl-10 h-12 bg-[#FCFBF8] border-gray-100 rounded-xl opacity-60 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button className="bg-[#D3AB50] hover:bg-[#B89442] text-white px-8 h-12 rounded-xl flex items-center gap-2 font-semibold shadow-sm transition-all">
                  <Save className="w-4 h-4" />
                  Update Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column: Security/Password */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden h-full">
            <CardHeader className="border-b border-gray-50 px-8 py-6 flex items-center gap-3 flex-row">
              <Lock className="w-5 h-5 text-[#D3AB50]" />
              <CardTitle className="text-lg font-semibold text-[#1E1F26]">Security</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <p className="text-sm text-gray-500 leading-relaxed">
                Update your password regularly to keep your account secure.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-500 px-1">Current Password</Label>
                  <div className="relative">
                    <Input 
                      type={showCurrent ? "text" : "password"}
                      placeholder="••••••••"
                      className="h-12 bg-[#FCFBF8] border-gray-100 rounded-xl focus-visible:ring-1 focus-visible:ring-[#D3AB50] pr-10"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowCurrent(!showCurrent)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-500 px-1">New Password</Label>
                  <div className="relative">
                    <Input 
                      type={showNew ? "text" : "password"}
                      placeholder="New password"
                      className="h-12 bg-[#FCFBF8] border-gray-100 rounded-xl focus-visible:ring-1 focus-visible:ring-[#D3AB50] pr-10"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-500 px-1">Confirm New Password</Label>
                  <div className="relative">
                    <Input 
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm password"
                      className="h-12 bg-[#FCFBF8] border-gray-100 rounded-xl focus-visible:ring-1 focus-visible:ring-[#D3AB50] pr-10"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full h-12 border-[#D3AB50] text-[#D3AB50] hover:bg-[#D3AB50] hover:text-white rounded-xl font-semibold transition-all mt-4">
                Change Password
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// Internal Label helper to avoid massive imports if needed
function Label({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>
      {children}
    </label>
  );
}

function Badge({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 overflow-hidden ${className}`} {...props}>
        {children}
      </div>
    );
  }
