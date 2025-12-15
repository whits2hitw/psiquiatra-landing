"use client";

import { useEffect, useState } from "react";
import { TopHeader } from "@/components/TopHeader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutDoctor } from "@/components/AboutDoctor";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Appointment } from "@/components/Appointment";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Footer } from "@/components/Footer";
import { getUserDevice, type DeviceData } from "@/lib/getUserDevice";

/**
 * Landing Page SPA para Consultório Psiquiátrico
 * 
 * Esta página renderiza uma landing page completa com:
 * - Hero section com CTA para WhatsApp
 * - Sobre o médico
 * - Áreas de especialização
 * - Seção de agendamento
 * - CTA flutuante do WhatsApp (mobile)
 * - Rodapé com informações legais
 * - Coleta anônima de dados do dispositivo
 */
export default function Home() {
  const [deviceData, setDeviceData] = useState<DeviceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [atTop, setAtTop] = useState(true);

  // Coleta dados do dispositivo quando a página monta
  // Executado apenas uma vez com useEffect
  useEffect(() => {
    try {
      const data = getUserDevice();
      setDeviceData(data);

      // Você poderia enviar esses dados para um servidor aqui
      // Exemplo (descomentar quando estiver pronto):
      // fetch('/api/track', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      console.log("Dados do dispositivo:", data);
    } catch (error) {
      console.error("Erro ao coletar dados do dispositivo:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Detecta se a página está no topo e compartilha com header/navbar
  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header com localização */}
      <TopHeader atTop={atTop} />

      {/* Navbar */}
      <div className="pt-16">
        <Navbar atTop={atTop} />
      </div>

      {/* Hero Section */}
      <div id="hero" className="pt-20">
        <Hero />
      </div>

      {/* About Doctor Section */}
      <div id="about">
        <AboutDoctor />
      </div>

      {/* Practice Areas Section */}
      <div id="practice-areas">
        <PracticeAreas />
      </div>

      {/* Appointment Section */}
      <div id="appointment">
        <Appointment />
      </div>

      {/* Contact Section (Footer) */}
      <div id="contact">
        <Footer />
      </div>

      {/* Floating WhatsApp Button (mobile only) */}
      <WhatsAppCTA />

      {/* Loading indicator (invisível após carregar) */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-10 z-50 pointer-events-none" />
      )}
    </div>
  );
}
