"use client";

import React from "react";
import Image from "next/image";
import { defaultWhatsAppLink } from "@/lib/whatsappUtils";

// Mobile-first hero section for psychiatrist landing page
export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md md:max-w-2xl text-center space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Bem-vindo
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Sua Saúde Mental Importa
          </h1>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          Atendimento psiquiátrico profissional e compassivo para sua melhor
          qualidade de vida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            <Image src="/wppIcon.svg" alt="WhatsApp" width={20} height={20} className="invert" />
            Agendar via WhatsApp
          </a>
          <button
            onClick={() => scrollToSection("about")}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
};