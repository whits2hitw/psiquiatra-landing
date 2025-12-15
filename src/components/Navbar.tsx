"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// Navbar com navegação para seções
interface NavbarProps {
  atTop: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ atTop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = !atTop;

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Sobre mim", id: "about" },
    { label: "Especialidades", id: "practice-areas" },
    { label: "Agendamento", id: "appointment" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <nav
      className={`fixed ${atTop ? "top-8 md:top-10" : "top-0"} left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:opacity-80 transition"
            >
              <div className="h-full flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={220}
                  height={80}
                  priority
                  className="object-contain max-h-full"
                />
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-800 hover:text-blue-600 font-medium transition"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition text-gray-800 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
