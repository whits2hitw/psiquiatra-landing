"use client";

import React from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { defaultWhatsAppLink } from "@/lib/whatsappUtils";

// Componente de CTA para agendamento
export const Appointment: React.FC = () => {
  return (
    <section className="relative shadow-[0_-1px_0_#0f172a] py-20 bg-slate-900 text-white"> {/* Um azul quase preto, muito elegante */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
          Agende Sua Consulta Agora
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-bold italic">
          Oferecemos atendimento online para todo o Brasil e presencial em Sorocaba.
          Escolha a melhor opção para você.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Botão Principal - Verde WhatsApp */}
          <a href={defaultWhatsAppLink} className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            <Image
             src="/wppIcon.svg" alt="Enviar mensagem" width={24} height={24} className="brightness-0 invert" />
            Enviar Mensagem
          </a>

          {/* Botão Secundário - Outline */}
          <a href="tel:+55-15-9-9756-9809" className="flex items-center justify-center gap-3 border-2 border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all">
            <Phone size={20} />
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
};
