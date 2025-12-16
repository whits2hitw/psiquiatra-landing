"use client";

import React from "react";
import Image from "next/image";
import { defaultWhatsAppLink } from "@/lib/whatsappUtils";

// Botão flutuante do WhatsApp (visível em mobile e desktop)
export const WhatsAppCTA: React.FC = () => {
  return (
    <a
      href={defaultWhatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition duration-200"
      title="Enviar mensagem no WhatsApp"
    >
      <Image src="/wppIcon.svg" alt="WhatsApp" width={28} height={28} className="invert" />
    </a>
  );
};
