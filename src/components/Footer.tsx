"use client";

import React from "react";

// Rodapé com informações legais e de contato
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Consultório</h3>
            <p className="text-sm">
              Rua Goiás 57, Cardio Centro Sorocaba
              <br />
              Sorocaba - SP, 18035-550
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horário</h3>
            <p className="text-sm">
              Segunda a sexta: 08h às 18h
              <br />
              Sábado: 08h às 12h
              <br />
              Domingo: Fechado
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Registro</h3>
            <p className="text-sm">
              Dr. Mario Luiz Watanabe
              <br />
              CRM SP 227378 — RQE 135911
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-400 text-center mb-4">
            Este site fornece informações educacionais sobre psiquiatria e não
            substitui o aconselhamento profissional. Consulte um profissional
            qualificado para diagnóstico e tratamento.
          </p>

          <p className="text-center text-xs text-gray-500">
            © 2024 Consultório Psiquiátrico. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
