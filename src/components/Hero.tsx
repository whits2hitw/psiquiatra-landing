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
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat scale-105
        bg-gradient-to-b 
      from-[#4F7FB0] 
      via-[#8FAAC4] 
      to-[#EDEDED]"
        // style={{ backgroundImage: "url('/hero-bg-img.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block" aria-hidden="true">
        <div
          className="absolute left-0 top-0 bottom-0 bg-left bg-no-repeat bg-contain"
          style={{
            top: "18%",
            height: "95vh",
            width: "28%",
            backgroundImage: "url('/person-img.png')",
            zIndex: 2
          }}
        />
        <div
          className="absolute bg-right bg-no-repeat bg-contain"
          style={{
            left: "34%",
            top: "13%",
            height: "60vh",
            width: "30%",
            opacity: 0.1,
            backgroundImage: "url('/brain-img.svg')",
            zIndex: 1
          }}
        />

        {/* Instagram Icon e texto */}
        <div
          className="absolute flex items-center gap-2"
          style={{
            right: '2%',
            bottom: '3%',
            zIndex: 3
          }}
        >
            <span className="inline-flex items-center justify-center bg-white rounded-full shadow-md" style={{ width: 48, height: 48 }}>
              <Image
                src="/instagram-icon.svg"
                alt="Instagram"
                width={36}
                height={36}
                className="drop-shadow"
                style={{ minWidth: 36, minHeight: 36 }}
              />
            </span>
          <span className="font-semibold text-base" style={{ color: '#4F7FB0', textShadow: '0 1px 4px #EDEDED99' }}>
            @mariowatanabe.psiquiatra
          </span>
        </div>
      </div>

      <div className="relative max-w-md md:max-w-2xl text-center space-y-6">
        <div className="space-y-7">
          <p className="text-lg font-bold text-slate-600 tracking-wider uppercase tracking-wide">
            Bem-vindo
          </p>
          <h1 className="uppercase text-4xl md:text-4xl font-extrabold text-slate-800">
            Sua Saúde Mental Importa
          </h1>
        </div>

        <p className="text-lg text-slate-800 uppercase leading-relaxed">
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
            className="cursor-pointer border-2 border-slate-600 text-slate-700 hover:bg-blue-100 font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
};