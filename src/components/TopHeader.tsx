"use client";

import React from "react";
import { MapPin } from "lucide-react";

// Header de anúncio no topo
interface TopHeaderProps {
  atTop: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ atTop }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-gray-700 text-white h-8 md:h-10 z-50 flex items-center justify-center gap-2 transition-transform duration-200 ${
        atTop ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <MapPin size={14} />
      <p className="text-xs md:text-sm font-medium">
        Atendimento presencial e online para todo Brasil
      </p>
    </div>
  );
};
