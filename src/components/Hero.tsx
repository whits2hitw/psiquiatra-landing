"use client";

import React from "react";
import Image from "next/image";
import { defaultWhatsAppLink } from "@/lib/whatsappUtils";
import { inPersonWhatsAppLink } from "@/lib/whatsappUtils";
import { onlineWhatsAppLink } from "@/lib/whatsappUtils";

// Mobile-first hero section for psychiatrist landing page
export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView();
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
            height: "98vh",
            width: "28%",
            backgroundImage: "url('/person-img.png')",
            zIndex: 2
          }}
        />
        <div
          className="absolute bg-right bg-no-repeat bg-contain"
          style={{
            left: "50%",
            top: "13%",
            height: "60vh",
            width: "30%",
            opacity: 0.1,
            backgroundImage: "url('/brain-img.svg')",
            zIndex: 1,
            transform: "translateX(-50%)"
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
          <span className="inline-flex items-center justify-center " style={{ width: 36, height: 36 }}>
            <Image
              src="/insta-icon.png"
              alt="Instagram"
              width={28}
              height={28}
              className="drop-shadow"
            />
          </span>
          <span className="font-semibold text-base" style={{ color: '#4F7FB0', textShadow: '0 1px 4px #EDEDED99' }}>
            @mariowatanabe.psiquiatra
          </span>
        </div>
      </div>

      <div className="relative max-w-md md:max-w-2xl text-center mt-50 md:mt-0 space-y-8">
        <div className="space-y-7">
          <p className="text-lg font-bold text-slate-600 tracking-wider uppercase ">
            Bem-vindo
          </p>
          <h1 className="uppercase text-4xl md:text-4xl font-black text-slate-800">
            Sua Saúde Mental Importa
          </h1>
        </div>

        <p className="text-lg font-semibold text-slate-600   leading-relaxed tracking-wider">
          Atendimento psiquiátrico especializado, com foco no cuidado integral da saúde mental.
          Uma abordagem ética, humana e baseada em evidências científicas, voltada para o tratamento e a prevenção dos transtornos emocionais.
          Cuidar da mente é essencial para viver com mais saúde, clareza e qualidade de vida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href={onlineWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-green-600 hover:bg-green-700 text-white font-md py-1 px-8 rounded-lg transition duration-200"
          >
            <Image src="/wppIcon.svg" alt="WhatsApp" width={18} height={18} className="text-white" />
            Agendar consulta <br />Online
          </a>
          <a
            href={inPersonWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-slate-600 hover:bg-slate-700 text-white font-md py-1 px-8 rounded-lg transition duration-200"
          >
            <Image src="/wppIcon.svg" alt="WhatsApp" width={18} height={18} className="text-white" />
            Agendar consulta <br />Presencial
          </a>
        </div>
      </div>
    </section>
  );
};