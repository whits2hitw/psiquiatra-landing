"use client";

import React from "react";
import { Heart, Brain, Zap, Users, Activity } from "lucide-react";

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "depression",
    title: "Depressão",
    description: "Transtorno do humor caracterizado por tristeza persistente, falta de energia e perda de interesse em atividades. Afeta o sono, apetite e concentração. O tratamento combina medicação e psicoterapia para restaurar o bem-estar emocional e a qualidade de vida.",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: "anxiety",
    title: "Transtornos de Ansiedade",
    description: "Caracterizado por preocupação excessiva, palpitações e tensão muscular. Inclui ansiedade generalizada, pânico e fobias. O tratamento envolve técnicas de relaxamento, terapia cognitivo-comportamental e medicação quando necessário para recuperar a tranquilidade.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: "bipolar",
    title: "Transtorno Bipolar",
    description: "Transtorno do humor com episódios alternados de depressão profunda e euforia (mania). Afeta o sono, energia e comportamento. O manejo inclui estabilizadores de humor, psicoterapia e acompanhamento contínuo para evitar oscilações extremas.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "adhd",
    title: "TDAH",
    description: "Transtorno de desenvolvimento que afeta atenção, impulsos e hiperatividade. Manifesta-se dificuldade em concentração, organização e controle de comportamento. Tratamento inclui medicação estimulante, estratégias comportamentais e acompanhamento para melhorar funcionalidade.",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    id: "dependency",
    title: "Dependência Química e Alcoolismo",
    description: "Abordagem especializada para o tratamento do uso nocivo e dependência de substâncias. O foco é na reabilitação integral, utilizando estratégias farmacológicas e suporte psicoterapêutico para auxiliar na recuperação da autonomia e melhora da qualidade de vida do paciente.",
    icon: <Activity className="w-8 h-8" />,
  },
  {
    id: "ocd",
    title: "Transtorno Obsessivo-Compulsivo (TOC)",
    description: "Caracterizado por pensamentos obsessivos repetitivos e comportamentos compulsivos para aliviar a ansiedade. Interfere nas atividades diárias. O tratamento com terapia cognitivo-comportamental e medicação ajuda a reduzir a intensidade dos sintomas.",
    icon: <Zap className="w-8 h-8" />,
  },  
];

export const PracticeAreas: React.FC = () => {
  return (
    <section id="practice-areas" className="py-16 bg-slate-50 px-4">

      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 italic">
              Áreas de Atuação
            </h2>
            <p className="text-gray-600 text-lg">
              Oferecemos atendimento especializado em diversas áreas da psiquiatria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <div
                key={area.id}
                className=" flex-col h-full p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-slate-100 hover:shadow-lg transition duration-200"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
