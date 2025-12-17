"use client";

import React from "react";

// Seção sobre o médico com informações profissionais
export const AboutDoctor: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 
    bg-gradient-to-b from-[#EDEDED]/50 to-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* Foto e nome do doutor lado a lado */}
          <div className="flex items-center gap-6 mb-8">
            <img
              src="/profile-pic.jpeg"
              alt="Dr. Mario Luiz Watanabe"
              className="w-26 h-26 rounded-full object-cover border-4 border-blue-200 shadow-md"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Dr. Mario Luiz Watanabe</h2>
              <p className="text-base text-gray-600 font-medium">Psiquiatra CRM-SP 227378 | RQE 135911</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Minha atuação é focada no atendimento em saúde mental, oferecendo
              um cuidado individualizado e humanizado para cada paciente. Acredito
              na importância de um olhar atento e empático para compreender as
              necessidades de cada pessoa, promovendo um tratamento baseado na
              escuta qualificada e em abordagens atualizadas da Psiquiatria.
            </p>

            {/* Formação e Registro Profissional estilizados */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Formação */}
              <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow p-6 flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-200 rounded-full p-3">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M12 2C7.03 2 2.73 5.11 2.73 8.5c0 1.61 1.13 3.09 3.04 4.19.02.01.03.02.05.03v2.28c0 .41.34.75.75.75h2.5v2.25c0 .41.34.75.75.75s.75-.34.75-.75V15.75h2.5c.41 0 .75-.34.75-.75v-2.28c.02-.01.03-.02.05-.03 1.91-1.1 3.04-2.58 3.04-4.19C21.27 5.11 16.97 2 12 2zm0 2c4.13 0 7.27 2.36 7.27 4.5 0 1.13-.93 2.29-2.61 3.19-.37.2-.66.57-.66 1.01v1.8H7.99v-1.8c0-.44-.29-.81-.66-1.01C5.66 8.79 4.73 7.63 4.73 6.5 4.73 4.36 7.87 2 12 2zm-2.25 10.5h4.5v1.5h-4.5v-1.5z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Formação</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Médico - PUC-SP</li>
                    <li>• Psiquiatria - PUC-SP</li>
                  </ul>
                </div>
              </div>
              {/* Registro Profissional */}
              <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow p-6 flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-200 rounded-full p-3">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#059669" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm0 3a2 2 0 110 4 2 2 0 010-4zm0 6c2.21 0 4 1.79 4 4v1H8v-1c0-2.21 1.79-4 4-4z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">Registro Profissional</h3>
                  <p className="text-sm"><strong>CRM:</strong> SP 227378<br /><strong>RQE:</strong> 135911</p>
                  <p className="text-xs text-gray-600 mt-1"><strong>Endereço:</strong> Rua Goiás 57, Cardio Centro Sorocaba, Sorocaba - SP</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
                {/* Ícone de portfólio/carreira */}
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M4 7V6a3 3 0 013-3h10a3 3 0 013 3v1h1a1 1 0 011 1v11a3 3 0 01-3 3H5a3 3 0 01-3-3V8a1 1 0 011-1h1zm2-1v1h12V6a1 1 0 00-1-1H7a1 1 0 00-1 1zm-2 3v9a1 1 0 001 1h14a1 1 0 001-1V9H4z"/></svg>
                Experiência Profissional
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-white border border-blue-100 rounded-lg shadow p-4 flex flex-col gap-1">
                  <span className="font-semibold text-blue-800">CAPS I</span>
                  <span className="text-xs text-gray-500">Pariquera-Açu, SP</span>
                </div>
                <div className="flex-1 bg-white border border-blue-100 rounded-lg shadow p-4 flex flex-col gap-1">
                  <span className="font-semibold text-blue-800">CAPS III Viver em Liberdade</span>
                  <span className="text-xs text-gray-500">Sorocaba, SP</span>
                </div>
                <div className="flex-1 bg-white border border-blue-100 rounded-lg shadow p-4 flex flex-col gap-1">
                  <span className="font-semibold text-blue-800">Psiquiatria adulta e clínica</span>
                  <span className="text-xs text-gray-500">Atuação ampla</span>
                </div>
              </div>
            </div>


            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
                {/* Ícone de artigo/publicação */}
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#a21caf" d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.83a2 2 0 00-.59-1.41l-4.83-4.83A2 2 0 0013.17 2H6zm6 1.5V8a1 1 0 001 1h4.5L18 4.83A.5.5 0 0017.67 4.5H12zM6 4h6v4a3 3 0 003 3h4v9a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm3 8a1 1 0 100 2h6a1 1 0 100-2H9zm-1 4a1 1 0 100 2h8a1 1 0 100-2H8z"/></svg>
                Publicações
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-xl shadow p-6 flex items-start gap-4">
                <div className="flex-shrink-0 bg-purple-200 rounded-full p-3 mt-1">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#a21caf" d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.83a2 2 0 00-.59-1.41l-4.83-4.83A2 2 0 0013.17 2H6zm6 1.5V8a1 1 0 001 1h4.5L18 4.83A.5.5 0 0017.67 4.5H12zM6 4h6v4a3 3 0 003 3h4v9a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm3 8a1 1 0 100 2h6a1 1 0 100-2H9zm-1 4a1 1 0 100 2h8a1 1 0 100-2H8z"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-purple-900 mb-1">A vitamina C na esquizofrenia apresenta benefício?</div>
                  <div className="text-sm text-gray-700 mb-1">Estudo preliminar com análise comportamental em ratos.</div>
                  <div className="text-xs text-gray-500">J. bras. psiquiatr. 71 (3) • Jul-Sep 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
