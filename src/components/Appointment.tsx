"use client";

import React from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { defaultWhatsAppLink } from "@/lib/whatsappUtils";

// Componente de CTA para agendamento
export const Appointment: React.FC = () => {
  return (
    <section id="appointment" className="py-16 bg-blue-600 text-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Agende Sua Consulta Agora
        </h2>

        <p className="text-lg text-blue-100 mb-8">
          Oferecemos atendimento online e presencial. Entre em contato para mais
          informações sobre disponibilidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-200"
          >
            <Image src="/wppIcon.svg" alt="WhatsApp" className="invert" width={24} height={24} />
            Enviar Mensagem
          </a>

          <a
            href="tel:+5511999999999"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition duration-200"
          >
            <Phone size={24} />
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
};
