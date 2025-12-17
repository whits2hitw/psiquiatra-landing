import React from "react";
import { CalendarCheck, MessageSquare, UserCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Primeiro Contato",
    description: "Clique em um dos botões de agendamento. Nossa equipe irá te auxiliar a escolher o melhor horário e tirar dúvidas iniciais.",
    icon: <MessageSquare size={36} />
  },
  {
    id: 2,
    title: "Agendamento Efetuado",
    description: "Você receberá todas as orientações sobre a consulta, seja ela presencial ou por telemedicina, com total sigilo e segurança.",
    icon: <CalendarCheck size={36} />
  },
  {
    id: 3,
    title: "Consulta e Cuidado",
    description: "Realização da consulta com escuta qualificada e humana, onde definiremos juntos o plano terapêutico ideal para você.",
    icon: <UserCheck size={36} />
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 italic">
            Como funciona o atendimento?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Um processo simples e acolhedor, focado no seu bem-estar desde o primeiro contato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center group">
              {/* Esta div interna agrupa o círculo e o número para animarem juntos */}
              <div className="relative inline-flex mb-6 transition-transform duration-300 group-hover:scale-110">
                {/* Círculo Principal com o Ícone */}
                <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  {step.icon}
                </div>
                
                {/* Número fixo na mesma posição (canto inferior direito do círculo) */}
                <span className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md border-2 border-white">
                  {step.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 italic">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
