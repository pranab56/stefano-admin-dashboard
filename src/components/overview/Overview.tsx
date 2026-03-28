"use client";

import CardStates from "@/components/overview/CardStates";

export default function Overview() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">

      {/* Header */}
      <div className="space-y-1 mt-2">
        <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
        <p className="text-sm text-gray-500">
          Platform overview and key performance indicators
        </p>
      </div>
      {/* Row 1 — Stat Cards */}
      <CardStates />
    </div>
  );
}
