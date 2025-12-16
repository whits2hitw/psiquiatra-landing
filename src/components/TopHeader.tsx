"use client";

import React from "react";
import { MapPin } from "lucide-react";

// Header de anúncio no topo
interface TopHeaderProps {
  atTop: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ atTop }) => {
  // Now non-fixed: it sits above the hero in the normal document flow.
  // The Navbar is fixed and will overlay it. Keep the prop for compatibility.
  return (
    <div className="w-full bg-gray-700 text-white h-6 md:h-8 flex items-center justify-center gap-2">
      <MapPin size={14} />
      <p className="text-xs md:text-sm font-medium">
        Atendimento presencial e online para todo Brasil
      </p>
    </div>
  );
};
