"use client";

import React from "react";


// Rodapé com informações legais e de contato
export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 border-t border-slate-800">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* Coluna 1: Logo/Nome */}
      <div className="space-y-4">
        <h4 className="text-white font-bold text-lg italic">Dr. Mario Watanabe</h4>
        <p className="text-sm leading-relaxed text-slate-400">
          Cuidado integral e humano dedicado à sua saúde mental e qualidade de vida.
        </p>
      </div>

      {/* Coluna 2: Consultório */}
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Consultório</h4>
        <ul className="text-sm space-y-2 text-slate-400">
          <li>Rua Goiás 57, Cardio Centro</li>
          <li>Sorocaba - SP, 18035-550</li>
          <li>(+55) 15 997569809</li>
        </ul>
      </div>

      {/* Coluna 3: Horários */}
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Atendimento</h4>
        <ul className="text-sm space-y-2 text-slate-400">
          <li>Segunda a Sexta: 08h às 18h</li>
          <li>Sábado: 08h às 12h</li>
          <li>Domingo: Fechado</li>
        </ul>
      </div>

      {/* Coluna 4: Registro */}
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
        <ul className="text-sm space-y-2 text-slate-400">
          <li>CRM SP 227378</li>
          <li>RQE 135911</li>
          <li className="pt-2">
            <a href="https://instagram.com/mariowatanabe.psiquiatra" target="_blank" className="hover:text-blue-400 transition-colors">
              @mariowatanabe.psiquiatra
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Linha Final */}
    <div className="pt-8 border-t border-slate-800 text-center">
      <p className="text-xs text-slate-500 mb-4 px-4 max-w-3xl mx-auto leading-relaxed tracking-wide">
        Este site fornece informações educacionais sobre psiquiatria e não substitui o aconselhamento profissional. 
        Consulte um profissional qualificado para diagnóstico e tratamento.
      </p>
      <p className="text-[10px] text-slate-600 uppercase tracking-tighter">
        © 2025 Consultório Psiquiátrico. Todos os direitos reservados.
      </p>
    </div>
  </div>
</footer>
  );
};
