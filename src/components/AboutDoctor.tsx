"use client";

import React from "react";

// Seção sobre o médico com informações profissionais
export const AboutDoctor: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Dr. Mario Luiz Watanabe
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Minha atuação é focada no atendimento em saúde mental, oferecendo
              um cuidado individualizado e humanizado para cada paciente. Acredito
              na importância de um olhar atento e empático para compreender as
              necessidades de cada pessoa, promovendo um tratamento baseado na
              escuta qualificada e em abordagens atualizadas da Psiquiatria.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Formação</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Médico - Pontifícia Universidade Católica de São Paulo (PUC-SP)</li>
                  <li>✓ Psiquiatria - Pontifícia Universidade Católica de São Paulo (PUC-SP)</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Registro Profissional</h3>
                <p className="text-sm">
                  <strong>CRM:</strong> CRM SP 227378
                  <br />
                  <strong>RQE:</strong> RQE 135911
                </p>
                <p className="text-sm mt-2">
                  <strong>Endereço:</strong> Rua Goiás 57, Cardio Centro Sorocaba, Sorocaba - SP, 18035-550
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Experiência</h3>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>CAPS III Viver em Liberdade — Sorocaba, SP</li>
                <li>CAPS I — Pariquera-Açu, SP</li>
                <li>Atuação em psiquiatria adulta e clínica</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Principais áreas atendidas</h3>
              <p className="text-sm text-gray-700">
                Depressão, Transtorno bipolar, Ansiedade, Transtorno obsessivo-compulsivo (TOC), Transtorno do pânico, Esquizofrenia, Insônia, TDAH e transtornos do humor.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Publicações</h3>
              <p className="text-sm text-gray-700">
                A vitamina C na esquizofrenia apresenta benefício? Estudo preliminar com análise comportamental em ratos. <br />(J. bras. psiquiatr. 71 (3) • Jul-Sep 2022)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
