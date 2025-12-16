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
    <div className="w-full bg-gray-700 text-white h-8 md:h-8 flex items-center justify-center gap-1 md:gap-2 px-2">
      <MapPin size={16} className="mt-px md:mt-0" />
      <p className="text-xs md:text-sm leading-tight font-medium text-center">
        Atendimento presencial em Sorocaba - SP e online para todo o Brasil
      </p>
    </div>
  );
};
