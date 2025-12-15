# 📚 Guia para Novatos em React + Next.js

## O que você precisa saber (de forma simples)

### 1. **Componentes React**
São funções que retornam **JSX** (HTML dentro do JavaScript).

```tsx
// Exemplo simples:
export const MeuComponente = () => {
  return <div>Olá, mundo!</div>;
};
```

**Na sua landing page:**
- `Hero.tsx` = seção do topo com "Sua Saúde Mental Importa"
- `PracticeAreas.tsx` = cards das áreas de atuação
- `Footer.tsx` = rodapé

### 2. **"use client"** (no topo de cada arquivo)
Significa: "Este componente roda no NAVEGADOR do usuário, não no servidor"

Você precisa disso quando:
- Quer usar `useEffect`, `useState` (hooks)
- Quer adicionar eventos de click
- Quer acessar `window`, `navigator`, `document`

### 3. **useState** - Dados que mudam
```tsx
import { useState } from 'react';

export const Contador = () => {
  const [numero, setNumero] = useState(0); // começa em 0
  
  return (
    <div>
      <p>Você clicou {numero} vezes</p>
      <button onClick={() => setNumero(numero + 1)}>
        Clique aqui
      </button>
    </div>
  );
};
```

### 4. **useEffect** - Executar código quando o componente carrega
```tsx
import { useEffect } from 'react';

export const MeuComponente = () => {
  useEffect(() => {
    // Este código roda quando a página carrega
    console.log('A página foi carregada!');
    
    // Exemplo: coletar dados do dispositivo
    const dados = {
      userAgent: navigator.userAgent,
      idioma: navigator.language,
    };
    console.log(dados);
  }, []); // [] significa: rodar apenas UMA VEZ
  
  return <div>Conteúdo</div>;
};
```

### 5. **Props** - Passar dados para componentes
```tsx
// Componente que recebe dados
interface BotaoProps {
  texto: string;
  cor: 'azul' | 'verde';
}

export const Botao: React.FC<BotaoProps> = ({ texto, cor }) => {
  return <button className={`bg-${cor}-600`}>{texto}</button>;
};

// Usando o componente
<Botao texto="Clique aqui" cor="azul" />
<Botao texto="WhatsApp" cor="verde" />
```

---

## 📁 Arquitetura do seu projeto

```
src/
├── app/
│   ├── page.tsx          ← PÁGINA PRINCIPAL (integra tudo)
│   ├── layout.tsx        ← Layout global (header, etc)
│   └── globals.css       ← Estilos globais
│
├── components/           ← Seus componentes reutilizáveis
│   ├── Hero.tsx          ← Seção topo com CTA
│   ├── AboutDoctor.tsx   ← Sobre o médico
│   ├── PracticeAreas.tsx ← Cards de especialização
│   ├── Appointment.tsx   ← Agendamento
│   ├── WhatsAppCTA.tsx   ← Botão flutuante WhatsApp
│   └── Footer.tsx        ← Rodapé
│
└── lib/                  ← Funções auxiliares
    ├── getUserDevice.ts  ← Coleta dados do SO
    └── whatsappUtils.ts  ← Gera links do WhatsApp
```

---

## ⚙️ Como CUSTOMIZAR para seu amigo

### 1. **Adicionar informações do médico**

Edite `src/components/AboutDoctor.tsx`:
```tsx
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
  Sobre o Dr. João Silva  ← MUDE AQUI
</h2>

<p>
  Psiquiatra formado pela USP, com 10 anos de experiência ← MUDE AQUI
</p>

<p className="text-sm">
  <strong>CRM:</strong> 123456 - São Paulo ← MUDE AQUI
</p>
```

### 2. **Adicionar número do WhatsApp**

Edite `src/lib/whatsappUtils.ts`:
```tsx
export const DOCTOR_WHATSAPP_NUMBER = "5511987654321"; ← MUDE PARA O NÚMERO REAL
```

### 3. **Customizar cores**

Tailwind usa classes como: `bg-blue-600`, `text-green-500`

Cores disponíveis: `blue`, `green`, `red`, `yellow`, `purple`, etc.

Exemplo:
```tsx
// Antes (azul)
<button className="bg-blue-600">Botão</button>

// Depois (verde)
<button className="bg-green-600">Botão</button>
```

### 4. **Adicionar logo/foto**

Crie uma pasta `public/images/` e coloque as imagens lá:
```tsx
import Image from 'next/image';

<Image 
  src="/images/doctor.jpg"
  alt="Foto do Dr."
  width={300}
  height={300}
/>
```

---

## 🚀 Próximos Passos

### Para fazer agora:
1. ✅ Editar dados do médico em `AboutDoctor.tsx`
2. ✅ Adicionar WhatsApp real em `whatsappUtils.ts`
3. ✅ Mudar cores se quiser
4. ✅ Deploy no Vercel (grátis!)

### Para depois (mais avançado):
- [ ] Adicionar API para salvar dados de visitantes
- [ ] Analytics (Google Analytics)
- [ ] Chat bot com IA
- [ ] Integração com agenda online

---

## 📱 Tailwind CSS - Classes úteis

```tsx
// Tamanho de fonte
<h1 className="text-4xl">Grande</h1>
<p className="text-lg">Normal</p>
<small className="text-sm">Pequeno</small>

// Cores
<div className="bg-blue-600">Fundo azul</div>
<p className="text-gray-900">Texto escuro</p>

// Espaçamento
<div className="p-4">Padding (espaço interno) = 4 unidades</div>
<div className="mb-6">Margin bottom (espaço embaixo) = 6 unidades</div>

// Layout
<div className="flex gap-4">← Itens em linha com espaço entre</div>
<div className="grid grid-cols-2">← 2 colunas</div>
<div className="grid grid-cols-1 md:grid-cols-2">← 1 coluna mobile, 2 desktop</div>

// Responsividade
sm:  ← telas pequenas (640px+)
md:  ← telas médias (768px+)
lg:  ← telas grandes (1024px+)
xl:  ← telas muito grandes (1280px+)

Exemplo: <h1 className="text-2xl md:text-4xl">← 2xl em mobile, 4xl em desktop</h1>
```

---

## 🐛 Debugging - Como resolver erros

1. **Abra o console do navegador** (F12)
2. **Procure por erros em vermelho**
3. **Veja o arquivo e linha do erro**
4. Geralmente o erro aparece no terminal também

Exemplo de erro:
```
TypeError: Cannot read properties of undefined (reading 'map')
```
Significa: Você tentou fazer `.map()` em algo que é `undefined`.

---

## 📚 Recursos para aprender mais

- **React Docs**: https://react.dev/
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/

---

## ✅ Checklist antes de entregar para o amigo

- [ ] Informações do médico corretas
- [ ] Número do WhatsApp funcionando
- [ ] Endereço do consultório correto
- [ ] CRM visível
- [ ] Texto profissional (sem promessas de cura)
- [ ] Botões responsivos (testou no celular?)
- [ ] Links do WhatsApp abrem corretamente

---

## 🚀 PASSO A PASSO: Como foi construído este projeto

Este guia mostra exatamente como o projeto foi desenvolvido passo a passo. Você pode seguir para criar sites similares!

### **Passo 1: Estrutura Base do Next.js**

Começamos com um projeto Next.js padrão que já vinha configurado. A estrutura principal é:

```
src/
├── app/           ← Páginas da aplicação
├── components/    ← Componentes reutilizáveis
└── lib/          ← Funções auxiliares
```

**Conceito**: No Next.js, tudo começa em `app/page.tsx` que é a página principal.

---

### **Passo 2: Criação do Componente TopHeader**

**Arquivo**: `src/components/TopHeader.tsx`

O `TopHeader` é um componente fixo no topo que mostra:
- Um ícone de localização (📍)
- Texto: "Atendimento presencial e online para todo Brasil"
- Fundo cinza escuro

```tsx
// Recebe um prop: atTop (boolean)
// Quando atTop === true, fica visível
// Quando atTop === false, desliza para cima com transform: translateY(-100%)
```

**Aprendizado**: 
- Uso de `fixed` para manter sempre no topo
- `transition-transform duration-200` para animação suave
- Props para comunicação entre componentes

---

### **Passo 3: Criação do Componente Navbar**

**Arquivo**: `src/components/Navbar.tsx`

O `Navbar` é o menu de navegação que:
- Fica logo abaixo do `TopHeader` quando em repouso
- Sobe para o topo quando a página sofre scroll (y > 0)
- Tem background transparente quando y=0, branco quando y>0
- Exibe o logo e links de navegação

```tsx
// Props recebido: atTop
// Estados: isOpen (para mobile menu)
// Lógica: quando atTop=false, position muda de top-8 para top-0
```

**Aprendizado**:
- Posicionamento `fixed` com valores dinâmicos
- Responsive: logo maior, menu adaptado
- Detecção de scroll com `window.scrollY`
- Classes condicionais com ternário

---

### **Passo 4: Componentes de Seções (Hero, AboutDoctor, etc)**

**Arquivos**:
- `Hero.tsx` - Seção principal com título e CTAs
- `AboutDoctor.tsx` - Informações do médico
- `PracticeAreas.tsx` - Cards com doenças tratadas
- `Appointment.tsx` - Seção de agendamento
- `Footer.tsx` - Rodapé

**Padrão usado em todos**:
```tsx
export const NomeComponente: React.FC = () => {
  return (
    <section id="unique-id" className="py-16 bg-color px-4">
      {/* Conteúdo */}
    </section>
  );
};
```

**Aprendizado**:
- Cada seção tem um `id` único para scroll suave
- Padding padrão com Tailwind: `py-16` (espaçamento vertical)
- `max-w-3xl` ou `max-w-4xl` para limitar largura
- Grid e flex para layout responsivo

---

### **Passo 5: Integração na Página Principal**

**Arquivo**: `src/app/page.tsx`

A página principal centraliza:
1. **Estado global**: `atTop` detecta se está no topo
2. **Coleta de dados**: `getUserDevice()` captura SO do visitante
3. **Layout**: Renderiza componentes em ordem

```tsx
const [atTop, setAtTop] = useState(true);

useEffect(() => {
  const handleScroll = () => setAtTop(window.scrollY === 0);
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Passa atTop para TopHeader e Navbar
<TopHeader atTop={atTop} />
<Navbar atTop={atTop} />
```

**Aprendizado**:
- Props fluem de pai para filhos (`page.tsx` → componentes)
- `useEffect` com cleanup para remover listeners
- O array vazio `[]` significa executar apenas uma vez na montagem

---

### **Passo 6: Utilitários de WhatsApp**

**Arquivo**: `src/lib/whatsappUtils.ts`

Cria links que abrem o WhatsApp com mensagem pré-preenchida:

```tsx
export function generateWhatsAppLink(phoneNumber: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
```

**Aprendizado**:
- `wa.me/` é o protocolo do WhatsApp
- `encodeURIComponent()` converte espaços em `%20`
- Usado em botões com `href` ao invés de `onclick`

---

### **Passo 7: Coleta de Dados do Dispositivo**

**Arquivo**: `src/lib/getUserDevice.ts`

Coleta informações sobre o navegador do visitante (sem dados sensíveis):

```tsx
export function getUserDevice(): DeviceData {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    timestamp: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}
```

**Aprendizado**:
- `navigator.*` acessa info do navegador
- `window.inner*` obtém tamanho da tela
- Executado apenas no cliente com `"use client"`

---

### **Passo 8: Estilização com Tailwind CSS**

Tailwind fornece classes prontas para estilo:

```tsx
// Cores
className="bg-blue-600 text-white"

// Tamanho e espaçamento
className="py-16 px-4 rounded-lg"

// Responsividade
className="text-2xl md:text-4xl"
// em mobile: text-2xl
// em desktop: text-4xl

// Efeitos
className="hover:bg-blue-700 transition duration-200"
```

**Aprendizado**:
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Classes sempre em ordem: layout → cores → efeitos
- `transition duration-*` para animações suaves

---

### **Passo 9: Deploy e Teste**

Para testar localmente:

```bash
npm run dev
# Abre em http://localhost:3000
```

Para produção:

```bash
npm run build
npm run start
# ou fazer deploy no Vercel
```

---

## 🎯 Fluxo Completo de Dados

```
User abre site (localhost:3000)
        ↓
page.tsx carrega e renderiza:
        ↓
┌─────────────────────────────┐
│  TopHeader (com prop atTop)  │
│  Navbar (com prop atTop)     │
│  Hero (Chamada principal)    │
│  AboutDoctor (Info médico)   │
│  PracticeAreas (Doenças)     │
│  Appointment (Agendamento)   │
│  Footer (Rodapé)             │
│  WhatsAppCTA (Botão flutuante)
└─────────────────────────────┘
        ↓
User clica em link de navegação
        ↓
Scroll suave para seção (id)
        ↓
Navbar detecta scroll → background muda
        ↓
User clica em "Agendar via WhatsApp"
        ↓
Abre WhatsApp com mensagem pré-preenchida
```

---

## 📱 Responsividade: Como Funciona

O Tailwind detecta o tamanho da tela:

```tsx
className="
  text-2xl           // Mobile (padrão)
  md:text-3xl        // 768px+
  lg:text-4xl        // 1024px+
"
```

Na navbar:
```tsx
<div className="hidden md:flex">
  {/* Aparece apenas em desktop */}
</div>

<div className="md:hidden">
  {/* Menu hamburger apenas em mobile */}
</div>
```

---

## 🔧 Customizações Práticas

### Mudar a cor principal:
Procure por `bg-blue-600` nos arquivos `.tsx` e substitua por:
- `bg-green-600` (verde)
- `bg-purple-600` (roxo)
- `bg-red-600` (vermelho)

### Aumentar tamanho do logo:
Em `Navbar.tsx`:
```tsx
<Image
  width={220}      // Mude para maior ou menor
  height={80}      // Mude proporcionalmente
  ...
/>
```

### Mudar número do WhatsApp:
Em `lib/whatsappUtils.ts`:
```tsx
export const DOCTOR_WHATSAPP_NUMBER = "55XXXXXXXXXXXX";
// Formato: 55 + DDD + número completo
```

---

## ✨ Passo 10: Botão Flutuante WhatsApp em Desktop

**Arquivo**: `src/components/WhatsAppCTA.tsx`

Inicialmente, o botão flutuante do WhatsApp tinha a classe `md:hidden`, o que significa que **só aparecia em mobile**. 

Para torná-lo visível em desktop também, simplesmente removemos essa classe:

```tsx
// Antes:
className="... md:hidden"  // ❌ Desaparecia em desktop

// Depois:
className="... "           // ✅ Aparece sempre
```

**O que mudou**:
- Removido `md:hidden` da classe
- Agora o botão aparece em **todas as resoluções** (mobile, tablet, desktop)
- Fica fixo no canto inferior direito em qualquer tamanho de tela

**Aprendizado**:
- `md:hidden` = "esconder em breakpoint md e acima"
- Para remover: basta tirar a classe
- Útil para manter componentes visíveis em todas as telas

**Customizações**:
```tsx
// Mudar posição para canto esquerdo:
className="bottom-6 left-6"  // era: right-6

// Mudar tamanho do botão:
className="w-16 h-16"  // era: w-14 h-14

// Aumentar ícone:
<MessageCircle size={32} />  // era: size={28}
```

---

## ✨ Passo 11: Número do WhatsApp e Mensagem Formal

**Arquivo**: `src/lib/whatsappUtils.ts`

Atualizamos o número e a mensagem padrão:

```tsx
export const DOCTOR_WHATSAPP_NUMBER = "5515997569809";
// Formato: 55 (Brasil) + 15 (DDD) + 997569809 (número)
// SEM formatação, sem hífens ou parênteses!

export const defaultWhatsAppLink = generateWhatsAppLink(
  DOCTOR_WHATSAPP_NUMBER,
  "Prezado Dr. Mario Luiz Watanabe, gostaria de agendar uma consulta psiquiátrica. Fico no aguardo de sua disponibilidade."
);
```

**Aprendizado**:
- Número WhatsApp deve ter **apenas dígitos**: `55` + DDD + número
- Sem formatação: `(15) 99756-9809` ❌ vira `5515997569809` ✅
- Mensagem deve ser **profissional e clara**

---

## 🎨 Onde Está o Ícone do WhatsApp?

O ícone do WhatsApp é importado de **lucide-react**:

```tsx
import { MessageCircle } from "lucide-react";

// Usado em 3 arquivos:
// 1. src/components/Hero.tsx
<MessageCircle size={20} />

// 2. src/components/Appointment.tsx  
<MessageCircle size={24} />

// 3. src/components/WhatsAppCTA.tsx
<MessageCircle size={28} />
```

### **Como Substituir por um Ícone Customizado**:

**Opção 1: Usar um SVG local**

1. Coloque seu SVG em `public/whatsapp-icon.svg`

2. Importe e use em lugar do `MessageCircle`:

```tsx
import Image from "next/image";

// Antes:
<MessageCircle size={28} />

// Depois:
<Image
  src="/whatsapp-icon.svg"
  alt="WhatsApp"
  width={28}
  height={28}
/>
```

**Opção 2: Usar outro ícone do lucide-react**

Lucide tem vários ícones. Veja em: https://lucide.dev/

```tsx
import { Phone, Send, MessageSquare } from "lucide-react";

// Escolha um destes:
<Phone size={28} />
<Send size={28} />
<MessageSquare size={28} />
```

**Opção 3: Inline SVG customizado**

Copie o SVG do seu ícone e coloque direto:

```tsx
<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
  {/* seu SVG aqui */}
</svg>
```

---

**Dúvidas? Pergunte!** 🚀
